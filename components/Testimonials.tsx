import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

// NOTE: Trendly is a newly launched product, so we do NOT fabricate customer
// testimonials. This section earns trust honestly: the team's verified
// track record + a founding-member offer. Swap in real quotes as design
// partners come in (see ticket "Critique the trendly-website").

const stats = [
  { v: PROOF.creators, l: 'Creators on the platform' },
  { v: PROOF.brands, l: 'Brand campaigns by our team' },
  { v: '8', l: 'Channels to plan & publish' },
  { v: '$0', l: 'To start — free forever' },
];

const founding = [
  'Lifetime founding-member pricing, locked in',
  'A direct line to the team building Trendly',
  'Your feature requests shape the roadmap',
];

export default function Testimonials() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="container-px">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Why trust us now</span>
          <h2 className="h-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
            New platform. <span className="bg-gradient-brand bg-clip-text text-transparent">Proven team.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Trendly is brand new — and we&apos;re not going to invent reviews to look bigger. Instead, here&apos;s the truth: {PROOF.brandsLabel.toLowerCase()} and {PROOF.creators} creators have already joined us. The product does the rest of the talking.
          </p>
        </ScrollReveal>

        {/* Honest stats strip */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <ScrollReveal key={s.l} direction="scale" delay={i * 90} distance={18}>
              <div className="rounded-3xl border border-slate-200 bg-white p-6 text-center h-full">
                <div className="bg-gradient-brand bg-clip-text text-3xl font-extrabold text-transparent">{s.v}</div>
                <div className="mt-1 text-sm text-slate-600">{s.l}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Founding-member offer */}
        <ScrollReveal className="mx-auto mt-12 max-w-4xl" direction="scale" distance={20}>
          <div className="overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="pill">{PROOF.earlyAccessLabel}</span>
                <h3 className="h-display mt-4 text-2xl sm:text-3xl">Get in early — and get rewarded for it</h3>
                <p className="mt-3 text-slate-600">
                  We&apos;re onboarding our first {PROOF.earlyAccessCount} founders by hand. Join now and you&apos;ll help shape the product you use every day.
                </p>
                <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary mt-6">{DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Become a founding member'}</a>
              </div>
              <ul className="space-y-3">
                {founding.map((f) => (
                  <li key={f} className="flex items-start gap-3 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                    <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    <span className="text-sm font-medium text-slate-700">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
