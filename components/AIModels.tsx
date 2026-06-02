import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, AI_MODELS } from '@/lib/site-config';

// The core differentiator: stop tab-switching between AI tools. Every model in
// one workspace, tuned for marketing.
export default function AIModels() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 bg-ink-900" />
      <div className="absolute -top-40 left-1/2 h-96 w-[800px] -translate-x-1/2 rounded-full bg-brand-600/20 blur-3xl" />
      <div className="absolute -bottom-40 right-0 h-72 w-72 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-px relative">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
            One workspace, every model
          </span>
          <h2 className="h-display mt-5 text-4xl text-white sm:text-5xl">
            Stop switching between{' '}
            <span className="text-gradient-animated">ten AI tools</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Gemini for images, ElevenLabs for video, Claude for research, GPT for copy — juggling tabs, logins, and subscriptions kills your flow. Trendly brings every model into one place, each tuned and optimized for marketing.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {AI_MODELS.map((m, i) => (
            <ScrollReveal key={m.name} direction="scale" delay={i * 70} distance={18}>
              <div className="group flex h-full items-center gap-4 rounded-3xl border border-white/8 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/15 hover:bg-white/[0.07]">
                <div className="grid h-12 w-12 flex-none place-items-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 text-lg font-extrabold text-white">
                  {m.name.slice(0, 1)}
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span className="text-base font-bold text-white">{m.name}</span>
                    <span className="text-[10px] text-slate-500">{m.maker}</span>
                  </div>
                  <div className="mt-0.5 text-xs text-brand-300">Best for: {m.best}</div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal className="mt-12 text-center" delay={200}>
          <p className="mx-auto max-w-xl text-sm text-slate-400">
            Trendly routes each task to the model that does it best — so you always get the strongest result without thinking about which tool to open.
          </p>
          <a href={LINKS.BRAND_SIGNUP} className="btn-primary mt-6">Try every model free</a>
        </ScrollReveal>
      </div>
    </section>
  );
}
