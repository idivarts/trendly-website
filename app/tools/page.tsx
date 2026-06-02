import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema } from '@/components/JsonLd';
import { LINKS } from '@/lib/site-config';

export const metadata = {
  title: 'Free Social Media Tools — AI Generators & Templates | Trendly',
  description:
    'Free social media tools from Trendly: AI Instagram caption generator, content idea generator, hook generator, a content calendar template, and best-time-to-post guidance. No signup required.',
  alternates: { canonical: '/tools' },
};

type Tool = {
  href: string;
  name: string;
  desc: string;
  tag: string;
  gradient: string;
};

const tools: Tool[] = [
  {
    href: '/tools/instagram-caption-generator',
    name: 'Instagram Caption Generator',
    desc: 'Turn any topic into scroll-stopping captions with the right tone and hashtags.',
    tag: 'AI',
    gradient: 'from-brand-500 to-accent-500',
  },
  {
    href: '/tools/content-idea-generator',
    name: 'Content Idea Generator',
    desc: 'Never stare at a blank calendar again. Get fresh post ideas for your niche and goal.',
    tag: 'AI',
    gradient: 'from-violet-500 to-brand-500',
  },
  {
    href: '/tools/hook-generator',
    name: 'Hook Generator',
    desc: 'Write the first line that stops the scroll — hooks tuned per platform.',
    tag: 'AI',
    gradient: 'from-accent-500 to-emerald-400',
  },
  {
    href: '/tools/social-media-calendar-template',
    name: 'Social Media Calendar Template',
    desc: 'A ready-to-use weekly and monthly content calendar you can copy in seconds.',
    tag: 'Template',
    gradient: 'from-amber-400 to-orange-500',
  },
  {
    href: '/tools/best-time-to-post',
    name: 'Best Time to Post',
    desc: 'General benchmarks for when to post on Instagram, TikTok, LinkedIn and X.',
    tag: 'Guide',
    gradient: 'from-pink-500 to-rose-500',
  },
];

export default function ToolsHubPage() {
  return (
    <PageShell>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', path: '/' },
          { name: 'Free Tools', path: '/tools' },
        ])}
      />

      <PageHero
        eyebrow="Free Tools"
        title="Free social media tools for founders and small teams"
        highlight="social media tools"
        subtitle="A growing kit of free AI generators and templates to plan, write, and ship better social content. No signup, no credit card — just useful tools."
      />

      {/* ── Tool grid ── */}
      <section className="pb-8">
        <div className="container-px">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {tools.map((t, i) => (
              <ScrollReveal key={t.href} delay={i * 70}>
                <Link
                  href={t.href}
                  className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
                >
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br ${t.gradient} text-white shadow-soft`}
                    >
                      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 3v4M3 5h4M6 17v4M4 19h4M13 3l2.5 6.5L22 12l-6.5 2.5L13 21l-2.5-6.5L4 12l6.5-2.5L13 3z" />
                      </svg>
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                      {t.tag}
                    </span>
                  </div>

                  <h2 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-brand-700">
                    {t.name}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{t.desc}</p>

                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-600">
                    Open tool
                    <svg className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Supporting copy ── */}
      <section className="py-16">
        <div className="container-px">
          <div className="mx-auto max-w-3xl prose-content">
            <h2>Free social media tools that actually save you time</h2>
            <p>
              Running marketing as a founder or a two-person team means wearing every hat —
              strategist, copywriter, designer, and scheduler — usually before lunch. These free
              social media tools take the most repetitive parts off your plate so you can spend
              your energy on the work only you can do. Each tool is free to use, requires no
              account, and is built on the same AI that powers the Trendly workspace.
            </p>
            <p>
              Use the <Link href="/tools/instagram-caption-generator">Instagram caption generator</Link>{' '}
              to draft captions in seconds, the{' '}
              <Link href="/tools/content-idea-generator">content idea generator</Link> when your
              calendar is empty, and the{' '}
              <Link href="/tools/hook-generator">hook generator</Link> to nail the first line that
              stops the scroll. Need structure instead of words? Grab the{' '}
              <Link href="/tools/social-media-calendar-template">social media calendar template</Link>{' '}
              and check the{' '}
              <Link href="/tools/best-time-to-post">best time to post</Link> reference before you
              schedule.
            </p>
            <h2>Do it once here — or do it for every post in Trendly</h2>
            <p>
              These tools are great for one-off drafts. But great marketing is consistent
              marketing, and copy-pasting from a free tool every day doesn&apos;t scale. Inside{' '}
              <a href={LINKS.BRAND_SIGNUP}>Trendly</a>, the same AI builds your full content
              strategy, generates captions and hooks for every planned post, and drops them
              straight onto a visual calendar your whole team can approve and schedule — all in one
              place. Start with a free tool here, then bring the whole workflow into Trendly when
              you&apos;re ready to move faster.
            </p>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
