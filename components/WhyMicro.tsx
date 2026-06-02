import ScrollReveal from '@/components/ScrollReveal';
import ParallaxOrb from '@/components/ParallaxOrb';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

const points = [
  {
    title: 'Budget-friendly for startups',
    desc: 'Work with creators who deliver great results without stretching your marketing budget.',
    stat: '20×',
    sub: 'cheaper than macro influencers',
    accent: 'from-cyan-300 to-blue-400',
  },
  {
    title: 'Engagement & authenticity',
    desc: 'Micro creators build stronger connections with their audience, leading to genuine engagement.',
    stat: '4.8%',
    sub: 'avg. engagement rate',
    accent: 'from-fuchsia-300 to-pink-400',
  },
  {
    title: 'Best for local audience',
    desc: 'Reach niche and city-based communities with influencers who understand their audience.',
    stat: '8 of 10',
    sub: 'campaigns drive local sales',
    accent: 'from-emerald-300 to-teal-400',
  },
  {
    title: 'They listen',
    desc: 'Micro creators are more collaborative and open to feedback, ensuring smoother partnerships.',
    stat: '92%',
    sub: 'on-time delivery rate',
    accent: 'from-amber-300 to-orange-400',
  },
];

export default function WhyMicro() {
  return (
    <section className="relative overflow-hidden py-24 bg-gradient-to-br from-ink-900 via-brand-800 to-ink-900">
      {/* Grid overlay */}
      <div className="absolute inset-0 grid-bg opacity-[0.07]" />

      {/* Parallax background orbs for depth */}
      <ParallaxOrb
        className="absolute -top-40 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-brand-400/40 blur-3xl animate-glow-pulse"
        speed={0.06}
      />
      <ParallaxOrb
        className="absolute -bottom-32 left-[10%] -z-10 h-[360px] w-[360px] rounded-full bg-accent-500/30 blur-3xl animate-glow-pulse"
        speed={0.1}
      />
      <ParallaxOrb
        className="absolute -bottom-20 right-[8%] -z-10 h-[300px] w-[300px] rounded-full bg-fuchsia-500/20 blur-3xl"
        speed={0.08}
      />

      <div className="container-px">

        {/* Header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.25em] text-cyan-200 backdrop-blur">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_2px_rgba(34,211,238,0.6)]" />
            Why micro creators
          </span>
          <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl lg:text-5xl">
            Visibility is everything. <br />
            <span className="bg-gradient-to-r from-cyan-300 via-white to-brand-300 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.35)]">
              Micro creators get you there.
            </span>
          </h2>
          <p className="mt-5 text-slate-100">
            In today's content-driven world, if your brand isn't everywhere your audience is, you're invisible.
            Influencer marketing puts you in front of the right people — building trust, visibility, and long-term sales
            momentum.
          </p>
        </ScrollReveal>

        {/* Stat cards — staggered scale-in */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <ScrollReveal key={p.title} direction="scale" delay={i * 110} distance={20}>
              <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/[0.07] p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-white/30 hover:bg-white/[0.12] hover:shadow-[0_20px_60px_-10px_rgba(0,0,0,0.4)] h-full">
                {/* Top edge highlight */}
                <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
                {/* Inner glow on hover */}
                <div
                  className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-gradient-to-br ${p.accent} opacity-20 blur-2xl transition-all duration-500 group-hover:opacity-50 group-hover:scale-125`}
                />

                {/* Stat — large and gradient */}
                <div
                  className={`bg-gradient-to-br ${p.accent} bg-clip-text text-3xl font-extrabold text-transparent transition-transform duration-300 group-hover:scale-105 inline-block`}
                >
                  {p.stat}
                </div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wider text-cyan-300">{p.sub}</div>
                <h3 className="mt-5 text-lg font-bold text-white">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-100">{p.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={440}>
          <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary">
            {DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Explore influencers today'}
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
