import ParallaxOrb from '@/components/ParallaxOrb';
import { LINKS } from '@/lib/site-config';

const posts = [
  { channel: 'IG',  color: 'text-pink-600',   bg: 'bg-pink-50 border-pink-100',   label: 'Reel',    status: 'Live',      statusColor: 'bg-emerald-500' },
  { channel: 'LI',  color: 'text-sky-600',     bg: 'bg-sky-50 border-sky-100',     label: 'Article', status: 'Review',    statusColor: 'bg-amber-400'   },
  { channel: 'TT',  color: 'text-violet-600',  bg: 'bg-violet-50 border-violet-100', label: 'Video', status: 'Draft',     statusColor: 'bg-slate-300'   },
  { channel: 'X',   color: 'text-slate-700',   bg: 'bg-slate-50 border-slate-100', label: 'Thread',  status: 'Scheduled', statusColor: 'bg-brand-500'   },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background mesh + grid */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />

      {/* Parallax orbs */}
      <ParallaxOrb
        className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-300/30 blur-3xl animate-glow-pulse"
        speed={0.08}
      />
      <ParallaxOrb
        className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl animate-glow-pulse"
        speed={0.14}
      />
      <ParallaxOrb
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] rounded-full bg-indigo-400/10 blur-3xl"
        speed={0.05}
      />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* ── Left column ── */}
          <div className="lg:col-span-7">

            <span className="pill animate-fade-up" style={{ animationDelay: '0ms' }}>
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
              For Social Media Teams
            </span>

            <h1
              className="h-display mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up"
              style={{ animationDelay: '90ms' }}
            >
              Your entire{' '}
              <span className="relative inline-block">
                <span className="text-gradient-animated">marketing workflow</span>
                <svg
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-400"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeDasharray="220"
                  strokeDashoffset="220"
                  style={{ animation: 'draw-line 1.1s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}
                >
                  <path d="M2 9 C 60 1, 140 1, 198 9" />
                </svg>
              </span>
              {' '}— in one place
            </h1>

            <p
              className="mt-6 max-w-xl text-lg text-slate-600 animate-fade-up"
              style={{ animationDelay: '180ms' }}
            >
              AI content strategy. Visual content calendar. Team approvals. Creator campaigns. Trendly replaces four tools with one workspace built for modern marketing teams.
            </p>

            <div
              className="mt-8 flex flex-wrap items-center gap-3 animate-fade-up"
              style={{ animationDelay: '270ms' }}
            >
              <a href={LINKS.BRAND_SIGNUP} className="btn-primary group">
                Start for free
                <svg
                  className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">
                <svg className="mr-2 h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Book a Demo
              </a>
            </div>

            {/* Social proof */}
            <div
              className="mt-10 flex items-center gap-6 animate-fade-up"
              style={{ animationDelay: '360ms' }}
            >
              <div className="flex -space-x-3">
                {[
                  'from-pink-400 to-rose-500',
                  'from-amber-400 to-orange-500',
                  'from-emerald-400 to-teal-500',
                  'from-sky-400 to-indigo-500',
                  'from-violet-400 to-purple-500',
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br ${g} shadow transition-transform duration-200 hover:-translate-y-1`}
                    style={{ transitionDelay: `${i * 40}ms` }}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">2,000+ marketing teams</div>
                <div className="text-xs text-slate-500">building better social content with Trendly</div>
              </div>
            </div>
          </div>

          {/* ── Right column — content calendar card ── */}
          <div className="lg:col-span-5">
            <div
              className="relative mx-auto max-w-md animate-fade-up"
              style={{ animationDelay: '200ms' }}
            >
              <div className="absolute -top-6 -left-8 h-20 w-20 rounded-2xl bg-gradient-brand opacity-30 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-2xl bg-accent-400 opacity-25 blur-2xl" />

              {/* App card */}
              <div className="relative rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)] transition-shadow duration-500 hover:shadow-[0_40px_100px_-20px_rgba(37,99,235,0.2)]">

                {/* Browser chrome */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">trendly.now/calendar</div>
                  <div className="w-14" />
                </div>

                {/* Calendar header */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Today's Lineup</span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">
                    8 posts this week
                  </span>
                </div>

                {/* Post list */}
                <div className="mt-4 space-y-2.5">
                  {posts.map((p, i) => (
                    <div
                      key={p.label}
                      className={`flex items-center gap-3 rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${p.bg}`}
                      style={{
                        animation: 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
                        animationDelay: `${400 + i * 80}ms`,
                      }}
                    >
                      <span className={`w-7 text-center text-[10px] font-extrabold uppercase tracking-wider ${p.color}`}>
                        {p.channel}
                      </span>
                      <div className="flex-1">
                        <div className="text-xs font-semibold text-slate-800">{p.label}</div>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${p.statusColor}`} />
                        <span className="text-[10px] font-semibold text-slate-500">{p.status}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI Strategy strip */}
                <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-400/10 p-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
                    </svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">AI Strategy Active</span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {['Education', 'Authenticity', 'Product'].map((p) => (
                      <span key={p} className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-slate-700 shadow-sm border border-slate-100">
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating cards */}
              <div className="absolute -left-10 bottom-6 hidden animate-float rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:block">
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Scheduled</div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">8</div>
                <div className="text-xs font-medium text-emerald-600">↑3 vs last week</div>
              </div>
              <div
                className="absolute -right-6 -top-6 hidden animate-float rounded-2xl bg-gradient-brand p-3 text-white shadow-glow sm:block"
                style={{ animationDelay: '1.5s' }}
              >
                <div className="text-[10px] uppercase tracking-wider opacity-80">AI Ready</div>
                <div className="mt-1 text-lg font-extrabold">✓</div>
                <div className="text-xs opacity-90">Strategy active</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
