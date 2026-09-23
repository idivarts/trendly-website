import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, softwareApplicationSchema, faqSchema } from '@/components/JsonLd';
import { SocialIcon } from '@/components/SocialIcons';
import { LINKS, PROOF, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Product — The AI Social Media Platform for Founders & Teams — Trendly',
  description:
    'Trendly walks you through the full flow: chat with every top AI model to build a strategy, turn it into a team-approved content calendar, activate vetted creators, and convert comments into sales with Impulse — all in one workspace.',
};

const faqs = [
  {
    q: 'Which AI models can I use inside Trendly?',
    a: 'Every top model lives in one workspace — GPT (OpenAI), Claude (Anthropic), and Gemini (Google) — so you never tab-switch between AI subscriptions. Trendly routes each task to the model that does it best: Claude for strategy and research, GPT for copy and captions, Gemini for visuals.',
  },
  {
    q: 'Can I schedule to all my platforms from one place?',
    a: 'Yes. Plan and schedule across Instagram, TikTok, LinkedIn, and X from a single calendar, with AI-suggested captions, hashtags, and post times. A multi-channel week stays coordinated instead of scattered across four separate apps.',
  },
  {
    q: 'Do I have to use the creator feature?',
    a: 'No — it is there when organic alone is not enough. Strategy, calendar, and scheduling work fully on their own. When you want to amplify, you can activate vetted creators from the same workspace, brief them straight from a calendar slot, and pay only after content is approved and live.',
  },
  {
    q: 'How does Impulse turn comments into sales?',
    a: 'When a follower comments "Interested" or DMs your post, Impulse detects the buying intent in real time and instantly replies with the right product link, then nurtures the conversation toward checkout — so warm interest converts in the moment instead of cooling off while you are away.',
  },
  {
    q: 'Is my data private?',
    a: 'Your content, strategy, and audience data are yours. We never sell your data or use it to train public models, and you control which accounts are connected and which posts automations like Impulse can act on. You can disconnect an account or revoke access at any time.',
  },
];

// ── Feature 1: strategy pillars + cadence mock ──
const pillars = [
  { label: 'Education', posts: '4× / wk', color: 'border-brand-200 bg-brand-50', textColor: 'text-brand-700', dotColor: 'bg-brand-500' },
  { label: 'Authenticity', posts: '3× / wk', color: 'border-accent-200 bg-accent-400/10', textColor: 'text-accent-600', dotColor: 'bg-accent-500' },
  { label: 'Product', posts: '2× / wk', color: 'border-emerald-200 bg-emerald-50', textColor: 'text-emerald-700', dotColor: 'bg-emerald-500' },
  { label: 'Community', posts: '2× / wk', color: 'border-violet-200 bg-violet-50', textColor: 'text-violet-700', dotColor: 'bg-violet-500' },
];
const cadence = [
  { short: 'IG', freq: '5/wk' },
  { short: 'TT', freq: '3/wk' },
  { short: 'LI', freq: '2/wk' },
  { short: 'X', freq: '2/wk' },
];

// ── Feature 2: mini week calendar ──
const calDays: { d: string; platform: 'instagram' | 'tiktok' | 'linkedin' | 'x'; type: string; status: string; statusColor: string }[] = [
  { d: 'Mon', platform: 'instagram', type: 'Reel', status: 'Live', statusColor: 'bg-emerald-500' },
  { d: 'Tue', platform: 'tiktok', type: 'Video', status: 'Draft', statusColor: 'bg-slate-300' },
  { d: 'Wed', platform: 'linkedin', type: 'Article', status: 'Review', statusColor: 'bg-amber-400' },
  { d: 'Thu', platform: 'x', type: 'Thread', status: 'Sched', statusColor: 'bg-brand-500' },
  { d: 'Fri', platform: 'instagram', type: 'Story', status: 'Sched', statusColor: 'bg-brand-500' },
];

// ── Feature 3: creator cards ──
const creators = [
  { name: 'Jamie Lee', tag: 'Wellness', f: '41k', er: '6.2%', g: 'from-pink-400 to-rose-500' },
  { name: 'Marcus Reid', tag: 'Fitness', f: '58k', er: '5.1%', g: 'from-emerald-400 to-teal-500' },
  { name: 'Priya Nair', tag: 'Beauty', f: '29k', er: '7.4%', g: 'from-amber-400 to-orange-500' },
  { name: 'Alex Torres', tag: 'Lifestyle', f: '63k', er: '4.8%', g: 'from-sky-400 to-indigo-500' },
];

