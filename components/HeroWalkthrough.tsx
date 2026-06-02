'use client';
import { useEffect, useState } from 'react';
import ParallaxOrb from '@/components/ParallaxOrb';
import { LINKS, PROOF } from '@/lib/site-config';
import { SocialIcon, type SocialKey } from '@/components/SocialIcons';

const P1 = 'Plan a 30-day content calendar for my skincare launch';
const P2 = 'Launching Nov 1 — focus on awareness first, then sales';
const AI_Q = "Got it! What's your launch date, and is the main goal awareness or sales?";
const models = ['GPT', 'Claude', 'Gemini'];

const DOC = {
  title: '30-Day Skincare Launch Strategy',
  rows: [
    { h: 'Goal', body: 'Awareness → conversions, anchored to the Nov 1 launch.' },
    { h: 'Pillars', chips: ['Education', 'Behind-the-scenes', 'Social proof', 'Launch teasers'] },
    { h: 'Cadence', body: 'IG 5×/wk · TikTok 3× · LinkedIn 2× · X 2×' },
    { h: 'Hero moments', body: 'Teaser week → Launch day → UGC & reviews push.' },
  ],
};

// 4-week month: some dates have content (a platform), some are empty (null).
const MONTH: (SocialKey | null)[] = [
  null, 'instagram', null, 'tiktok', null, 'linkedin', null,
  'instagram', null, null, 'x', null, 'youtube', null,
  null, 'instagram', 'tiktok', null, null, 'facebook', null,
  'instagram', null, 'linkedin', null, 'tiktok', null, 'youtube',
];
const WEEKDAYS = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

const FEATURED = 1; // calendar cell index the demo cursor opens
const FEATURED_TITLE = '5 skincare myths, busted';
const AI_OPTS = ['✨ Generate caption', '🖼️ Generate image', '#  Hashtags', '↻  Rewrite hook'];
const ACCOUNTS: { platform: SocialKey; handle: string; on: boolean }[] = [
  { platform: 'instagram', handle: '@glow.skincare', on: true },
  { platform: 'tiktok', handle: '@glowskincare', on: true },
  { platform: 'x', handle: '@glowskincare', on: true },
  { platform: 'linkedin', handle: 'Glow Skincare', on: false },
  { platform: 'youtube', handle: 'Glow Skincare', on: false },
  { platform: 'facebook', handle: 'Glow Skincare', on: true },
];

type Phase = 'type1' | 'sent1' | 'ask' | 'type2' | 'sent2' | 'analyzing' | 'strategy' | 'docDone' | 'convert' | 'calendar' | 'hover' | 'open' | 'detail';
const ORDER: Phase[] = ['type1', 'sent1', 'ask', 'type2', 'sent2', 'analyzing', 'strategy', 'docDone', 'convert', 'calendar', 'hover', 'open', 'detail'];

