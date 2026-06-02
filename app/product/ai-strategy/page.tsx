import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, softwareApplicationSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'AI Social Media Strategy Generator for Founders & Small Teams — Trendly',
  description:
    "Trendly's AI social media strategy engine analyzes your brand, audience, and competitors to build content pillars and a posting cadence per channel — in minutes, no strategist required.",
};

const faqs = [
  {
    q: 'How does the AI build my social media strategy?',
    a: "You chat with the AI about your brand, goals, and audience — using whichever top model fits the task (GPT, Claude, Gemini). It analyzes your positioning, your competitors' content, and trending formats in your niche, then returns a structured strategy: content pillars, themes, and a recommended posting cadence for each channel.",
  },
  {
    q: 'Which AI models can I use to build my strategy?',
    a: 'Every top model lives in one place — GPT, Claude, Gemini, and more — so you never tab-switch between AI subscriptions. Trendly routes each task to the model that does it best (Claude for deep strategy, GPT for copy, Gemini for visuals), so you always get the strongest result.',
  },
  {
    q: 'Do I need a marketing strategist to use Trendly?',
    a: 'No. Trendly is built for solo founders and small in-house teams who do not have a dedicated strategist. The AI does the strategic groundwork so you can focus on creating and publishing.',
  },
  {
    q: 'Can I edit the strategy the AI generates?',
    a: 'Yes. The AI gives you a strong starting framework, but every pillar, theme, and cadence is fully editable. Adjust the mix, rename pillars, or change how often you post per channel — then push it straight into your content calendar.',
  },
  {
    q: 'How is this different from a generic AI chatbot?',
    a: 'A chatbot gives you a wall of text from one model. Trendly puts every top model in one workspace and turns strategy into a working plan — where you schedule, review and approve as a team, and activate creators. Strategy, calendar, and creators live in one place.',
  },
];

const pillars = [
  { label: 'Education', posts: '4× / week', color: 'border-brand-200 bg-brand-50', textColor: 'text-brand-700', dotColor: 'bg-brand-500' },
  { label: 'Authenticity', posts: '3× / week', color: 'border-accent-200 bg-accent-400/10', textColor: 'text-accent-600', dotColor: 'bg-accent-500' },
  { label: 'Product', posts: '2× / week', color: 'border-emerald-200 bg-emerald-50', textColor: 'text-emerald-700', dotColor: 'bg-emerald-500' },
  { label: 'Community', posts: '2× / week', color: 'border-violet-200 bg-violet-50', textColor: 'text-violet-700', dotColor: 'bg-violet-500' },
];

const cadence = [
  { ch: 'Instagram', short: 'IG', freq: '5× / wk' },
  { ch: 'TikTok', short: 'TT', freq: '3× / wk' },
  { ch: 'LinkedIn', short: 'LI', freq: '2× / wk' },
  { ch: 'X', short: 'X', freq: '2× / wk' },
];

const steps = [
  {
    n: '01',
    title: 'Tell Trendly about your brand',
    desc: 'Share your product, audience, goals, and the competitors you watch. It takes a couple of minutes — no spreadsheets, no briefs.',
  },
  {
    n: '02',
    title: 'AI builds your strategy',
    desc: 'The engine analyzes your positioning, competitive landscape, and trending formats, then returns content pillars, themes, and a posting cadence for each channel.',
  },
  {
    n: '03',
    title: 'Push it into your calendar',
    desc: 'Send the strategy straight to your content calendar as scheduled slots. Your week is planned before you write a single caption.',
  },
];

