import ParallaxOrb from '@/components/ParallaxOrb';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';
import { SOCIALS, SocialIcon, type SocialKey } from '@/components/SocialIcons';

const models = ['GPT', 'Claude', 'Gemini'];
const pillars = ['Education', 'Behind-the-scenes', 'Social proof', 'Launch teasers'];

const calDays: { d: string; platform: SocialKey; type: string; status: string; dot: string }[] = [
  { d: 'Mon', platform: 'instagram', type: 'Reel', status: 'Live', dot: 'bg-emerald-500' },
  { d: 'Tue', platform: 'tiktok', type: 'Video', status: 'Draft', dot: 'bg-slate-300' },
  { d: 'Wed', platform: 'linkedin', type: 'Article', status: 'Review', dot: 'bg-amber-400' },
  { d: 'Thu', platform: 'x', type: 'Thread', status: 'Sched', dot: 'bg-brand-500' },
  { d: 'Fri', platform: 'youtube', type: 'Short', status: 'Sched', dot: 'bg-brand-500' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      {/* Background mesh + grid */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <ParallaxOrb className="absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full bg-brand-300/30 blur-3xl animate-glow-pulse" speed={0.08} />
      <ParallaxOrb className="absolute top-[30%] left-[-5%] h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl animate-glow-pulse" speed={0.14} />

      <div className="container-px relative">

        {/* ── Centered copy ── */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="pill animate-fade-up" style={{ animationDelay: '0ms' }}>
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
            Every AI model · one social media workspace
          </span>

          <h1
            className="h-display mx-auto mt-5 max-w-4xl text-[1.9rem] leading-[1.12] sm:text-5xl sm:leading-[1.05] lg:text-7xl animate-fade-up"
            style={{ animationDelay: '90ms' }}
          >
            Chat with your favorite{' '}
            <span className="relative inline-block">
              <span className="text-gradient-animated">AI models</span>
              <svg
                viewBox="0 0 200 12" preserveAspectRatio="none"
                className="absolute -bottom-2 left-0 h-3 w-full text-brand-400"
                fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"
                strokeDasharray="220" strokeDashoffset="220"
                style={{ animation: 'draw-line 1.1s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}
              >
                <path d="M2 9 C 60 1, 140 1, 198 9" />
              </svg>
            </span>
            {' '}— and turn it into a calendar in one click
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 animate-fade-up" style={{ animationDelay: '180ms' }}>
            Trendly is the AI social media tool that brings GPT, Claude, and Gemini into one workspace — build your strategy and content from a single prompt, turn it into a scheduled calendar in one click, publish to every platform, and let AI help at every step.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-3 animate-fade-up" style={{ animationDelay: '270ms' }}>
            {!DISABLE_LOGIN_SIGNUP && (
              <a href={LINKS.BRAND_SIGNUP} className="btn-primary group">
                Start for free
                <svg className="ml-2 h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            )}
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">
              <svg className="mr-2 h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
              Book a Demo
            </a>
          </div>

          <p className="mt-3 text-xs font-medium text-slate-500 animate-fade-up" style={{ animationDelay: '320ms' }}>
            {PROOF.riskReversal}
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '360ms' }}>
            <div className="flex -space-x-3">
              {['from-pink-400 to-rose-500','from-amber-400 to-orange-500','from-emerald-400 to-teal-500','from-sky-400 to-indigo-500','from-violet-400 to-purple-500'].map((g, i) => (
                <div key={i} className={`h-8 w-8 rounded-full border-2 border-white bg-gradient-to-br ${g} shadow`} />
              ))}
            </div>
            <div className="text-left">
              <div className="text-sm font-semibold text-slate-900">{PROOF.creators} creators on Trendly</div>
              <div className="text-xs text-slate-500">{PROOF.earlyAccessLabel}</div>
            </div>
          </div>
        </div>

        {/* ── Full-width product window: chat → calendar ── */}
        <div className="relative mx-auto mt-16 max-w-5xl animate-fade-up" style={{ animationDelay: '240ms' }}>
          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-2xl bg-gradient-brand opacity-25 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-2xl bg-accent-400 opacity-20 blur-2xl" />

          <div className="relative rounded-[28px] border border-slate-200/80 bg-white p-2.5 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.35)]">
            {/* browser chrome */}
            <div className="flex items-center justify-between px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-400" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <div className="rounded-md bg-slate-50 px-3 py-1 text-xs text-slate-400">trendly.now/studio</div>
              <div className="text-[10px] font-semibold text-slate-400">AI · Marketing-tuned</div>
            </div>

            <div className="grid gap-2.5 p-1.5 lg:grid-cols-12">
              {/* ── Chat pane ── */}
              <div className="lg:col-span-6 flex flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-4">
                <div className="flex items-center gap-1.5">
                  {models.map((m, i) => (
                    <span key={m} className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${i === 0 ? 'bg-gradient-brand text-white shadow-glow' : 'bg-white text-slate-500 border border-slate-200'}`}>{m}</span>
                  ))}
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[85%] rounded-2xl rounded-tr-sm bg-white px-3.5 py-2 text-sm text-slate-700 shadow-sm">
                      Build me a 2-week content plan for my skincare launch 🚀
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
                    </div>
                    <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white px-3.5 py-2.5 text-sm text-slate-700 shadow-sm">
                      Here&apos;s a plan across 4 content pillars:
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {pillars.map((p) => (
                          <span key={p} className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700 border border-brand-100">{p}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <button className="mt-auto pt-4">
                  <span className="flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-bold text-white shadow-glow">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
                    Turn into calendar — 1 click
                  </span>
                </button>
              </div>

              {/* ── Calendar pane ── */}
              <div className="lg:col-span-6 flex flex-col rounded-2xl border border-slate-100 bg-white p-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Your calendar</span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">14 posts · all platforms</span>
                </div>

                <div className="mt-3 grid grid-cols-5 gap-1.5">
                  {calDays.map((c) => (
                    <div key={c.d}>
                      <div className="mb-1 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">{c.d}</div>
                      <div className="rounded-xl border border-slate-100 bg-slate-50 p-1.5">
                        <SocialIcon platform={c.platform} size={22} />
                        <div className="mt-1.5 text-[9px] font-semibold text-slate-700">{c.type}</div>
                        <div className="mt-1 flex items-center gap-1">
                          <span className={`h-1.5 w-1.5 rounded-full ${c.dot}`} />
                          <span className="text-[8px] text-slate-400">{c.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-3 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-400/10 p-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">AI suggests</span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Best time: <strong className="text-slate-900">Thu 6:30 PM</strong></span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-brand-700 border border-brand-100">+18% reach</span>
                  </div>
                </div>

                <div className="mt-auto flex items-center justify-between pt-3">
                  <div className="flex items-center gap-1.5">
                    {SOCIALS.map((s) => <SocialIcon key={s.key} platform={s.key} size={20} />)}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-400">Publishing to all</span>
                </div>
              </div>
            </div>
          </div>

          {/* floating badge */}
          <div className="absolute -right-4 -bottom-6 hidden animate-float rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:block">
            <div className="text-[10px] uppercase tracking-wider text-slate-500">Calendar created</div>
            <div className="mt-1 text-2xl font-extrabold text-slate-900">14 posts</div>
            <div className="text-xs font-medium text-emerald-600">scheduled across 6 platforms</div>
          </div>
        </div>

      </div>
    </section>
  );
}
