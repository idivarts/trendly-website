/**
 * Client helper for the free AI tools.
 *
 * The marketing site is a STATIC export (no Next.js API routes / server), so
 * the tools call an EXTERNAL backend. The API key lives server-side on that
 * backend — never embed any key here.
 *
 * API contract:
 *   POST  https://be.trendly.now/tools/generate
 *   body  { tool: "<toolId>", inputs: { ...stringFields } }
 *   ok    { results: ["...", "..."] }
 *   err   { error: "message" }
 */

/** The external generation endpoint (single source of truth). */
export const TOOLS_ENDPOINT = 'https://be.trendly.now/tools/generate';

/**
 * Thrown when the backend reachable but returns an `{ error }` payload or a
 * non-2xx status. `unreachable` is true when the fetch itself failed (network
 * error / endpoint not deployed yet) so the UI can show a "warming up" message.
 */
export class ToolError extends Error {
  unreachable: boolean;
  constructor(message: string, unreachable = false) {
    super(message);
    this.name = 'ToolError';
    this.unreachable = unreachable;
  }
}

/**
 * Calls the backend and returns an array of generated strings.
 * Throws a {@link ToolError} on any failure.
 */
export async function generate(
  tool: string,
  inputs: Record<string, string>
): Promise<string[]> {
  let res: Response;

  try {
    res = await fetch(TOOLS_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ tool, inputs }),
    });
  } catch {
    // Network error / CORS / endpoint not deployed yet.
    throw new ToolError('unreachable', true);
  }

  let data: { results?: string[]; error?: string } = {};
  try {
    data = await res.json();
  } catch {
    // Backend returned non-JSON (e.g. an HTML error page).
    throw new ToolError('unreachable', true);
  }

  if (!res.ok || data.error) {
    throw new ToolError(data.error || `Request failed (${res.status})`);
  }

  if (!Array.isArray(data.results) || data.results.length === 0) {
    throw new ToolError('No results were generated. Try tweaking your inputs.');
  }

  return data.results.filter((r) => typeof r === 'string' && r.trim().length > 0);
}