export default function AiStrategyPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product/ai-strategy' },
            { name: 'AI Strategy Engine', path: '/product/ai-strategy' },
          ]),
          softwareApplicationSchema(),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="AI Strategy Engine"
        title="Your AI social media strategy, built in minutes"
        highlight="AI social media strategy"
        subtitle="Chat with every top AI model — GPT, Claude, Gemini — in one workspace to shape your strategy. Trendly studies your brand, audience, and competitors, then hands you content pillars and a posting cadence per channel. The strategist you don't have, on tap."
      />

      {/* Primary CTA under hero */}
      <section className="-mt-4 pb-4">
        <div className="container-px flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
            <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a Demo</a>
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">{PROOF.riskReversal}</p>
        </div>
      </section>

      {/* ── What the AI Strategy Engine does ── */}
      <section className="py-20">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left" distance={36}>
            <div>
              <span className="section-eyebrow">What it does</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                From a blank page to a real plan
              </h2>
              <p className="mt-4 text-slate-600">
                Most founders know they <em>should</em> post consistently — but staring at a blank
                calendar is where momentum dies. Trendly removes that wall. Chat with every top AI
                model in one place — Claude for deep strategy, GPT for copy, Gemini for visuals — to
                pin down what your brand stands for, who you&apos;re trying to reach, what your
                competitors are publishing, and which formats are winning in your niche right now.
              </p>
              <p className="mt-4 text-slate-600">
                The output isn&apos;t a vague essay from a single chatbot. It&apos;s a structured
                strategy: a set of content pillars to balance your feed, themes to keep you from
                repeating yourself, and a recommended posting cadence for every channel you care
                about — ready to push into a calendar your team can review and approve.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  'Every top AI model in one place — no tab-switching between subscriptions',
                  'Competitor and trend monitoring across your industry',
                  'Content pillars with a balanced posting mix',
                  'Recommended cadence per channel — IG, TikTok, LinkedIn, X',
                ].map((b, bi) => (
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

          {/* Strategy visual */}
          <ScrollReveal direction="right" distance={36} delay={80}>
            <div className="aspect-[5/4]">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
                <div className="mb-4 inline-flex items-center gap-1.5 rounded-full bg-brand-600 px-3 py-1 text-xs font-bold text-white shadow-glow">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
                  </svg>
                  AI-generated for your brand
                </div>
                <div className="grid grid-cols-2 gap-2.5">
                  {pillars.map((p, i) => (
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
                <div className="mt-4 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Recommended Cadence</div>
                  <div className="mt-2 flex gap-1">
                    {cadence.map((c) => (
                      <div key={c.short} className="flex-1 rounded-xl bg-slate-50 p-2 text-center">
                        <div className="text-[10px] font-extrabold text-slate-700">{c.short}</div>
                        <div className="mt-0.5 text-[9px] text-slate-400">{c.freq.replace(' / wk', '/wk')}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Pillars + cadence detail ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Pillars + cadence</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">A balanced plan, not a guess</h2>
            <p className="mt-4 text-slate-600">
              Pillars keep your content varied and on-message. Cadence keeps you consistent without
              burning out. Trendly tunes both to your brand and the channels you actually use.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2">
            <ScrollReveal direction="left" distance={28}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-glow">
                <h3 className="text-lg font-bold text-slate-900">Content pillars</h3>
                <p className="mt-2 text-sm text-slate-600">
                  Four to six recurring themes that give your feed structure and stop you posting the
                  same thing twice.
                </p>
                <div className="mt-5 grid grid-cols-2 gap-2.5">
                  {pillars.map((p) => (
                    <div key={p.label} className={`rounded-2xl border p-3 ${p.color}`}>
                      <div className="flex items-center gap-1.5">
                        <span className={`h-2 w-2 rounded-full ${p.dotColor}`} />
                        <span className={`text-xs font-bold ${p.textColor}`}>{p.label}</span>
                      </div>
                      <div className="mt-1.5 text-[10px] text-slate-500">{p.posts}</div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" distance={28} delay={80}>
              <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-glow">
                <h3 className="text-lg font-bold text-slate-900">Recommended cadence</h3>
                <p className="mt-2 text-sm text-slate-600">
                  A posting rhythm per channel, sized to what one founder or a 2–3 person team can
                  actually sustain.
                </p>
                <div className="mt-5 space-y-2.5">
                  {cadence.map((c) => (
                    <div key={c.ch} className="flex items-center justify-between rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3">
                      <span className="text-sm font-semibold text-slate-800">{c.ch}</span>
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700 border border-brand-100">{c.freq}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── Built for founders ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-3xl text-center">
            <span className="section-eyebrow">Why it matters</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Built for founders who don&apos;t have a strategist
            </h2>
            <p className="mt-4 text-slate-600">
              Buffer, SocialPilot, Later, and Hootsuite hand you an empty scheduler and wish you luck.
              That&apos;s fine if you already have a strategy and a team to run it. If you&apos;re the
              founder <em>and</em> the marketing team, an empty calendar is the problem — not the
              solution. Trendly starts one step earlier: it tells you what to post before it asks you
              to schedule it.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {[
              { t: 'No strategist on payroll', d: 'You get a credible content strategy without hiring or briefing one — every top AI model does the analysis a consultant would charge for.' },
              { t: 'No blank-page paralysis', d: 'Every week starts with a plan already in place. You spend your energy creating, not deciding what to create.' },
              { t: 'One workspace, end to end', d: "Strategy doesn't live in a doc you forget. It flows straight into the calendar your team reviews and approves, and the creators you activate." },
            ].map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 70} distance={24}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <h3 className="text-lg font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How it works ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">How it works</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Strategy in three steps</h2>
          </ScrollReveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <ScrollReveal key={s.n} direction="up" delay={i * 80} distance={28}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-2 hover:shadow-glow">
                  <span className="text-gradient-animated text-4xl font-extrabold">{s.n}</span>
                  <h3 className="mt-3 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{s.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Questions about AI strategy</h2>
          </ScrollReveal>
          <div className="mt-10 space-y-4">
            {faqs.map((f, i) => (
              <ScrollReveal key={f.q} direction="up" delay={i * 50} distance={20}>
                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                  <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Internal links ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { href: '/product/content-calendar', t: 'Content Calendar', d: 'Turn your strategy into posts your team reviews, approves, and schedules.' },
              { href: '/solutions/founders', t: 'For founders', d: 'You are the founder and the marketing team. Here is how Trendly helps.' },
              { href: '/solutions/agencies', t: 'For agencies', d: 'Run client strategy at scale — every AI model in one place, per workspace.' },
            ].map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">{l.t}</h3>
                  <svg className="h-4 w-4 text-brand-600 transition-transform group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
                <p className="mt-2 text-sm text-slate-600">{l.d}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
