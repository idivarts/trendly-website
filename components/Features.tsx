import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    title: 'AI Content Strategy Engine',
    desc: "Tell Trendly your brand and goals. The AI analyzes your audience, competitive landscape, and trending formats to build a complete content strategy — organized into pillars, themes, and a recommended posting cadence.",
    bullets: [
      'Brand voice analysis and content pillar framework',
      'Trend monitoring across your industry and competitors',
      'AI-recommended posting cadence per channel',
      'Weekly strategy insights and performance adjustments',
    ],
    visual: 'strategy',
  },
  {
    title: 'Content Calendar & Team Workflows',
    desc: 'A shared visual workspace where strategy turns into scheduled posts. Assign work, track approvals, and publish — your whole team knows exactly what to do and when.',
    bullets: [
      'Drag-and-drop calendar across Instagram, TikTok, LinkedIn, X',
      'Team roles: assign, comment, approve, publish',
      'AI-generated captions and creative briefs per post',
      'Approval workflows with version history and sign-off',
    ],
    visual: 'calendar',
    flip: true,
  },
  {
    title: 'Creator Discovery & Campaigns',
    desc: "When organic reach isn't enough, find the right creators inside the same platform. Search verified micro-influencers, send campaign briefs, and track every deliverable in one place.",
    bullets: [
      'Search 10,000+ verified micro-influencers by niche and audience',
      'One-click campaign briefs sent from your content calendar',
      'Track deliverables, revisions, and approvals end-to-end',
      'Pay creators only after content is approved and live',
    ],
    visual: 'discovery',
  },
];

