'use client';
import { useRef, useState } from 'react';
import ParallaxOrb from '@/components/ParallaxOrb';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

const models = ['GPT', 'Claude', 'Gemini'];

const suggestions = [
  'Plan a 30-day content calendar',
  'Grow engagement on Instagram Reels',
  'Launch a new product',
  'Plan content for Black Friday',
];

export default function HeroChat() {
  const [value, setValue] = useState('');
  const [model, setModel] = useState('GPT');
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const submit = () => {
    // While signup is disabled (product is dev-only), send people to the demo instead.
    if (DISABLE_LOGIN_SIGNUP) {
      window.location.href = LINKS.BOOK_DEMO;
      return;
    }
    const prompt = value.trim();
    const url = prompt ? `${LINKS.BRAND_SIGNUP}?prompt=${encodeURIComponent(prompt)}` : LINKS.BRAND_SIGNUP;
    window.location.href = url;
  };

  const pick = (s: string) => {
    setValue(s);
    inputRef.current?.focus();
  };

  return (
    <section className="relative overflow-hidden pt-28 pb-24 sm:pt-32 sm:pb-28">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <ParallaxOrb className="absolute -top-32 right-[-5%] h-[420px] w-[420px] rounded-full bg-brand-300/30 blur-3xl animate-glow-pulse" speed={0.08} />
      <ParallaxOrb className="absolute top-[35%] left-[-5%] h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl animate-glow-pulse" speed={0.14} />

      <div className="container-px relative">
        <div className="mx-auto max-w-3xl text-center">
          <span className="pill animate-fade-up">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
            Every AI model · one social media workspace
          </span>

          <h1 className="h-display mx-auto mt-5 max-w-3xl text-5xl leading-[1.05] sm:text-6xl lg:text-7xl animate-fade-up" style={{ animationDelay: '90ms' }}>
            What&apos;s your{' '}
            <span className="text-gradient-animated">content goal?</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600 animate-fade-up" style={{ animationDelay: '160ms' }}>
            Tell Trendly your goal. Every top AI model — GPT, Claude, Gemini — builds your strategy and content, turns it into a calendar in one click, and schedules it everywhere.
          </p>
        </div>

        {/* ── Chat input ── */}
        <div className="mx-auto mt-10 max-w-2xl animate-fade-up" style={{ animationDelay: '230ms' }}>
          <div className="rounded-[28px] border border-slate-200 bg-white p-4 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.3)] transition-shadow focus-within:shadow-[0_30px_90px_-25px_rgba(37,99,235,0.35)]">
            {/* model selector */}
            <div className="flex items-center gap-1.5 px-1 pb-3">
              {models.map((m) => (
                <button
                  key={m}
                  onClick={() => setModel(m)}
                  className={`rounded-full px-3 py-1 text-[11px] font-bold transition ${
                    model === m ? 'bg-gradient-brand text-white shadow-glow' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                  }`}
                >
                  {m}
                </button>
              ))}
              <span className="ml-auto text-[10px] font-semibold text-slate-400">AI · Marketing-tuned</span>
            </div>

            <textarea
              ref={inputRef}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault();
                  submit();
                }
              }}
              rows={2}
              placeholder="Describe your brand and what you want to achieve…"
              className="w-full resize-none bg-transparent px-2 text-base text-slate-800 outline-none placeholder:text-slate-400"
            />

            <div className="flex items-center justify-between px-1 pt-2">
              <span className="text-xs text-slate-400">{PROOF.riskReversal}</span>
              <button
                onClick={submit}
                aria-label="Generate"
                className="grid h-10 w-10 place-items-center rounded-full bg-gradient-brand text-white shadow-glow transition-transform hover:-translate-y-0.5"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* suggestion chips */}
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {suggestions.map((s) => (
              <button
                key={s}
                onClick={() => pick(s)}
                className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 backdrop-blur transition hover:-translate-y-0.5 hover:border-brand-200 hover:bg-brand-50 hover:text-brand-700"
              >
                {s}
              </button>
            ))}
          </div>

          {/* secondary CTA */}
          <div className="mt-7 flex items-center justify-center gap-3">
            {!DISABLE_LOGIN_SIGNUP && (
              <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
            )}
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a Demo</a>
          </div>

          {/* proof */}
          <div className="mt-9 flex items-center justify-center gap-4">
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
