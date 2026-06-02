import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ToolFAQ from '@/components/tools/ToolFAQ';
import ToolCrossSell from '@/components/tools/ToolCrossSell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS } from '@/lib/site-config';

export const metadata = {
  title: 'Free Social Media Calendar Template — Trendly',
  description:
    'A free, ready-to-use social media calendar template. Copy the weekly and monthly content planning structure to organise posts, channels, and themes. No download needed.',
  alternates: { canonical: '/tools/social-media-calendar-template' },
};

const faqs = [
  {
    q: 'How do I use this social media calendar template?',
    a: 'Copy the weekly grid into your own spreadsheet or doc, then fill each cell with the post format, channel, hook, and caption for that day. The monthly view helps you balance content themes across weeks.',
  },
  {
    q: 'What should go in a social media content calendar?',
    a: 'At a minimum: the date, channel, content format (reel, carousel, story, post), the topic or theme, the hook, the caption, and the status (idea, drafted, scheduled, published). Adding the goal of each post keeps your plan intentional.',
  },
  {
    q: 'Is there a live version I can plan and schedule from?',
    a: 'Yes. Trendly turns this static structure into a live visual calendar where AI fills in the content, your team approves it, and posts get scheduled — all in one place.',
  },
];

const weekdays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const weekPlan: Record<string, { format: string; theme: string }> = {
  Mon: { format: 'Carousel', theme: 'Educational / how-to' },
  Tue: { format: 'Reel', theme: 'Trend or hook-led' },
  Wed: { format: 'Story', theme: 'Behind the scenes' },
  Thu: { format: 'Single post', theme: 'Social proof / UGC' },
  Fri: { format: 'Reel', theme: 'Entertaining / relatable' },
  Sat: { format: 'Story', theme: 'Poll / Q&A' },
  Sun: { format: 'Single post', theme: 'Offer / CTA' },
};

const months = [
  { week: 'Week 1', focus: 'Awareness', pillar: 'Educate — teach your audience something useful' },
  { week: 'Week 2', focus: 'Engagement', pillar: 'Connect — stories, polls, behind the scenes' },
  { week: 'Week 3', focus: 'Trust', pillar: 'Prove — testimonials, results, UGC, case studies' },
  { week: 'Week 4', focus: 'Conversion', pillar: 'Convert — offers, launches, clear CTAs' },
];