export default function HeroWalkthrough() {
  const [phase, setPhase] = useState<Phase>('type1');
  const [typed1, setTyped1] = useState(0);
  const [typed2, setTyped2] = useState(0);

  useEffect(() => {
    let cancelled = false;
    const timers: number[] = [];
    const wait = (ms: number) => new Promise<void>((res) => { timers.push(window.setTimeout(res, ms)); });

    (async () => {
      while (!cancelled) {
        setPhase('type1'); setTyped1(0); setTyped2(0);
        await wait(700); if (cancelled) return;
        for (let i = 1; i <= P1.length; i++) { if (cancelled) return; setTyped1(i); await wait(36); }
        await wait(450); if (cancelled) return;
        setPhase('sent1'); await wait(650); if (cancelled) return;
        setPhase('ask'); await wait(1700); if (cancelled) return;
        setPhase('type2'); for (let i = 1; i <= P2.length; i++) { if (cancelled) return; setTyped2(i); await wait(36); }
        await wait(400); if (cancelled) return;
        setPhase('sent2'); await wait(550); if (cancelled) return;
        setPhase('analyzing'); await wait(1400); if (cancelled) return;
        setPhase('strategy'); await wait(2900); if (cancelled) return;
        setPhase('docDone'); await wait(1600); if (cancelled) return;
        setPhase('convert'); await wait(1000); if (cancelled) return;
        setPhase('calendar'); await wait(2400); if (cancelled) return;
        setPhase('hover'); await wait(2200); if (cancelled) return;
        setPhase('open'); await wait(900); if (cancelled) return;
        setPhase('detail'); await wait(5200); if (cancelled) return;
      }
    })();

    return () => { cancelled = true; timers.forEach((t) => clearTimeout(t)); };
  }, []);

  const at = ORDER.indexOf(phase);
  const gte = (p: Phase) => at >= ORDER.indexOf(p);
  const typing = phase === 'type1' || phase === 'type2';
  const showShimmer = at < ORDER.indexOf('strategy');
  const showDoc = phase === 'strategy' || phase === 'docDone' || phase === 'convert';
  const showCal = phase === 'calendar' || phase === 'hover' || phase === 'open';
  const showDetail = phase === 'detail';
  const featuredActive = phase === 'hover' || phase === 'open';

  // Demo cursor: strategy doc → convert button → calendar cell → schedule button.
  const cursor =
    phase === 'strategy' ? { x: 60, y: 36, show: true }
    : phase === 'docDone' || phase === 'convert' ? { x: 62, y: 86, show: true }
    : phase === 'hover' || phase === 'open' ? { x: 56, y: 44, show: true }
    : phase === 'detail' ? { x: 87, y: 84, show: true }
    : { x: 62, y: 60, show: false };
  const clicking = phase === 'convert' || phase === 'open';

  const Dot = () => (
    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
  );

  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24">
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <ParallaxOrb className="absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full bg-brand-300/30 blur-3xl animate-glow-pulse" speed={0.08} />
      <ParallaxOrb className="absolute top-[35%] left-[-5%] h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl animate-glow-pulse" speed={0.14} />

      <div className="container-px relative">
        {/* ── Headline ── */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="pill animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
            Every AI model · one social media workspace
          </span>
          <h1 className="h-display mx-auto mt-5 max-w-4xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: '90ms' }}>
            Chat with your favorite{' '}
            <span className="text-gradient-animated">AI models</span>{' '}— and turn it into a calendar in one click
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 animate-fade-up" style={{ animationDelay: '180ms' }}>
            Watch it work: describe a goal, answer one question, and Trendly writes the strategy and a ready-to-publish calendar across every platform.
          </p>
        </div>

        {/* ── Auto-playing product walkthrough (non-interactive) ── */}
        <div className="relative mx-auto mt-14 max-w-5xl select-none animate-fade-up" style={{ animationDelay: '240ms' }}>
          <div className="absolute -top-8 -left-8 h-24 w-24 rounded-2xl bg-gradient-brand opacity-25 blur-2xl" />
          <div className="absolute -bottom-10 -right-10 h-28 w-28 rounded-2xl bg-accent-400 opacity-20 blur-2xl" />

          <div className="pointer-events-none relative rounded-[28px] border border-slate-200/80 bg-white p-2.5 shadow-[0_40px_100px_-30px_rgba(15,23,42,0.35)]">
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

            {/* ── Animated demo cursor: hovers strategy → glides to button → clicks ── */}
            <div
              className="absolute z-30 hidden transition-all duration-700 ease-out sm:block"
              style={{ left: `${cursor.x}%`, top: `${cursor.y}%`, opacity: cursor.show ? 1 : 0 }}
            >
              {clicking && <span className="absolute left-[3px] top-[2px] h-9 w-9 -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-500/30 animate-ping" />}
              <svg
                className={`h-6 w-6 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] transition-transform duration-150 ${clicking ? 'scale-90' : ''}`}
                viewBox="0 0 24 24"
                fill="#0f172a"
                stroke="white"
                strokeWidth="1.5"
                strokeLinejoin="round"
              >
                <path d="M5 3v16l4-3.8 2.4 5.2 2.7-1.2-2.3-5h5.2z" />
              </svg>
            </div>

            {!showDetail && (
            <div className="grid gap-2.5 p-1.5 lg:grid-cols-12">
              {/* ════ Chat pane ════ */}
              <div className="flex min-h-[440px] flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-4 lg:col-span-5">
                <div className="flex items-center gap-1.5">
                  {models.map((m, i) => (
                    <span key={m} className={`rounded-full px-2.5 py-1 text-[11px] font-bold ${i === 0 ? 'bg-gradient-brand text-white shadow-glow' : 'bg-white text-slate-500 border border-slate-200'}`}>{m}</span>
                  ))}
                </div>

                <div className="mt-4 flex flex-1 flex-col gap-3">
                  {/* user 1 */}
                  {gte('sent1') && (
                    <div className="flex justify-end animate-fade-up">
                      <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-gradient-brand px-3.5 py-2 text-[13px] text-white shadow-glow">{P1}</div>
                    </div>
                  )}
                  {/* AI follow-up question */}
                  {gte('ask') && (
                    <div className="flex items-end gap-2 animate-fade-up">
                      <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white"><Dot /></div>
                      <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white px-3.5 py-2 text-[13px] text-slate-700 shadow-sm">{AI_Q}</div>
                    </div>
                  )}
                  {/* user 2 */}
                  {gte('sent2') && (
                    <div className="flex justify-end animate-fade-up">
                      <div className="max-w-[88%] rounded-2xl rounded-tr-sm bg-gradient-brand px-3.5 py-2 text-[13px] text-white shadow-glow">{P2}</div>
                    </div>
                  )}
                  {/* thinking */}
                  {phase === 'analyzing' && (
                    <div className="flex items-end gap-2">
                      <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white"><Dot /></div>
                      <div className="flex gap-1 rounded-2xl rounded-tl-sm border border-slate-100 bg-white px-3 py-2.5 shadow-sm">
                        {[0, 1, 2].map((d) => <span key={d} className="h-1.5 w-1.5 rounded-full bg-slate-400 animate-pulse" style={{ animationDelay: `${d * 200}ms` }} />)}
                      </div>
                    </div>
                  )}
                  {/* AI strategy-ready */}
                  {gte('strategy') && (
                    <div className="flex items-end gap-2 animate-fade-up">
                      <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white"><Dot /></div>
                      <div className="max-w-[88%] rounded-2xl rounded-tl-sm border border-slate-100 bg-white px-3.5 py-2 text-[13px] text-slate-700 shadow-sm">Done — your 30-day strategy is on the right →</div>
                    </div>
                  )}

                  {/* typing input (type1 / type2) */}
                  {typing && (
                    <div className="mt-auto flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3.5 py-3 shadow-sm">
                      <span className="flex-1 text-[13px] text-slate-700">
                        {(phase === 'type1' ? P1.slice(0, typed1) : P2.slice(0, typed2)) || <span className="text-slate-400">Type your answer…</span>}
                        <span className="ml-0.5 inline-block h-4 w-0.5 -translate-y-px bg-brand-600 align-middle animate-pulse" />
                      </span>
                      <span className={`grid h-8 w-8 flex-none place-items-center rounded-full text-white ${(phase === 'type1' ? typed1 >= P1.length : typed2 >= P2.length) ? 'bg-gradient-brand shadow-glow' : 'bg-slate-300'}`}>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 19V5M5 12l7-7 7 7" /></svg>
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* ════ Strategy / Calendar pane ════ */}
              <div className="relative flex min-h-[440px] flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white p-4 lg:col-span-7">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">{showCal ? 'Content calendar' : 'Strategy'}</span>
                  <span className={`rounded-full border px-2.5 py-0.5 text-[10px] font-bold transition-all ${showShimmer ? 'border-slate-100 bg-slate-50 text-slate-400' : 'border-brand-100 bg-brand-50 text-brand-700'}`}>
                    {showShimmer ? 'Building your strategy…' : showCal ? '12 posts scheduled' : 'Strategy ready'}
                  </span>
                </div>

                {/* ── Shimmer loading ── */}
                {showShimmer && (
                  <div className="mt-4 flex-1 space-y-3">
                    <div className="h-5 w-2/3 rounded-md bg-gradient-to-r from-slate-200/70 via-white to-slate-200/70 bg-[length:200%_100%] animate-shimmer" />
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="space-y-2">
                        <div className="h-3 w-1/3 rounded bg-gradient-to-r from-slate-200/70 via-white to-slate-200/70 bg-[length:200%_100%] animate-shimmer" />
                        <div className="h-3 w-full rounded bg-gradient-to-r from-slate-200/60 via-white to-slate-200/60 bg-[length:200%_100%] animate-shimmer" />
                        <div className="h-3 w-4/5 rounded bg-gradient-to-r from-slate-200/60 via-white to-slate-200/60 bg-[length:200%_100%] animate-shimmer" />
                      </div>
                    ))}
                  </div>
                )}

                {/* ── Strategy doc (writes in) ── */}
                {showDoc && (
                  <div className="relative mt-4 flex-1">
                    <div className="transition-all duration-500" style={{ opacity: 1 }}>
                      <h3 className="text-lg font-extrabold text-slate-900 transition-all duration-500" style={{ opacity: gte('strategy') ? 1 : 0 }}>{DOC.title}</h3>
                      <div className="mt-4 space-y-3.5">
                        {DOC.rows.map((r, i) => (
                          <div key={r.h} className="transition-all duration-500" style={{ transitionDelay: `${300 + i * 350}ms`, opacity: gte('strategy') ? 1 : 0, transform: gte('strategy') ? 'none' : 'translateY(6px)' }}>
                            <div className="text-[11px] font-bold uppercase tracking-wider text-brand-700">{r.h}</div>
                            {r.body && <p className="mt-1 text-sm text-slate-600">{r.body}</p>}
                            {r.chips && (
                              <div className="mt-1.5 flex flex-wrap gap-1.5">
                                {r.chips.map((c) => <span key={c} className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-semibold text-brand-700 border border-brand-100">{c}</span>)}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* overlay convert button */}
                    <div className="absolute inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white via-white/90 to-transparent pt-10 pb-1 transition-opacity duration-500" style={{ opacity: gte('docDone') ? 1 : 0 }}>
                      <span className={`flex items-center gap-2 rounded-full bg-gradient-brand px-5 py-3 text-sm font-bold text-white shadow-glow transition-all duration-300 ${phase === 'convert' ? 'scale-105 ring-4 ring-brand-300/50' : ''}`}>
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
                        Convert to content calendar
                      </span>
                    </div>
                  </div>
                )}

                {/* ── Calendar ── */}
                {showCal && (
                  <div className="mt-4 flex-1 animate-fade-up">
                    <div className="mb-1.5 grid grid-cols-7 gap-1.5">
                      {WEEKDAYS.map((d, i) => <div key={i} className="text-center text-[9px] font-bold uppercase tracking-wider text-slate-400">{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1.5">
                      {MONTH.map((p, i) => {
                        const isFeatured = i === FEATURED;
                        const pop = isFeatured && featuredActive;
                        return (
                          <div key={i} className="relative">
                            <div
                              className={`flex aspect-square items-center justify-center rounded-lg border transition-all duration-300 ${p ? 'border-slate-100 bg-white shadow-sm' : 'border-dashed border-slate-200 bg-slate-50/50'} ${pop ? 'z-20 border-brand-300 shadow-lg ring-2 ring-brand-200' : ''}`}
                              style={{ transitionDelay: showCal ? `${i * 28}ms` : '0ms', opacity: showCal ? 1 : 0, transform: pop ? 'scale(1.35)' : showCal ? 'scale(1)' : 'scale(0.85)' }}
                            >
                              {p ? <SocialIcon platform={p} size={20} /> : <span className="h-1 w-1 rounded-full bg-slate-300" />}
                            </div>
                            {pop && (
                              <div className="absolute left-full top-1/2 z-30 ml-3 w-44 -translate-y-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl animate-fade-up">
                                <div className="flex items-center gap-1.5">
                                  <SocialIcon platform="instagram" size={18} />
                                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Mon · Reel</span>
                                </div>
                                <div className="mt-1.5 text-xs font-bold text-slate-800">{FEATURED_TITLE}</div>
                                <div className="mt-1 text-[10px] text-slate-400">Click to open &amp; edit</div>
                              </div>
                            )}
                          </div>
                        );
                      })}
                    </div>
                    <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                      <span><strong className="text-slate-900">12 posts</strong> scheduled · gaps left for you</span>
                      <span className="rounded-full bg-emerald-50 px-2 py-0.5 font-bold text-emerald-700 border border-emerald-100">Auto-scheduled</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            )}

            {/* ════ Content detail page (opens from a calendar cell) ════ */}
            {showDetail && (
              <div className="grid gap-2.5 p-1.5 lg:grid-cols-12 animate-scale-in">
                {/* left — content + AI tools */}
                <div className="flex min-h-[440px] flex-col rounded-2xl border border-slate-100 bg-white p-4 lg:col-span-7">
                  <div className="flex items-center gap-2.5">
                    <SocialIcon platform="instagram" size={28} />
                    <div className="min-w-0">
                      <div className="truncate text-sm font-bold text-slate-900">{FEATURED_TITLE}</div>
                      <div className="text-[10px] text-slate-400">Mon · Instagram Reel · Draft</div>
                    </div>
                    <span className="ml-auto rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">In review</span>
                  </div>

                  {/* image preview */}
                  <div className="relative mt-3 h-36 w-full overflow-hidden rounded-xl bg-gradient-to-br from-amber-200 via-pink-200 to-violet-200">
                    <span className="absolute bottom-2 right-2 rounded-full bg-white/80 px-2 py-0.5 text-[9px] font-bold text-slate-600 backdrop-blur">AI image</span>
                  </div>

                  {/* caption */}
                  <div className="mt-3 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs leading-relaxed text-slate-600">
                    &ldquo;Think great skin needs 10 steps? ✨ We&apos;re busting 5 myths before launch day. Save this 👇 #skincare #glowup&rdquo;
                  </div>

                  {/* AI tools */}
                  <div className="mt-auto pt-3">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AI tools</div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {AI_OPTS.map((o) => (
                        <span key={o} className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-slate-700">{o}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* right — connected accounts + publish */}
                <div className="flex min-h-[440px] flex-col rounded-2xl border border-slate-100 bg-slate-50/60 p-4 lg:col-span-5">
                  <div className="text-sm font-bold text-slate-900">Connected accounts</div>
                  <div className="mt-3 space-y-2">
                    {ACCOUNTS.map((a) => (
                      <div key={a.platform} className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-white px-3 py-2">
                        <SocialIcon platform={a.platform} size={24} />
                        <span className="min-w-0 flex-1 truncate text-xs font-semibold text-slate-800">{a.handle}</span>
                        <span className={`flex h-5 w-9 items-center rounded-full px-0.5 transition-colors ${a.on ? 'justify-end bg-brand-600' : 'justify-start bg-slate-200'}`}>
                          <span className="h-4 w-4 rounded-full bg-white shadow" />
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-3">
                    <div className="mb-2 flex items-center justify-between rounded-xl bg-brand-50 px-3 py-2 text-[11px]">
                      <span className="text-slate-600">AI best time</span>
                      <span className="font-bold text-brand-700">Thu 6:30 PM</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="flex-1 rounded-xl bg-gradient-brand px-3 py-2.5 text-center text-sm font-bold text-white shadow-glow">Post now</span>
                      <span className="flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2.5 text-center text-sm font-bold text-slate-700">Schedule</span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ── CTAs + proof ── */}
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a Demo</a>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">{PROOF.riskReversal}</p>
          <div className="mt-8 flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