function Visual({ kind }: { kind: string }) {
  if (kind === 'strategy') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
        {/* AI badge */}
        <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow-glow">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
          </svg>
          AI-generated for your brand
        </div>
        {/* Content pillars */}
        <div className="grid grid-cols-2 gap-2.5">
          {[
            { label: 'Education', posts: '4× / week', color: 'border-brand-200 bg-brand-50', textColor: 'text-brand-700', dotColor: 'bg-brand-500' },
            { label: 'Authenticity', posts: '3× / week', color: 'border-accent-200 bg-accent-400/10', textColor: 'text-accent-600', dotColor: 'bg-accent-500' },
            { label: 'Product', posts: '2× / week', color: 'border-emerald-200 bg-emerald-50', textColor: 'text-emerald-700', dotColor: 'bg-emerald-500' },
            { label: 'Community', posts: '2× / week', color: 'border-violet-200 bg-violet-50', textColor: 'text-violet-700', dotColor: 'bg-violet-500' },
          ].map((p, i) => (
            <div
              key={p.label}
              className={`rounded-2xl border p-3 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-sm ${p.color}`}
              style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${i * 80}ms` }}
            >
              <div className="flex items-center gap-1.5">
                <span className={`h-2 w-2 rounded-full ${p.dotColor}`} />
                <span className={`text-xs font-bold ${p.textColor}`}>{p.label}</span>
              </div>
              <div className="mt-1.5 text-[10px] text-slate-500">{p.posts}</div>
            </div>
          ))}
        </div>
        {/* Cadence row */}
        <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Recommended Cadence</div>
          <div className="mt-2 flex gap-1">
            {['IG', 'TT', 'LI', 'X'].map((ch, i) => (
              <div key={ch} className="flex-1 rounded-xl bg-slate-50 p-2 text-center">
                <div className="text-[10px] font-extrabold text-slate-700">{ch}</div>
                <div className="mt-0.5 text-[9px] text-slate-400">{['5×', '3×', '2×', '2×'][i]}/wk</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (kind === 'calendar') {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
    const calPosts: Record<string, { ch: string; type: string; status: string; chColor: string; statusColor: string }[]> = {
      Mon: [{ ch: 'IG', type: 'Reel', status: 'Live', chColor: 'bg-pink-100 text-pink-700', statusColor: 'bg-emerald-500' }],
      Tue: [{ ch: 'TT', type: 'Video', status: 'Draft', chColor: 'bg-violet-100 text-violet-700', statusColor: 'bg-slate-300' }],
      Wed: [
        { ch: 'LI', type: 'Article', status: 'Review', chColor: 'bg-sky-100 text-sky-700', statusColor: 'bg-amber-400' },
        { ch: 'IG', type: 'Story', status: 'Sched', chColor: 'bg-pink-100 text-pink-700', statusColor: 'bg-brand-500' },
      ],
      Thu: [{ ch: 'X', type: 'Thread', status: 'Sched', chColor: 'bg-slate-100 text-slate-700', statusColor: 'bg-brand-500' }],
      Fri: [{ ch: 'TT', type: 'Reel', status: 'Draft', chColor: 'bg-violet-100 text-violet-700', statusColor: 'bg-slate-300' }],
    };

    return (
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-accent-400/10 to-white p-5">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-bold text-slate-900">Week of May 19</span>
          <span className="rounded-full bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">8 posts</span>
        </div>
        <div className="grid grid-cols-5 gap-1.5">
          {days.map((d) => (
            <div key={d}>
              <div className="mb-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">{d}</div>
              <div className="space-y-1">
                {calPosts[d].map((p, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                  >
                    <div className={`inline-flex rounded-full px-1.5 py-0.5 text-[8px] font-bold ${p.chColor}`}>{p.ch}</div>
                    <div className="mt-1 text-[9px] font-semibold text-slate-700">{p.type}</div>
                    <div className="mt-1 flex items-center gap-1">
                      <span className={`h-1.5 w-1.5 rounded-full ${p.statusColor}`} />
                      <span className="text-[8px] text-slate-400">{p.status}</span>
                    </div>
                  </div>
                ))}
                {calPosts[d].length === 0 && (
                  <div className="rounded-xl border border-dashed border-slate-100 py-4" />
                )}
              </div>
            </div>
          ))}
        </div>
        {/* Team row */}
        <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
          <div className="flex -space-x-2">
            {['from-pink-400 to-rose-500', 'from-sky-400 to-indigo-500', 'from-emerald-400 to-teal-500'].map((g, i) => (
              <div key={i} className={`h-6 w-6 rounded-full bg-gradient-to-br ${g} border-2 border-white`} />
            ))}
          </div>
          <span className="text-[10px] font-semibold text-slate-500">2 posts awaiting review</span>
          <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">Review</span>
        </div>
      </div>
    );
  }

  // discovery — US creators
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
      <div className="grid grid-cols-2 gap-3">
        {[
          { name: 'Jamie Lee',   tag: 'Wellness',   f: '41k', g: 'from-pink-400 to-rose-500'    },
          { name: 'Marcus Reid', tag: 'Fitness',    f: '58k', g: 'from-emerald-400 to-teal-500' },
          { name: 'Priya Nair',  tag: 'Beauty',     f: '29k', g: 'from-amber-400 to-orange-500' },
          { name: 'Alex Torres', tag: 'Lifestyle',  f: '63k', g: 'from-sky-400 to-indigo-500'   },
        ].map((c, i) => (
          <div
            key={c.name}
            className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-100"
            style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${i * 80}ms` }}
          >
            <div className={`h-16 w-full rounded-xl bg-gradient-to-br ${c.g}`} />
            <div className="mt-2.5 text-sm font-semibold text-slate-900">{c.name}</div>
            <div className="flex items-center justify-between text-xs text-slate-500">
              <span>{c.tag}</span>
              <span className="font-semibold text-brand-700">{c.f}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="absolute -bottom-4 -right-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
        <div className="text-[10px] uppercase tracking-wider text-slate-500">Filters Applied</div>
        <div className="mt-1 flex gap-1">
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">Wellness</span>
          <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">20–70k</span>
        </div>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/60 to-transparent" />
      <div className="container-px relative">

        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">What we offer</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Everything your team needs,{' '}
            <span className="text-gradient-animated">all in one place</span>
          </h2>
          <p className="mt-4 text-slate-600">
            From AI-powered strategy to creator campaigns — Trendly covers every step of the modern marketing workflow.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${f.flip ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              <ScrollReveal direction={f.flip ? 'right' : 'left'} distance={36}>
                <div>
                  <span className="pill">Module {String(i + 1).padStart(2, '0')}</span>
                  <h3 className="h-display mt-4 text-3xl sm:text-4xl">{f.title}</h3>
                  <p className="mt-4 text-slate-600">{f.desc}</p>
                  <ul className="mt-6 space-y-3">
                    {f.bullets.map((b, bi) => (
                      <li
                        key={b}
                        className="flex items-start gap-3"
                        style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${bi * 70}ms` }}
                      >
                        <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </span>
                        <span className="text-sm font-medium text-slate-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              <ScrollReveal direction={f.flip ? 'left' : 'right'} distance={36} delay={80}>
                <div className="aspect-[5/4]">
                  <Visual kind={f.visual} />
                </div>
              </ScrollReveal>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