export default function CalendarTemplatePage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Tools', path: '/tools' },
            { name: 'Social Media Calendar Template', path: '/tools/social-media-calendar-template' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Free Template"
        title="Social Media Calendar Template"
        highlight="Calendar Template"
        subtitle="A ready-to-use weekly and monthly content calendar. Copy the structure, fill in your posts, and never wonder what to publish next."
      />

      {/* ── Weekly template ── */}
      <section className="pb-6">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <h2 className="h-display text-2xl sm:text-3xl">Weekly content calendar</h2>
            <p className="mt-2 text-slate-600">
              A balanced 7-day posting rhythm. Each day pairs a format with a content theme so your
              feed stays varied. Swap formats to fit your brand.
            </p>

            <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Day</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Format</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Content theme</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">Your post idea</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {weekdays.map((d) => (
                    <tr key={d} className="hover:bg-brand-50/30">
                      <td className="px-5 py-3 font-bold text-slate-800">{d}</td>
                      <td className="px-5 py-3 text-slate-600">{weekPlan[d].format}</td>
                      <td className="px-5 py-3 text-slate-600">{weekPlan[d].theme}</td>
                      <td className="px-5 py-3 text-slate-400">Fill in…</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Monthly template ── */}
      <section className="pb-6">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <h2 className="h-display text-2xl sm:text-3xl">Monthly content calendar</h2>
            <p className="mt-2 text-slate-600">
              Give each week a focus so your month moves an audience from discovering you to buying
              from you — the classic awareness → engagement → trust → conversion arc.
            </p>

            <div className="mt-6 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-[640px] text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Week</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Focus</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Content pillar</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {months.map((m) => (
                    <tr key={m.week} className="hover:bg-brand-50/30">
                      <td className="px-5 py-3 font-bold text-slate-800">{m.week}</td>
                      <td className="px-5 py-3 font-semibold text-brand-700">{m.focus}</td>
                      <td className="px-5 py-3 text-slate-600">{m.pillar}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* ── Copy-the-structure / what's inside ── */}
      <section className="pb-6">
        <div className="container-px">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">What&apos;s inside</h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-600">
                {[
                  'A balanced 7-day weekly posting rhythm',
                  'A 4-week monthly arc (awareness → conversion)',
                  'Format + theme suggestions for every slot',
                  'A column structure you can copy into any spreadsheet',
                  'A status workflow: idea → drafted → scheduled → published',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <svg className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6">
              <h3 className="text-lg font-bold text-slate-900">Copy this column structure</h3>
              <p className="mt-3 text-sm text-slate-600">
                Recreate these columns in your spreadsheet or doc — they&apos;re all you need to run a
                content calendar:
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {['Date', 'Channel', 'Format', 'Theme / Pillar', 'Hook', 'Caption', 'Asset link', 'Goal', 'Status'].map((col) => (
                  <span key={col} className="rounded-lg border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-semibold text-slate-700">
                    {col}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Live version CTA ── */}
      <section className="py-10">
        <div className="container-px">
          <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600 p-8 text-white shadow-glow sm:p-10">
            <h2 className="h-display text-2xl text-white sm:text-3xl">Get the live version in Trendly</h2>
            <p className="mt-3 max-w-2xl text-white/85">
              A spreadsheet is a great start, but it can&apos;t draft your posts, approve them, or
              publish them. In Trendly, this template becomes a living visual calendar: AI fills in
              the ideas, hooks, and captions, your team approves with a click, and posts schedule
              themselves. Same structure — zero copy-pasting.
            </p>
            <a
              href={LINKS.BRAND_SIGNUP}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
            >
              Build it live in Trendly — free
            </a>
          </div>
        </div>
      </section>

      {/* ── SEO supporting copy ── */}
      <section className="py-10">
        <div className="container-px">
          <div className="mx-auto max-w-3xl prose-content">
            <h2>Why you need a social media calendar template</h2>
            <p>
              Posting whenever inspiration strikes is the fastest way to post inconsistently — and
              inconsistency is what kills most small-brand social accounts. A social media calendar
              template fixes that by turning &quot;what should I post?&quot; into a decision you make
              once a week or once a month, in batch, instead of a daily scramble. It gives your
              content a shape: a rhythm of formats, a balance of themes, and a clear path from idea
              to published post.
            </p>

            <h2>How to fill in the template</h2>
            <p>
              Start with the monthly view and assign each week a focus, so your content intentionally
              moves people from discovering you toward buying from you. Then drop into the weekly
              grid and assign a format and theme to each day — the suggestions above are a proven
              starting point you can adapt. For each slot, write a{' '}
              <Link href="/tools/hook-generator">hook</Link>, draft a{' '}
              <Link href="/tools/instagram-caption-generator">caption</Link>, and note the channel and
              goal. Use the status column to track each post from idea to published so nothing slips.
              Stuck for what to make? Run a batch through the{' '}
              <Link href="/tools/content-idea-generator">content idea generator</Link> first.
            </p>

            <h2>Batch, schedule, and stay consistent</h2>
            <p>
              The real power of a calendar is batching. Set aside an hour to plan and draft a week
              (or month) of posts at once, then schedule them to go out at the{' '}
              <Link href="/tools/best-time-to-post">best times for your audience</Link>. Batching
              protects your consistency on busy weeks and frees your day-to-day attention for the
              rest of the business. When the spreadsheet starts to feel like overhead,{' '}
              <a href={LINKS.BRAND_SIGNUP}>Trendly</a> turns this exact structure into a calendar
              that plans, drafts, approves, and schedules for you.
            </p>
          </div>
        </div>
      </section>

      <ToolCrossSell
        headline="Plan, approve, and schedule in one place"
        body="Trendly takes this template live — AI fills your calendar with on-brand posts, your team approves them, and scheduling happens automatically across every channel."
      />

      <ToolFAQ faqs={faqs} />
      <CTA />
    </PageShell>
  );
}