/** Small bullet-check list shared across feature blocks. */
function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 space-y-3">
      {items.map((b, bi) => (
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
  );
}

export default function ProductPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Product', path: '/product' },
          ]),
          softwareApplicationSchema(),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Product"
        title="The AI social media platform for founders & teams"
        highlight="AI social media platform"
        subtitle="One workspace for the whole flow: chat with every top AI model to build a strategy, turn it into a team-approved calendar, activate vetted creators when you need reach, and convert comments into sales — automatically."
      />

      {/* ── Under-hero CTA row (respects kill-switch) ── */}
      <section className="-mt-4 pb-4">
        <div className="container-px flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-3">
            {DISABLE_LOGIN_SIGNUP ? (
              <a href={LINKS.BOOK_DEMO} className="btn-primary">Book a demo</a>
            ) : (
              <>
                <a href={LINKS.BRAND_SIGNUP} className="btn-primary">Start for free</a>
                <a href={LINKS.BOOK_DEMO} className="btn-ghost">Book a Demo</a>
              </>
            )}
          </div>
          <p className="mt-3 text-xs font-medium text-slate-500">{PROOF.riskReversal}</p>
        </div>
      </section>

      {/* ───────── Feature 1 · AI Strategy Engine ───────── */}
      <section className="py-16 sm:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left" distance={36}>
            <div>
              <span className="section-eyebrow">01 · AI Strategy Engine</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                From a blank page to a{' '}
                <span className="text-gradient-animated">real plan</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Chat with every top AI model in one place — Claude for strategy, GPT for copy, Gemini
                for visuals. Trendly studies your brand, audience, and competitors, then hands back
                content pillars and a posting cadence per channel — ready to push into your calendar.
              </p>
              <Bullets
                items={[
                  'Every top AI model in one place — no tab-switching between subscriptions',
                  'Content pillars + a balanced posting mix per channel',
                  'Push the whole plan into your calendar in one click',
                ]}
              />
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
                  Strategy · AI-generated for your brand
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
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Recommended cadence</div>
                  <div className="mt-2 flex gap-1">
                    {cadence.map((c) => (
                      <div key={c.short} className="flex-1 rounded-xl bg-slate-50 p-2 text-center">
                        <div className="text-[10px] font-extrabold text-slate-700">{c.short}</div>
                        <div className="mt-0.5 text-[9px] text-slate-400">{c.freq}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────── Feature 2 · Content Calendar ───────── */}
      <section className="py-16 sm:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          {/* Calendar visual (left on desktop) */}
          <ScrollReveal direction="left" distance={36} className="order-2 lg:order-1">
            <div className="aspect-[5/4]">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-accent-400/10 to-white p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Week of May 19</span>
                  <span className="rounded-full border border-brand-100 bg-brand-50 px-2 py-0.5 text-[10px] font-bold text-brand-700">8 posts</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {calDays.map((p, i) => (
                    <div key={p.d}>
                      <div className="mb-1.5 text-center text-[10px] font-bold uppercase tracking-wider text-slate-400">{p.d}</div>
                      <div
                        className="rounded-xl border border-slate-100 bg-white p-1.5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                        style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${i * 70}ms` }}
                      >
                        <SocialIcon platform={p.platform} size={18} />
                        <div className="mt-1 text-[9px] font-semibold text-slate-700">{p.type}</div>
                        <div className="mt-1 flex items-center gap-1">
                          <span className={`h-1.5 w-1.5 rounded-full ${p.statusColor}`} />
                          <span className="text-[8px] text-slate-400">{p.status}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                  <div className="flex -space-x-2">
                    {['from-pink-400 to-rose-500', 'from-sky-400 to-indigo-500', 'from-emerald-400 to-teal-500'].map((g, i) => (
                      <div key={i} className={`h-6 w-6 rounded-full border-2 border-white bg-gradient-to-br ${g}`} />
                    ))}
                  </div>
                  <span className="text-[10px] font-semibold text-slate-500">2 awaiting review</span>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[10px] font-bold text-amber-700">Review</span>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={36} delay={80} className="order-1 lg:order-2">
            <div>
              <span className="section-eyebrow">02 · Content Calendar</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                One calendar your{' '}
                <span className="text-gradient-animated">whole team runs</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Turn the plan into a scheduled, team-approved calendar across Instagram, TikTok,
                LinkedIn, and X. Generate AI captions on every post, review together, edit by hand or
                with AI, then approve — nothing publishes until the right person signs off.
              </p>
              <Bullets
                items={[
                  'Schedule to every platform from one shared workspace',
                  'AI captions, hashtags & post times on each slot',
                  'Generate → review → edit → approve, in context',
                ]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────── Feature 3 · Creator Campaigns ───────── */}
      <section className="py-16 sm:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          <ScrollReveal direction="left" distance={36}>
            <div>
              <span className="section-eyebrow">03 · Creator Campaigns</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                When organic isn&apos;t enough,{' '}
                <span className="text-gradient-animated">activate creators</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Tap into a network of {PROOF.creators} creators, filter by niche, platform, and
                engagement, and brief them straight from a calendar slot. Review deliverables with
                your team and pay only after content is approved and live.
              </p>
              <Bullets
                items={[
                  `Lean on the team's ${PROOF.creators} creator network`,
                  'Brief creators from the same calendar you plan in',
                  'Pay on approval — funds held until content is live',
                ]}
              />
            </div>
          </ScrollReveal>

          {/* Creator cards visual */}
          <ScrollReveal direction="right" distance={36} delay={80}>
            <div className="aspect-[5/4]">
              <div className="relative h-full w-full overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-brand-50 to-white p-6">
                <div className="grid grid-cols-2 gap-3">
                  {creators.map((c, i) => (
                    <div
                      key={c.name}
                      className="rounded-2xl border border-slate-100 bg-white p-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-100 hover:shadow-md"
                      style={{ animation: 'fade-up 0.5s cubic-bezier(0.16,1,0.3,1) both', animationDelay: `${i * 80}ms` }}
                    >
                      <div className={`h-14 w-full rounded-xl bg-gradient-to-br ${c.g}`} />
                      <div className="mt-2.5 text-sm font-semibold text-slate-900">{c.name}</div>
                      <div className="flex items-center justify-between text-xs text-slate-500">
                        <span>{c.tag}</span>
                        <span className="font-semibold text-brand-700">{c.f}</span>
                      </div>
                      <div className="mt-1 text-[10px] text-emerald-600">{c.er} engagement</div>
                    </div>
                  ))}
                </div>
                <div className="absolute -bottom-4 -right-4 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-soft">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500">Filters applied</div>
                  <div className="mt-1 flex gap-1">
                    <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">Wellness</span>
                    <span className="rounded-full bg-brand-100 px-2 py-0.5 text-xs font-semibold text-brand-700">20–70k</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────── Feature 4 · Impulse ───────── */}
      <section className="py-16 sm:py-24">
        <div className="container-px grid items-center gap-12 lg:grid-cols-2">
          {/* Chat mock visual (left on desktop) */}
          <ScrollReveal direction="left" distance={36} className="order-2 lg:order-1">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-2xl bg-gradient-brand opacity-25 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-2xl bg-accent-400 opacity-20 blur-2xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">your_brand</div>
                    <div className="text-[10px] text-slate-400">New Reel · 2,418 likes</div>
                  </div>
                  <span className="ml-auto rounded-full border border-brand-100 bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700">
                    Impulse on
                  </span>
                </div>
                <div className="mt-4 space-y-3">
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
                      😍 Obsessed! How much &amp; where do I get it?
                    </div>
                  </div>
                  <div className="flex items-end gap-2">
                    <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
                      </svg>
                    </div>
                    <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-gradient-to-br from-brand-600 to-brand-700 px-3.5 py-2 text-sm text-white shadow-glow">
                      Hi! It&apos;s $48 and ships free. Grab it here 👉 <span className="underline">trendly.now/shop/hero</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-1.5 pl-8 text-[10px] font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Sent automatically · 3s after comment
                  </div>
                  <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-2.5">
                    <span className="text-xs font-semibold text-emerald-700">✅ Order placed — $48</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Converted</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={36} delay={80} className="order-1 lg:order-2">
            <div>
              <span className="section-eyebrow">04 · Impulse — comment-to-cart</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                Turn comments into{' '}
                <span className="text-gradient-animated">customers</span>
              </h2>
              <p className="mt-4 text-slate-600">
                When a follower comments &ldquo;Interested&rdquo; or DMs your post, Impulse catches the
                buying intent instantly and replies with the exact buy link — then nurtures the
                conversation to checkout, before the moment passes.
              </p>
              <Bullets
                items={[
                  'Detects real buying intent on comments & DMs',
                  'Replies in seconds with the right product link',
                  'On-brand by default — you set the rules and tone',
                ]}
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="py-16 sm:py-24">
        <div className="container-px mx-auto max-w-3xl">
          <ScrollReveal className="text-center">
            <span className="section-eyebrow">FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">
              Questions about the{' '}
              <span className="text-gradient-animated">platform</span>
            </h2>
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

      <CTA />
    </PageShell>
  );
}
