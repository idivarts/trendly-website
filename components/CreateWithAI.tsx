import ScrollReveal from '@/components/ScrollReveal';
import { LINKS } from '@/lib/site-config';

const outputs = [
  {
    kind: 'Caption',
    model: 'GPT',
    body: '"Your 3-step glow-up starts here ✨ Save this for your next self-care Sunday → link in bio."',
    chip: 'bg-pink-50 text-pink-700 border-pink-100',
  },
  {
    kind: 'Image',
    model: 'Gemini',
    body: 'A bright, minimal product flat-lay on a peach background — on-brand, ready to post.',
    chip: 'bg-violet-50 text-violet-700 border-violet-100',
    image: true,
  },
  {
    kind: 'Script',
    model: 'ElevenLabs',
    body: '15-sec Reel script + AI voiceover: hook, 3 benefits, CTA — timed to trending audio.',
    chip: 'bg-sky-50 text-sky-700 border-sky-100',
  },
];

export default function CreateWithAI() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Create with AI</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            One prompt. A{' '}
            <span className="text-gradient-animated">finished post.</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Describe what you want and Trendly generates the caption, the image, and the script — each from the AI model that does it best. Edit, approve, and it&apos;s ready to schedule.
          </p>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 max-w-4xl" direction="scale" distance={20}>
          <div className="rounded-[32px] border border-slate-200 bg-white p-6 shadow-soft sm:p-8">
            {/* prompt bar */}
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
              <svg className="h-5 w-5 flex-none text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
              <span className="flex-1 text-sm text-slate-600">&ldquo;Make a launch-day post for my new vitamin C serum&rdquo;</span>
              <span className="hidden rounded-full bg-gradient-brand px-3 py-1.5 text-xs font-bold text-white shadow-glow sm:inline">Generate</span>
            </div>

            {/* outputs */}
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {outputs.map((o, i) => (
                <ScrollReveal key={o.kind} direction="up" delay={i * 90} distance={20}>
                  <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:shadow-glow">
                    <div className="flex items-center justify-between">
                      <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${o.chip}`}>{o.kind}</span>
                      <span className="text-[10px] font-semibold text-slate-400">via {o.model}</span>
                    </div>
                    {o.image ? (
                      <div className="mt-3 h-24 w-full rounded-xl bg-gradient-to-br from-amber-200 via-pink-200 to-violet-200" />
                    ) : (
                      <div className="mt-3 flex h-24 flex-col justify-center gap-2 rounded-xl bg-slate-50 px-3">
                        <div className="h-2 w-5/6 rounded-full bg-slate-200" />
                        <div className="h-2 w-full rounded-full bg-slate-200" />
                        <div className="h-2 w-2/3 rounded-full bg-slate-200" />
                      </div>
                    )}
                    <p className="mt-3 text-xs leading-relaxed text-slate-600">{o.body}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="mt-8 text-center" delay={150}>
          <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Create your first post free</a>
        </ScrollReveal>
      </div>
    </section>
  );
}
