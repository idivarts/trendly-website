import { posts } from '@/lib/posts';

export default function Blog() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <span className="section-eyebrow">From the blog</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">Recent reads to grow your brand</h2>
            <p className="mt-3 text-slate-600">
              Tips, tricks, and updates designed to help you get the absolute best out of your Trendly experience.
            </p>
          </div>
          <a href="/blog" className="btn-ghost">
            View all blogs
          </a>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((p) => (
            <a
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
            >
              <div className={`relative aspect-[16/10] overflow-hidden bg-gradient-to-br ${p.gradient}`}>
                {p.imageUrl && (
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
                <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
                  {p.cat}
                </span>
                <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                  {p.date}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold leading-snug text-slate-900 transition group-hover:text-brand-700">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{p.excerpt}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700">
                  Read more
                  <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
