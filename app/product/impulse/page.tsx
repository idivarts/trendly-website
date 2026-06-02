import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, softwareApplicationSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Impulse — Comment to DM Automation & Social Auto-Reply Sales — Trendly',
  description:
    'Impulse is comment-to-DM automation that turns Instagram & Facebook comments and DMs into sales. When a follower comments "Interested" or "Price?", AI instantly replies with the right buy link and nurtures them to checkout.',
};

const steps = [
  {
    n: '01',
    title: 'Detect buying intent',
    desc: 'A follower comments "Interested", "Price?", or DMs your post. Impulse reads the signal in real time and recognizes a ready-to-buy moment as it happens.',
  },
  {
    n: '02',
    title: 'Reply instantly with the exact link',
    desc: 'Within seconds, the AI sends an on-brand reply with the right product link, answers the obvious questions, and removes the friction between interest and checkout.',
  },
  {
    n: '03',
    title: 'Nurture to checkout',
    desc: 'It keeps the conversation going — handling objections, offering to hold an item, sending a follow-up — so warm interest converts before it cools off or drifts to a competitor.',
  },
];

const included = [
  {
    t: 'Works on comments & DMs',
    d: 'Trigger on public comments and direct messages across Instagram and Facebook — wherever a follower raises their hand.',
  },
  {
    t: 'Intent detection, not keywords alone',
    d: 'Impulse understands phrasing like "how much?", "where do I get this?", or "😍" — not just one exact keyword — so fewer real buyers slip through.',
  },
  {
    t: 'The right link, every time',
    d: 'Map products to posts so the reply always points to the exact item the follower asked about — not a generic homepage link.',
  },
  {
    t: 'On-brand by default',
    d: 'Set your tone, rules, and the lines the AI should and should not say. It sounds like you, not like a bot.',
  },
];

const faqs = [
  {
    q: 'What is comment-to-DM automation?',
    a: 'Comment-to-DM automation is when a follower comments on your post with buying intent — like "Interested" or "Price?" — and the system automatically replies and moves them into a DM with the right product link. Impulse does this for both comments and DMs, then nurtures the conversation toward checkout so you capture the sale in the moment instead of hours later.',
  },
  {
    q: 'Which platforms does Impulse connect to?',
    a: 'Impulse works with Instagram and Facebook comments and DMs. You connect your accounts once, set your rules, and Impulse watches for buying signals on the posts you choose.',
  },
  {
    q: 'Will the replies sound like a bot?',
    a: 'No. You set the brand voice, the tone, and the lines Impulse can and cannot use. Replies pull the correct product link for each post and stay on-brand, so they read like a fast, helpful reply from your team — not a generic auto-responder.',
  },
  {
    q: 'Do I stay in control of what gets sent?',
    a: 'Yes. You decide which posts Impulse responds on, what it can offer, and where to hand off to a human. You can review conversations and adjust the rules anytime — Impulse handles the instant first response so no warm lead waits.',
  },
];

