import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';

// ─── Types ────────────────────────────────────────────────────────────────────

export type Post = {
  slug: string;
  /** Human-readable date shown in the UI, e.g. "10 May 2026" */
  date: string;
  /** ISO date string used for sorting, e.g. "2026-05-10" */
  dateISO: string;
  cat: string;
  title: string;
  excerpt: string;
  /** Tailwind gradient classes for the post card thumbnail */
  gradient: string;
  /** Full post body rendered as an HTML string from markdown */
  body: string;
  readTime: string;
  /** Used in <meta name="description"> — falls back to excerpt */
  metaDescription: string;
};

// ─── Marked config ────────────────────────────────────────────────────────────

// Custom renderer: external links open in a new tab; internal links stay in-tab
const renderer = new marked.Renderer();

renderer.link = function ({ href, title, text }) {
  const isExternal = href && (href.startsWith('http://') || href.startsWith('https://'));
  const titleAttr = title ? ` title="${title}"` : '';
  if (isExternal) {
    return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer">${text}</a>`;
  }
  return `<a href="${href}"${titleAttr}>${text}</a>`;
};

marked.setOptions({ renderer, gfm: true, breaks: false });

// ─── File loading ─────────────────────────────────────────────────────────────

const POSTS_DIR = path.join(process.cwd(), 'blog-posts');

function loadAllPosts(): Post[] {
  if (!fs.existsSync(POSTS_DIR)) return [];

  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((f) => f.endsWith('.md'))
    .sort(); // numeric prefix keeps authoring order deterministic

  return files
    .map((filename): Post | null => {
      try {
        const raw = fs.readFileSync(path.join(POSTS_DIR, filename), 'utf-8');
        const { data, content } = matter(raw);

        // Strip the H1 from the body — the page template renders post.title as <h1>
        const bodyWithoutH1 = content.replace(/^#\s+.+\n?/m, '').trim();
        const body = marked.parse(bodyWithoutH1) as string;

        return {
          slug: data.slug as string,
          date: data.date as string,
          dateISO: (data.dateISO as string) ?? '',
          cat: data.cat as string,
          title: data.title as string,
          excerpt: data.excerpt as string,
          gradient: data.gradient as string,
          body,
          readTime: data.readTime as string,
          metaDescription: (data.metaDescription as string) ?? (data.excerpt as string),
        };
      } catch (err) {
        console.error(`Failed to load blog post: ${filename}`, err);
        return null;
      }
    })
    .filter((p): p is Post => p !== null)
    .sort((a, b) => b.dateISO.localeCompare(a.dateISO)); // newest first
}

// ─── Exports ──────────────────────────────────────────────────────────────────

export const posts: Post[] = loadAllPosts();

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
