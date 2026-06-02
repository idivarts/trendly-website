import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';
import { SOCIALS, SocialIcon } from '@/components/SocialIcons';

const assists = [
  { t: 'Best time to post', d: 'AI picks the slot your audience is most active — per platform.' },
  { t: 'Captions & hashtags', d: 'On-brand captions and the hashtags that actually fit, suggested instantly.' },
  { t: 'Auto-formatting', d: 'One post, reshaped for each platform’s format and limits automatically.' },
];

export default function ScheduleEverywhere() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left — scheduler visual */}
          <ScrollReveal className="lg:col-span-6 lg:order-1 order-2" direction="left" distance={32}>
            <div className="relative mx-auto max-w-md">
              {/* floating "1 post" badge → fans out to all platforms */}
              <div className="absolute -left-4 top-24 z-10 hidden animate-float rounded-2xl bg-gradient-brand px-3 py-2 text-white shadow-glow sm:block">
                <div className="text-[10px] uppercase tracking-wider opacity-80">Write once</div>
                <div className="text-lg font-extrabold leading-tight">1 post</div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                {/* post preview */}
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
                  <div className="text-xs font-semibold text-slate-800">Vitamin C serum — launch day 🍊</div>
                  <div className="mt-2 h-16 w-full rounded-xl bg-gradient-to-br from-amber-200 to-pink-200" />
                </div>

                {/* publish to all — real platform icons */}
                <div className="mt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Publishing to all 6 platforms</span>
                    <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-bold text-emerald-700 border border-emerald-100">Connected</span>
                  </div>
                  <div className="mt-2.5 flex flex-wrap items-center gap-2">
                    {SOCIALS.map((s) => (
                      <span key={s.key} className="relative">
                        <SocialIcon platform={s.key} size={40} />
                        <span className="absolute -bottom-1 -right-1 grid h-4 w-4 place-items-center rounded-full border-2 border-white bg-emerald-500 text-white">
                          <svg className="h-2 w-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                        </span>
                      </span>
                    ))}
                  </div>
                </div>

                {/* AI suggestion */}
                <div className="mt-4 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-400/10 p-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">AI suggests</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-xs">
                    <span className="text-slate-600">Best time: <strong className="text-slate-900">Thu 6:30 PM</strong></span>
                    <span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-brand-700 border border-brand-100">+18% reach</span>
                  </div>
                </div>

                <button className="mt-4 w-full rounded-2xl bg-gradient-brand px-4 py-3 text-sm font-bold text-white shadow-glow">
                  Schedule to all platforms
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <ScrollReveal className="lg:col-span-6 lg:order-2 order-1" direction="right" distance={32} delay={80}>
            <span className="section-eyebrow">Schedule everywhere</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Post to every platform,{' '}
              <span className="text-gradient-animated">from one place</span>
            </h2>
            <p className="mt-5 text-slate-600">
              Schedule directly from Trendly — multi-publish to Instagram, TikTok, LinkedIn, X, YouTube and more in one go. And AI has your back at every step: when to post, what to caption, which hashtags to use.
            </p>

            <div className="mt-7 space-y-4">
              {assists.map((a) => (
                <div key={a.t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{a.t}</div>
                    <p className="mt-0.5 text-sm text-slate-600">{a.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary mt-8">{DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Start scheduling free'}</a>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
