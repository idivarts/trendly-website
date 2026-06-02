import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

// Differentiator: collaborating ON AI output is broken today (copy into a doc,
// ping the team, lose the thread). Trendly is built specifically for reviewing,
// editing, and approving AI content as a team.

const steps = [
  { t: 'Generate', d: 'Create posts, captions, images, and scripts with AI — right inside the workspace.' },
  { t: 'Review together', d: 'Share with your team in one click. They comment in context — no exporting to a doc.' },
  { t: 'Edit, manually or with AI', d: 'Anyone can tweak by hand or ask AI to rewrite — every change tracked in place.' },
  { t: 'Approve or deny', d: 'Sign off, request changes, or kill an idea. Nothing goes live without approval.' },
];

export default function CollaborateOnAI() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left — review/approval visual */}
          <ScrollReveal className="lg:col-span-6" direction="left" distance={32}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-brand opacity-20 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                {/* draft header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full border border-brand-100 bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">AI draft</span>
                    <span className="text-xs font-semibold text-slate-800">Launch Reel — caption</span>
                  </div>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">In review</span>
                </div>

                {/* draft body */}
                <p className="mt-3 rounded-2xl bg-slate-50 p-3 text-xs leading-relaxed text-slate-700">
                  &ldquo;Your 3-step glow-up starts here ✨ Save this for your next self-care Sunday → link in bio.&rdquo;
                </p>

                {/* comments */}
                <div className="mt-3 space-y-2">
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 flex-none rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                    <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-1.5 text-[11px] text-slate-700">
                      Love it — can we make the hook punchier? <span className="font-semibold text-brand-700">@AI rewrite</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="h-6 w-6 flex-none rounded-full bg-gradient-to-br from-sky-400 to-indigo-500" />
                    <div className="rounded-2xl rounded-tl-sm bg-slate-100 px-3 py-1.5 text-[11px] text-slate-700">
                      Add the discount code 👍
                    </div>
                  </div>
                </div>

                {/* approval bar */}
                <div className="mt-4 flex items-center gap-2">
                  <button className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-emerald-500 px-3 py-2 text-xs font-bold text-white">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                    Approve
                  </button>
                  <button className="flex-1 rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-slate-600">Request changes</button>
                  <button className="rounded-xl border border-slate-200 px-3 py-2 text-xs font-bold text-brand-700">✨ AI edit</button>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — copy */}
          <ScrollReveal className="lg:col-span-6" direction="right" distance={32} delay={80}>
            <span className="section-eyebrow">Built for collaboration</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              The first AI workspace built for{' '}
              <span className="text-gradient-animated">teams</span>
            </h2>
            <p className="mt-5 text-slate-600">
              Collaborating on AI content is painful today — you copy what you generated into a doc, paste it into Slack, and chase feedback across three apps. Trendly is built for this one job: generate with AI, then review, edit, and approve as a team without ever leaving the workspace.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {steps.map((s, i) => (
                <div key={s.t} className="rounded-2xl border border-slate-200 bg-white p-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-brand text-[10px] font-bold text-white">{i + 1}</span>
                    <span className="text-sm font-bold text-slate-900">{s.t}</span>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600">{s.d}</p>
                </div>
              ))}
            </div>

            <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary mt-8">{DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Set up your workflow free'}</a>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
