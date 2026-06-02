import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ToolFAQ from '@/components/tools/ToolFAQ';
import ToolCrossSell from '@/components/tools/ToolCrossSell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Best Time to Post on Social Media (2026 Guide) — Trendly',
  description:
    'General best-time-to-post benchmarks for Instagram, TikTok, LinkedIn and X. Use these as a starting point, then let your own analytics reveal when your audience is really online.',
  alternates: { canonical: '/tools/best-time-to-post' },
};

const faqs = [
  {
    q: 'When is the best time to post on social media?',
    a: 'As a general rule, mid-morning to early afternoon on weekdays performs well across most platforms. But the single best answer is your own analytics — the times your specific audience is most active will always beat any generic benchmark.',
  },
  {
    q: 'Are these best-posting-time benchmarks exact?',
    a: 'No. They are general, widely-cited starting points, not precise guarantees. Time zones, niche, audience habits, and content type all shift the ideal window. Treat them as a hypothesis to test, not a rule.',
  },
  {
    q: 'How do I find the best time to post for my own audience?',
    a: 'Check the built-in analytics on each platform to see when your followers are online, then experiment by posting similar content at different times and comparing reach and engagement. Trendly surfaces these audience-active windows and schedules posts into them automatically.',
  },
];

type Row = {
  platform: string;
  weekdays: string;
  bestDays: string;
  note: string;
};

const rows: Row[] = [
  {
    platform: 'Instagram',
    weekdays: '11am – 2pm',
    bestDays: 'Tue – Thu',
    note: 'Lunch breaks and early evenings tend to see strong feed and Reels activity.',
  },
  {
    platform: 'TikTok',
    weekdays: '6am – 10am & 7pm – 11pm',
    bestDays: 'Tue, Thu, Fri',
    note: 'Early mornings and late evenings catch viewers in passive-scroll mode.',
  },
  {
    platform: 'LinkedIn',
    weekdays: '8am – 11am',
    bestDays: 'Tue – Thu',
    note: 'Business hours mid-week; avoid weekends when professional usage drops.',
  },
  {
    platform: 'X (Twitter)',
    weekdays: '9am – 12pm',
    bestDays: 'Mon – Fri',
    note: 'Late morning on weekdays aligns with news and commute browsing.',
  },
];

export default function BestTimeToPostPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Tools', path: '/tools' },
            { name: 'Best Time to Post', path: '/tools/best-time-to-post' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Free Guide"
        title="Best Time to Post on Social Media"
        highlight="Best Time to Post"
        subtitle="General benchmarks for Instagram, TikTok, LinkedIn and X — a solid starting point you can test against your own audience's data."
      />

      {/* ── Reference table ── */}
      <section className="pb-6">
        <div className="container-px">
          <div className="mx-auto max-w-4xl">
            <div className="overflow-x-auto rounded-3xl border border-slate-200 bg-white">
              <table className="w-full min-w-[680px] text-sm">
                <thead className="bg-slate-50">
                  <tr className="text-left">
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Platform</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">General best window (weekdays)</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">Strongest days</th>
                    <th className="px-5 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.map((r) => (
                    <tr key={r.platform} className="hover:bg-brand-50/30">
                      <td className="px-5 py-4 font-bold text-slate-800">{r.platform}</td>
                      <td className="px-5 py-4 text-slate-600">{r.weekdays}</td>
                      <td className="px-5 py-4 font-semibold text-brand-700">{r.bestDays}</td>
                      <td className="px-5 py-4 text-slate-500">{r.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <p className="text-sm leading-relaxed text-amber-900">
                <strong>These are general benchmarks, not exact rules.</strong> They&apos;re
                widely-cited starting points drawn from common industry observations — not
                Trendly-specific data. The only reliable way to know the best time to post is your
                own analytics: the windows when your specific audience is actually online will always
                beat any generic chart. Use the table as a hypothesis, then test and adjust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ToolCrossSell
        headline="Post when your audience is actually online"
        body="Generic benchmarks are a starting point. Trendly reads your audience-active windows and schedules each post into them automatically — so you stop guessing and start posting at your best times."
      />

      {/* ── SEO supporting copy ── */}
      <section className="py-12">
        <div className="container-px">
          <div className="mx-auto max-w-3xl prose-content">
            <h2>What &quot;the best time to post on social media&quot; really means</h2>
            <p>
              Search for the best time to post and you&apos;ll find a hundred confident,
              contradictory charts. The truth is simpler and a little less convenient: there is no
              universal best time. Posting timing matters because most platforms give a new post its
              biggest push in the first 30 to 60 minutes — if your audience is awake and scrolling
              then, that early engagement signals quality and the algorithm extends your reach. So
              the goal isn&apos;t to hit a magic hour; it&apos;s to publish when your particular
              followers are most likely to be online and active.
            </p>

            <h2>How to use these benchmarks</h2>
            <p>
              The table above is a sensible place to start before you have your own data. Mid-morning
              to early afternoon on Tuesday through Thursday is a reliable default across most
              platforms, with TikTok skewing earlier and later and LinkedIn concentrated in business
              hours. Pick the window for your main platform, schedule a few weeks of posts into it,
              and treat it as a baseline experiment rather than a finish line.
            </p>

            <h2>Find your real best time with your own analytics</h2>
            <p>
              Once you&apos;ve posted consistently for a few weeks, your own data becomes far more
              useful than any benchmark. Every major platform shows when your followers are online —
              start there. Then run small tests: post comparable content at different times and
              compare reach, saves, and engagement rate (not just raw likes). Account for your
              audience&apos;s time zones, especially if you sell across regions. Over time you&apos;ll
              converge on two or three windows that consistently outperform, and those become your
              defaults. Pair good timing with a consistent cadence using our{' '}
              <Link href="/tools/social-media-calendar-template">content calendar template</Link>, and
              make sure each post opens strong with a sharp{' '}
              <Link href="/tools/hook-generator">hook</Link>.
            </p>

            <h2>Timing is one lever — consistency is the bigger one</h2>
            <p>
              It&apos;s worth keeping perspective: posting at a slightly better time helps, but
              posting consistently with content people genuinely want helps far more. Don&apos;t let
              the hunt for a perfect hour stop you from publishing. Nail your{' '}
              <Link href="/tools/content-idea-generator">content ideas</Link> and{' '}
              <Link href="/tools/instagram-caption-generator">captions</Link> first, ship reliably,
              then optimise timing once you have data. When you&apos;d rather not manage all of this
              by hand, <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP}>Trendly</a> identifies your audience-active
              windows and schedules every post into them for you.
            </p>
          </div>
        </div>
      </section>

      <ToolFAQ faqs={faqs} />
      <CTA />
    </PageShell>
  );
}
