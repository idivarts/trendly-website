import { notFound } from 'next/navigation';
import PageShell from '@/components/PageShell';
import { posts, getPost } from '@/lib/posts';

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return { title: 'Post not found — Trendly' };
  return {
    title: `${post.title} — Trendly`,
    description: post.excerpt,
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  const others = posts.filter((p) => p.slug !== post.slug).slice(0, 2);

  return (
    <PageShell>
      <article className="container-px py-12">
        <div className="mx-auto max-w-3xl">
          <a
            href="/blog"
            className="inline-flex items-center gap-1 text-sm font-semibold text-brand-700 hover:underline"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M19 12H5M11 18l-6-6 6-6" />
            </svg>
            Back to all posts
          </a>

          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-brand-100 px-3 py-1 font-bold uppercase tracking-wider text-brand-700">
              {post.cat}
            </span>
            <span className="text-slate-500">{post.date}</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-500">{post.readTime}</span>
          </div>

          <h1 className="h-display mt-4 text-4xl leading-tight text-slate-900 sm:text-5xl">{post.title}</h1>
          <p className="mt-5 text-lg text-slate-600">{post.excerpt}</p>

          <div
            className={`mt-10 aspect-[2/1] overflow-hidden rounded-3xl bg-gradient-to-br ${post.gradient}`}
          >
            <div className="h-full w-full bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.55),transparent_55%)]" />
          </div>

          <div className="prose-content mt-12 space-y-6 text-base leading-relaxed text-slate-700">
            {post.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {/* Share / tags */}
          <div className="mt-14 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-8">
            <div className="flex items-center gap-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">Share</span>
              <a
                aria-label="Share on Twitter"
                href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2H21l-6.51 7.444L22 22h-6.828l-4.776-6.232L4.8 22H2.043l6.96-7.96L2 2h6.954l4.32 5.71L18.243 2zm-1.193 18h1.83L7.05 4H5.1l11.95 16z" />
                </svg>
              </a>
              <a
                aria-label="Share on LinkedIn"
                href={`https://www.linkedin.com/sharing/share-offsite/?url=https://www.trendly.now/blog/${post.slug}`}
                className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 text-slate-600 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.3 0-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
                </svg>
              </a>
            </div>
            <a href="/blog" className="text-sm font-semibold text-brand-700 hover:underline">
              All posts →
            </a>
          </div>
        </div>
      </article>

      {/* Related posts */}
      {others.length > 0 && (
        <section className="bg-slate-50/60 py-16">
          <div className="container-px">
            <div className="mx-auto max-w-5xl">
              <h2 className="h-display text-2xl text-slate-900 sm:text-3xl">Keep reading</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {others.map((p) => (
                  <a
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
                  >
                    <div className={`relative aspect-[16/9] bg-gradient-to-br ${p.gradient}`}>
                      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_55%)]" />
                    </div>
                    <div className="p-5">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-700">{p.cat}</span>
                      <h3 className="mt-2 text-base font-bold leading-snug text-slate-900 transition group-hover:text-brand-700">
                        {p.title}
                      </h3>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
