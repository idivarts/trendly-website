import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ToolRunner from '@/components/tools/ToolRunner';
import ToolFAQ from '@/components/tools/ToolFAQ';
import ToolCrossSell from '@/components/tools/ToolCrossSell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Free Social Media Content Idea Generator (AI) — Trendly',
  description:
    'Beat creative block with our free AI social media content idea generator. Get fresh post ideas tailored to your niche, platform, and goal in seconds. No signup required.',
  alternates: { canonical: '/tools/content-idea-generator' },
};

const faqs = [
  {
    q: 'What is a social media content idea generator?',
    a: 'It is a free AI tool that suggests post ideas based on your niche, platform, and goal. Instead of staring at a blank calendar, you get a list of specific, ready-to-develop content angles in seconds.',
  },
  {
    q: 'How many content ideas can I generate?',
    a: 'As many as you like — it is free with no account or limit shown here. Regenerate as often as you need until you find angles that fit your brand.',
  },
  {
    q: 'How do I turn an idea into a finished post?',
    a: 'Pick an idea, write a hook for it (try our hook generator), draft a caption (try our caption generator), and slot it onto your calendar. Trendly can do all of these steps for you automatically.',
  },
];

export default function ContentIdeaGeneratorPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Tools', path: '/tools' },
            { name: 'Content Idea Generator', path: '/tools/content-idea-generator' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Free AI Tool"
        title="Social Media Content Idea Generator"
        highlight="Content Idea Generator"
        subtitle="Never stare at an empty calendar again. Get fresh, specific post ideas for your niche, platform, and goal — free, no signup."
      />

      <section className="pb-4">
        <div className="container-px">
          <div className="mx-auto max-w-2xl">
            <ToolRunner
              tool="content-idea"
              cta="Generate ideas"
              fields={[
                {
                  name: 'niche',
                  label: 'Your niche or industry',
                  type: 'text',
                  placeholder: 'e.g. sustainable skincare for sensitive skin',
                },
                {
                  name: 'platform',
                  label: 'Platform',
                  type: 'select',
                  options: ['Instagram', 'TikTok', 'LinkedIn', 'X'],
                  required: false,
                },
                {
                  name: 'goal',
                  label: 'Goal',
                  type: 'select',
                  options: ['Awareness', 'Engagement', 'Sales'],
                  required: false,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ToolCrossSell
        headline="Get a full content plan, not just one idea"
        body="This tool sparks ideas on demand. Trendly's AI strategy engine builds a complete, goal-aligned content calendar for your brand — themes, formats, and posts mapped across the month — so you always know what to publish next."
      />

      {/* ── SEO supporting copy ── */}
      <section className="py-12">
        <div className="container-px">
          <div className="mx-auto max-w-3xl prose-content">
            <h2>A free social media content idea generator for every niche</h2>
            <p>
              The hardest part of social media isn&apos;t posting — it&apos;s deciding what to post.
              Creative block is real, and it hits hardest when you&apos;re a founder juggling a
              dozen priorities. This free social media content idea generator gives you a running
              start: enter your niche, choose your platform and goal, and get a list of specific
              content angles you can actually build a post around. No vague &quot;post a tip&quot;
              suggestions — real ideas tailored to what you do.
            </p>

            <h2>How to use the content idea generator</h2>
            <p>
              Start by describing your niche as precisely as you can. &quot;Skincare&quot; works,
              but &quot;sustainable skincare for sensitive skin&quot; produces far sharper,
              on-brand ideas. Next, pick the platform you&apos;re creating for — content that
              thrives on TikTok looks different from a LinkedIn post or an X thread. Finally, choose
              a goal: Awareness to reach new people, Engagement to deepen your community, or Sales to
              drive action. Generate, skim the list, and keep the angles that fit. Regenerate as
              often as you need to fill a week — or a month — of content.
            </p>

            <h2>Turn ideas into a consistent posting habit</h2>
            <p>
              Ideas only matter if they ship. Once you have a shortlist, batch them: group similar
              ideas, decide on formats, and slot them onto a calendar so you&apos;re never scrambling
              the morning of. Mix content types so your feed stays interesting — educational posts,
              behind-the-scenes, social proof, and the occasional offer. Lead each post with a strong{' '}
              <Link href="/tools/hook-generator">hook</Link>, write the{' '}
              <Link href="/tools/instagram-caption-generator">caption</Link>, and plan around the{' '}
              <Link href="/tools/best-time-to-post">best times to post</Link>. Our free{' '}
              <Link href="/tools/social-media-calendar-template">content calendar template</Link>{' '}
              gives you a structure to drop everything into.
            </p>

            <h2>Why a steady idea pipeline matters</h2>
            <p>
              Consistency is the single biggest predictor of social media growth for small brands —
              and consistency depends on never running out of things to say. A reliable idea pipeline
              keeps you posting through busy weeks, protects your reach, and compounds your audience
              over time. When generating ideas one batch at a time starts to feel like a chore,{' '}
              <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP}>Trendly</a> automates the whole loop — from strategy to
              ideas to scheduled posts — so the calendar stays full without the manual grind.
            </p>
          </div>
        </div>
      </section>

      <ToolFAQ faqs={faqs} />
      <CTA />
    </PageShell>
  );
}
