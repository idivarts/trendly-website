import PageShell, { PageHero } from '@/components/PageShell';
import { posts } from '@/lib/posts';
import NewsletterForm from '@/components/NewsletterForm';

export const metadata = {
  title: 'Blog — Trendly',
  description:
    'Tips, tricks, and updates for influencer marketing — written for Indian D2C startups and creators.',
};

export default function BlogIndex() {
  const [featured, ...rest] = posts;

  return (
    <PageShell>
      <PageHero
        eyebrow="From the blog"
        title="Ideas for the next campaign"
        highlight="campaign"
        subtitle="Tactical playbooks, creator tips, and behind-the-scenes notes from the Trendly team."
      />

      {/* Featured post */}
      <section className="pb-12">
        <div className="container-px">
          <a
            href={`/blog/${featured.slug}`}
            className="group grid gap-8 overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow lg:grid-cols-2 lg:p-8"
          >
            <div className={`relative aspect-[16/10] overflow-hidden rounded-2xl bg-gradient-to-br ${featured.gradient}`}>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_55%)]" />
              <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-slate-900 backdrop-blur">
                {featured.cat}
              </span>
              <span className="absolute right-4 top-4 rounded-full bg-black/30 px-3 py-1 text-xs font-bold text-white backdrop-blur">
                {featured.date}
              </span>
            </div>
            <div className="flex flex-col justify-center">
              <span className="pill w-max">Featured · {featured.readTime}</span>
              <h2 className="h-display mt-4 text-3xl leading-tight text-slate-900 transition group-hover:text-brand-700 sm:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 text-base text-slate-600">{featured.excerpt}</p>
              <div className="mt-6 inline-flex items-center text-sm font-semibold text-brand-700">
                Read article
                <svg
                  className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            </div>
          </a>
        </div>
      </section>

      {/* Rest of posts */}
      <section className="pb-24">
        <div className="container-px">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <a
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
              >
                <div className={`relative aspect-[16/10] bg-gradient-to-br ${p.gradient}`}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.5),transparent_55%)]" />
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
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-500">{p.readTime}</span>
                    <span className="inline-flex items-center text-sm font-semibold text-brand-700">
                      Read
                      <svg
                        className="ml-1 h-4 w-4 transition group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      >
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Newsletter prompt */}
          <div className="mt-16 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 text-center sm:p-12">
            <h3 className="h-display text-2xl text-slate-900 sm:text-3xl">
              Get the next post in your inbox
            </h3>
            <p className="mx-auto mt-3 max-w-lg text-sm text-slate-600">
              One email a fortnight. Tactics, frameworks, and creator stories from the Trendly team. No fluff.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
