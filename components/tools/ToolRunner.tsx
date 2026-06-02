'use client';

import { useState } from 'react';
import { generate, ToolError } from '@/lib/tools-api';
import { LINKS } from '@/lib/site-config';

export type ToolField = {
  /** Key sent to the backend in `inputs`. */
  name: string;
  label: string;
  placeholder?: string;
  type: 'text' | 'textarea' | 'select';
  /** Options for `type: 'select'`. */
  options?: string[];
  /** Whether the field is required before generating (default true). */
  required?: boolean;
};

type Props = {
  /** Backend tool id, e.g. "instagram-caption". */
  tool: string;
  fields: ToolField[];
  /** Label for the generate button. */
  cta: string;
};

/** Inline spinner used inside the generate button. */
function Spinner() {
  return (
    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
      <path className="opacity-90" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
    </svg>
  );
}

/**
 * Reusable interactive widget for the AI tool pages.
 * Renders a form, a Generate button, loading + error states, and a copyable
 * results list. Falls back to a friendly message if the endpoint is unreachable.
 */
export default function ToolRunner({ tool, fields, cta }: Props) {
  const initial = Object.fromEntries(
    fields.map((f) => [f.name, f.type === 'select' ? f.options?.[0] ?? '' : ''])
  );

  const [values, setValues] = useState<Record<string, string>>(initial);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [unreachable, setUnreachable] = useState(false);
  const [results, setResults] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const update = (name: string, value: string) =>
    setValues((v) => ({ ...v, [name]: value }));

  const missingRequired = fields.some(
    (f) => (f.required ?? true) && !values[f.name]?.trim()
  );

  async function onGenerate() {
    setLoading(true);
    setError(null);
    setUnreachable(false);
    setResults([]);
    setCopiedIdx(null);
    try {
      const out = await generate(tool, values);
      setResults(out);
    } catch (e) {
      if (e instanceof ToolError && e.unreachable) {
        setUnreachable(true);
      } else {
        setError(e instanceof Error ? e.message : 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  }

  async function copy(text: string, idx: number) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      setTimeout(() => setCopiedIdx((c) => (c === idx ? null : c)), 1800);
    } catch {
      /* clipboard unavailable — ignore */
    }
  }

  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
      {/* ── Form ── */}
      <div className="grid gap-5">
        {fields.map((f) => (
          <div key={f.name}>
            <label
              htmlFor={`tool-${tool}-${f.name}`}
              className="mb-2 block text-sm font-semibold text-slate-800"
            >
              {f.label}
            </label>

            {f.type === 'textarea' ? (
              <textarea
                id={`tool-${tool}-${f.name}`}
                value={values[f.name]}
                onChange={(e) => update(f.name, e.target.value)}
                placeholder={f.placeholder}
                rows={4}
                className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
              />
            ) : f.type === 'select' ? (
              <select
                id={`tool-${tool}-${f.name}`}
                value={values[f.name]}
                onChange={(e) => update(f.name, e.target.value)}
                className="w-full appearance-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
              >
                {f.options?.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
            ) : (
              <input
                id={`tool-${tool}-${f.name}`}
                type="text"
                value={values[f.name]}
                onChange={(e) => update(f.name, e.target.value)}
                placeholder={f.placeholder}
                className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-800 outline-none transition focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
              />
            )}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={onGenerate}
        disabled={loading || missingRequired}
        className="btn-primary mt-6 w-full gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <Spinner />
            Generating…
          </>
        ) : (
          cta
        )}
      </button>

      <p className="mt-3 text-center text-xs text-slate-400">
        Free to use · no signup · powered by Trendly AI
      </p>

      {/* ── Endpoint unreachable fallback ── */}
      {unreachable && (
        <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5 text-center">
          <p className="text-sm font-semibold text-amber-900">
            This tool is warming up — try again in a moment.
          </p>
          <p className="mx-auto mt-1 max-w-md text-sm text-amber-800/80">
            Our generator is busy right now. You can do this (and a lot more) instantly
            inside Trendly.
          </p>
          <a
            href={LINKS.BRAND_SIGNUP}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-amber-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-amber-800"
          >
            Start free in Trendly
          </a>
        </div>
      )}

      {/* ── Generic error ── */}
      {error && (
        <div className="mt-6 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-center text-sm font-medium text-rose-700">
          {error}
        </div>
      )}

      {/* ── Results ── */}
      {results.length > 0 && (
        <div className="mt-8">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Your results
            </h3>
            <button
              type="button"
              onClick={onGenerate}
              disabled={loading}
              className="text-xs font-semibold text-brand-600 hover:text-brand-700"
            >
              Regenerate
            </button>
          </div>

          <ul className="grid gap-3">
            {results.map((r, i) => (
              <li
                key={i}
                className="group relative rounded-2xl border border-slate-200 bg-slate-50/60 p-4 pr-12 text-sm leading-relaxed text-slate-800"
              >
                <span className="whitespace-pre-wrap">{r}</span>
                <button
                  type="button"
                  onClick={() => copy(r, i)}
                  aria-label="Copy to clipboard"
                  className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-lg border border-slate-200 bg-white px-2 py-1 text-xs font-semibold text-slate-500 transition hover:border-brand-300 hover:text-brand-700"
                >
                  {copiedIdx === i ? (
                    'Copied'
                  ) : (
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="9" y="9" width="13" height="13" rx="2" />
                      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                    </svg>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
