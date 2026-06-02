import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

const replaced = ['Google Docs', 'Notion', 'Spreadsheets', 'A calendar app', 'A scheduler', 'Separate AI tools'];

const wins = [
  { t: 'One source of truth', d: 'Strategy, ideas, drafts, calendar, and approvals live together — no more copy-pasting between five apps.' },
  { t: 'Built for teams', d: 'Assign work, leave comments, and approve in one click. Everyone sees what’s planned and what needs them.' },
  { t: 'AI in every step', d: 'From the first idea to the scheduled post, AI drafts, suggests, and speeds you up — it’s not bolted on, it’s the core.' },
];

export default function OneWorkspace() {
  return (
    <section className="relative py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brand-50/40 to-transparent" />
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left — copy */}
          <ScrollReveal className="lg:col-span-6" direction="left" distance={32}>
            <span className="section-eyebrow">One tool, not ten</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Replace your whole{' '}
              <span className="text-gradient-animated">marketing stack</span>
            </h2>
            <p className="mt-5 text-slate-600">
              Stop stitching together Google Docs, Notion, spreadsheets, a calendar, a scheduler, and a pile of AI tools. Trendly is the single social media workspace that does it all — with your team and AI built in.
            </p>

            <div className="mt-7 space-y-4">
              {wins.map((w) => (
                <div key={w.t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{w.t}</div>
                    <p className="mt-0.5 text-sm text-slate-600">{w.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary mt-8">{DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Consolidate your stack free'}</a>
          </ScrollReveal>

          {/* Right — replaced tools → one Trendly */}
          <ScrollReveal className="lg:col-span-6" direction="right" distance={32} delay={80}>
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Cancel these</div>
                <div className="mt-3 grid grid-cols-2 gap-2.5">
                  {replaced.map((r) => (
                    <div key={r} className="flex items-center gap-2 rounded-xl border border-slate-100 bg-slate-50 px-3 py-2.5">
                      <svg className="h-4 w-4 flex-none text-rose-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
                      <span className="text-xs font-medium text-slate-500 line-through">{r}</span>
                    </div>
                  ))}
                </div>

                <div className="my-5 flex items-center gap-3">
                  <div className="h-px flex-1 bg-slate-100" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Keep one</span>
                  <div className="h-px flex-1 bg-slate-100" />
                </div>

                <div className="flex items-center justify-between rounded-2xl bg-gradient-brand p-4 text-white shadow-glow">
                  <div>
                    <div className="text-sm font-extrabold">Trendly</div>
                    <div className="text-xs text-white/80">Everything, in one workspace</div>
                  </div>
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-white/20">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
