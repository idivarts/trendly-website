import ScrollReveal from '@/components/ScrollReveal';
import { AI_MODELS } from '@/lib/site-config';
import { SOCIALS, SocialIcon } from '@/components/SocialIcons';

// Honest "global trust" band. Trendly the product is new, so we earn worldwide
// trust the only honest way: the global tech it's built on (the AI model makers
// we integrate) + the global platforms it publishes to + the fact that anyone,
// anywhere can subscribe in USD. NO fabricated customer logos, counts, or quotes.

// Distinct AI makers behind the models in AI_MODELS — the names buyers recognize.
const makers = Array.from(new Set(AI_MODELS.map((m) => m.maker)));

export default function BuiltOnGlobalTech() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Built for a global audience</span>
          <h2 className="h-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Built on the world&apos;s best AI —{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">for teams worldwide</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Wherever you are, you get the same workspace: every leading AI model in one place, every major platform to publish to, and one simple subscription billed in USD — from anywhere in the world.
          </p>
        </ScrollReveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-5 lg:grid-cols-2">
          {/* Powered by the global AI labs */}
          <ScrollReveal direction="up" distance={18}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Powered by the world&apos;s leading AI
              </div>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {makers.map((maker) => (
                  <span
                    key={maker}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3.5 py-1.5 text-sm font-semibold text-slate-700"
                  >
                    {maker}
                  </span>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500">
                GPT, Claude, Gemini and more — Trendly routes each task to the model that does it best.
              </p>
            </div>
          </ScrollReveal>

          {/* Publish across every global platform */}
          <ScrollReveal direction="up" distance={18} delay={90}>
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-7">
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                Publish across every major platform
              </div>
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {SOCIALS.map((s) => (
                  <div key={s.key} className="flex items-center gap-2">
                    <SocialIcon platform={s.key} size={28} />
                    <span className="text-sm font-semibold text-slate-700">{s.label}</span>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-sm text-slate-500">
                Schedule and engage across the platforms your audience actually uses — from one place.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* Worldwide availability strip — true, defensible claims only */}
        <ScrollReveal className="mx-auto mt-6 max-w-4xl" direction="scale" distance={16}>
          <div className="grid gap-4 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6 text-center sm:grid-cols-3 sm:p-8">
            <div>
              <div className="bg-gradient-brand bg-clip-text text-2xl font-extrabold text-transparent">Worldwide</div>
              <div className="mt-1 text-sm text-slate-600">Subscribe from any country</div>
            </div>
            <div>
              <div className="bg-gradient-brand bg-clip-text text-2xl font-extrabold text-transparent">USD</div>
              <div className="mt-1 text-sm text-slate-600">One simple currency, billed monthly</div>
            </div>
            <div>
              <div className="bg-gradient-brand bg-clip-text text-2xl font-extrabold text-transparent">Secure</div>
              <div className="mt-1 text-sm text-slate-600">Global payments &amp; data protection</div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
