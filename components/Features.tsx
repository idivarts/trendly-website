import ScrollReveal from '@/components/ScrollReveal';

const features = [
  {
    title: 'Powerful Influencer Discovery',
    desc: 'Find the right influencers faster with advanced filters and data-driven insights designed to match your exact campaign needs.',
    bullets: [
      'Filter by demography — age, gender, location',
      'Basic filters: niche, followers, engagement',
      'Advanced metrics like average views & growth',
      'Keyword search across name, bio & captions',
    ],
    visual: 'discovery',
  },
  {
    title: 'Campaign Management',
    desc: 'Manage your entire collaboration process in one place — from posting requirements to reviewing applications and finalizing the right influencers.',
    bullets: [
      'Post a single brief, reach the right creators',
      'Invite & manage multiple influencers at once',
      'Quotation review and one-click shortlisting',
      'Workflow templates for repeated campaigns',
    ],
    visual: 'campaign',
    flip: true,
  },
  {
    title: 'End-to-End Content Delivery',
    desc: 'Streamline negotiations, stay on top of deadlines, and seal agreements — all within Trendly for smooth, secure collaborations.',
    bullets: [
      'In-app messaging for streamlined communication',
      'Timeline management & smart reminders',
      'Rate creators to build long-term trust',
      'Pay only after content is approved',
    ],
    visual: 'delivery',
  },
];

function Visual({ kind }: { kind: string }) {
  if (kind === 'discovery') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
        <div className="grid grid-cols-2 gap-3">
          {[
            { name: 'Aanya', tag: 'Lifestyle', f: '38k', g: 'from-pink-400 to-rose-500' },
            { name: 'Rohan', tag: 'Fitness', f: '52k', g: 'from-emerald-400 to-teal-500' },
            { name: 'Priya', tag: 'Food', f: '24k', g: 'from-amber-400 to-orange-500' },
            { name: 'Karan', tag: 'Tech', f: '61k', g: 'from-sky-400 to-indigo-500' },
          ].map((c, i) => (
            <div
              key={c.name}
              className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-brand-100"
              style={{
                animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
                animationDelay: `${i * 80}ms`,
              }}
            >
              <div className={`h-20 w-full rounded-xl bg-gradient-to-br ${c.g}`} />
              <div className="mt-3 text-sm font-semibold text-slate-900">{c.name}</div>
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
            <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">Mumbai</span>
            <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">20-50k</span>
          </div>
        </div>
      </div>
    );
  }
  if (kind === 'campaign') {
    return (
      <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-accent-400/10 to-white p-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold text-slate-900">Summer launch — D2C beauty</div>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">Live</span>
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2 text-center">
            {[
              { v: '24', l: 'Invited', cls: 'bg-slate-50 text-slate-900' },
              { v: '12', l: 'Quoted',  cls: 'bg-brand-50 text-brand-700' },
              { v: '7',  l: 'Hired',   cls: 'bg-emerald-50 text-emerald-700' },
            ].map((stat) => (
              <div key={stat.l} className={`rounded-xl p-3 transition-transform duration-200 hover:scale-105 ${stat.cls.split(' ')[0]}`}>
                <div className={`text-lg font-extrabold ${stat.cls.split(' ')[1]}`}>{stat.v}</div>
                <div className={`text-[10px] uppercase tracking-wider ${stat.cls.split(' ')[1]}/80`}>{stat.l}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-3 space-y-2">
          {[
            { n: 'Aanya Sharma', s: 'Quoted ₹4,500', c: 'from-pink-400 to-rose-500' },
            { n: 'Rohan Mehta', s: 'Approved', c: 'from-emerald-400 to-teal-500' },
            { n: 'Priya Iyer', s: 'In review', c: 'from-amber-400 to-orange-500' },
          ].map((c) => (
            <div key={c.n} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white p-2.5 shadow-sm transition hover:-translate-y-0.5">
              <div className="flex items-center gap-2">
                <div className={`h-8 w-8 rounded-full bg-gradient-to-br ${c.c}`} />
                <div className="text-sm font-medium text-slate-800">{c.n}</div>
              </div>
              <span className="text-xs font-semibold text-slate-500">{c.s}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  // delivery
  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-accent-400/10 p-6">
      <div className="space-y-3">
        <div className="flex items-end gap-2">
          <div className="rounded-2xl rounded-bl-md bg-white p-3 shadow-sm transition hover:shadow-md">
            <div className="text-xs font-medium text-slate-700">Hi! Sharing first cut for review.</div>
          </div>
        </div>
        <div className="flex items-end justify-end gap-2">
          <div className="rounded-2xl rounded-br-md bg-gradient-brand px-3 py-2 text-white shadow-glow">
            <div className="text-xs font-medium">Looks great. Approved ✅</div>
          </div>
        </div>
        <div className="rounded-2xl border border-dashed border-brand-200 bg-white/70 p-3 text-center">
          <div className="text-[10px] uppercase tracking-wider text-brand-700">Contract</div>
          <div className="text-sm font-bold text-slate-900">Auto-generated · Signed by both</div>
        </div>
        <div className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-700">Payment</span>
            <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              Released
            </span>
          </div>
          <div className="mt-1 text-lg font-extrabold text-slate-900">₹4,500.00</div>
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

        {/* Section header */}
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">What we offer</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Everything you need,{' '}
            <span className="text-gradient-animated">all in one place</span>
          </h2>
          <p className="mt-4 text-slate-600">
            From seamless influencer discovery to campaign management and secure contracts, Trendly makes every step
            simple and transparent.
          </p>
        </ScrollReveal>

        <div className="mt-16 space-y-20">
          {features.map((f, i) => (
            <div
              key={f.title}
              className={`grid items-center gap-10 lg:grid-cols-2 ${f.flip ? 'lg:[&>div:first-child]:order-2' : ''}`}
            >
              {/* Text side — slides in from the correct edge */}
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
                        style={{
                          animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both',
                          animationDelay: `${bi * 70}ms`,
                        }}
                      >
                        <span className="mt-1 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
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

              {/* Visual side — slides in from the opposite edge */}
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