export default function ImpulsePage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product/impulse' },
            { name: 'Impulse', path: '/product/impulse' },
          ]),
          softwareApplicationSchema(),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="New · Impulse"
        title="Turn comments into customers — automatically"
        highlight="customers"
        subtitle="Impulse is comment-to-DM automation that catches buying intent the instant it appears. When someone comments “Interested” or DMs your post, AI replies with the right link and nurtures them to checkout — before the moment passes."
      />

      {/* CTAs under hero */}
      <section className="-mt-6 pb-4">
        <div className="container-px">
          <div className="flex flex-col items-center gap-3">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
              <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a call</a>
            </div>
            <p className="text-xs text-slate-500">{PROOF.riskReversal}</p>
          </div>
        </div>
      </section>

      {/* ── The problem ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">The leak</span>
            <h2 className="h-display mt-3 text-4xl sm:text-5xl">
              Interest fades in the hours before you{' '}
              <span className="text-gradient-animated">reply</span>
            </h2>
            <p className="mt-4 text-slate-600">
              A great post fills your comments and DMs with "How much?" and "Where do I buy this?".
              But buying intent is fragile. By the time you sit down to answer, the impulse has cooled,
              the cart never opened, and the follower has moved on — often to a competitor who replied first.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              {
                t: 'Replies come hours late',
                d: 'You see the comment when you next open the app. By then the moment that mattered — when they wanted it — is gone.',
              },
              {
                t: 'No link, no sale',
                d: '"Link in bio" makes a ready buyer go hunting. Most won\'t. Every extra tap between intent and checkout loses people.',
              },
              {
                t: 'Manual doesn\'t scale',
                d: 'One viral post can mean hundreds of comments. Answering each one by hand, on brand, fast enough, simply isn\'t possible.',
              },
            ].map((p, i) => (
              <ScrollReveal key={p.t} direction="scale" delay={i * 100}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-50 text-rose-500">
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 8v4M12 16h.01" />
                    </svg>
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-slate-900">{p.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── How Impulse works (copy + chat mock) ── */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
        <div className="container-px">
          <div className="grid items-center gap-12 lg:grid-cols-12">
            {/* Left — copy */}
            <ScrollReveal className="lg:col-span-6" direction="left" distance={36}>
              <span className="section-eyebrow">How Impulse works</span>
              <h2 className="h-display mt-3 text-4xl sm:text-5xl">
                Detect, reply, <span className="text-gradient-animated">convert</span> — in seconds
              </h2>
              <p className="mt-5 text-slate-600">
                Impulse closes the gap between a follower wanting your product and actually buying it.
                It works the moment intent appears, so the first reply is instant and the link is always right.
              </p>

              <ul className="mt-7 space-y-4">
                {steps.map((s) => (
                  <li key={s.n} className="flex items-start gap-4">
                    <span className="grid h-9 w-9 flex-none place-items-center rounded-2xl bg-gradient-brand text-xs font-bold text-white shadow-glow">
                      {s.n}
                    </span>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{s.title}</div>
                      <p className="mt-0.5 text-sm text-slate-600">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </ScrollReveal>

            {/* Right — chat mock visual */}
            <ScrollReveal className="lg:col-span-6" direction="right" distance={36} delay={80}>
              <div className="relative mx-auto max-w-md">
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-brand opacity-25 blur-2xl" />
                <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-2xl bg-accent-400 opacity-20 blur-2xl" />

                <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]">
                  {/* post header */}
                  <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                    <div>
                      <div className="text-sm font-bold text-slate-900">your_brand</div>
                      <div className="text-[10px] text-slate-400">New Reel · 2,418 likes</div>
                    </div>
                    <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">
                      Impulse on
                    </span>
                  </div>

                  {/* conversation */}
                  <div className="mt-4 space-y-3">
                    {/* user comment */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
                        😍 Obsessed! How much &amp; where do I get it?
                      </div>
                    </div>
                    {/* AI auto reply */}
                    <div className="flex items-end gap-2">
                      <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white">
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
                        </svg>
                      </div>
                      <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-gradient-to-br from-brand-600 to-brand-700 px-3.5 py-2 text-sm text-white shadow-glow">
                        Hi! It&apos;s $48 and ships free. Grab it here 👉 <span className="underline">trendly.now/shop/hero</span> — want me to hold one for you?
                      </div>
                    </div>
                    {/* auto badge */}
                    <div className="flex items-center gap-1.5 pl-8 text-[10px] font-semibold text-slate-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Sent automatically · 3s after comment
                    </div>
                    {/* follow up */}
                    <div className="flex justify-end">
                      <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
                        Yes please! Just ordered 🙌
                      </div>
                    </div>
                    {/* converted */}
                    <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-2.5">
                      <span className="text-xs font-semibold text-emerald-700">✅ Order placed — $48</span>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Converted</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ── What's included / connects to ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Built in</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Connects to your{' '}
              <span className="bg-gradient-brand bg-clip-text text-transparent">Instagram &amp; Facebook</span>
            </h2>
            <p className="mt-4 text-slate-600">
              Impulse plugs into the comments and DMs you already get — and turns them into a sales channel
              that never sleeps and never makes a buyer wait.
            </p>
          </ScrollReveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2">
            {included.map((c, i) => (
              <ScrollReveal key={c.t} direction="scale" delay={i * 80}>
                <div className="group relative h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-2 hover:border-brand-200 hover:shadow-glow">
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-brand opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-20" />
                  <h3 className="text-lg font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Set your rules, stay on brand ── */}
      <section className="py-12">
        <div className="container-px">
          <ScrollReveal direction="scale" distance={24}>
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-ink-900 p-8 text-white sm:p-12">
              <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-brand-600/20 blur-3xl" />
              <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-white/60 backdrop-blur">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                    Set your rules, stay on brand
                  </span>
                  <h2 className="h-display mt-5 text-3xl text-white sm:text-4xl">
                    You set the rules. Impulse follows them.
                  </h2>
                  <p className="mt-4 text-slate-400">
                    Choose which posts Impulse responds on, the tone it uses, the offers it can make, and
                    when to hand a conversation to a human. It captures the instant first reply so no warm
                    lead waits — and never says anything you wouldn't.
                  </p>
                </div>
                <div className="grid gap-3">
                  {[
                    'Pick the posts and products Impulse can reply on',
                    'Define your tone, do-not-say lines, and offers',
                    'Hand off to a human whenever you want',
                    'Review every conversation and adjust anytime',
                  ].map((t) => (
                    <div key={t} className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.04] p-4">
                      <svg className="mt-0.5 h-4 w-4 flex-none text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                      <span className="text-sm text-slate-200">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ── Who it's for ── */}
      <section className="py-20">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Who it's for</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Built for founders &amp; D2C brands selling on social
            </h2>
            <p className="mt-4 text-slate-600">
              If your posts drive demand but you can't reply fast enough to catch it, Impulse is the
              difference between a comment and a customer.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            {[
              {
                t: 'Solo founders',
                d: 'You can\'t watch comments all day. Impulse answers the moment intent shows up, so you never lose a buyer to a slow reply.',
              },
              {
                t: 'D2C & product brands',
                d: 'When a post or reel takes off, Impulse turns the wave of "where do I buy this?" into orders instead of unanswered comments.',
              },
              {
                t: 'Small in-house teams',
                d: 'Let Impulse handle the instant first response at scale, and your team steps in only for the conversations that need a human.',
              },
            ].map((c, i) => (
              <ScrollReveal key={c.t} direction="up" delay={i * 80} distance={28}>
                <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-2 hover:shadow-glow">
                  <h3 className="text-base font-bold text-slate-900">{c.t}</h3>
                  <p className="mt-2 text-sm text-slate-600">{c.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-12">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Impulse questions</h2>
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
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { href: '/product/content-calendar', t: 'Content Calendar', d: 'Plan the posts that drive the demand — then let Impulse convert it in the comments.' },
              { href: '/solutions/founders', t: 'For founders', d: 'You\'re the founder and the marketing team. See how Trendly runs marketing without hiring.' },
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
