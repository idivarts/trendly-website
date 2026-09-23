import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ToolRunner from '@/components/tools/ToolRunner';
import ToolFAQ from '@/components/tools/ToolFAQ';
import ToolCrossSell from '@/components/tools/ToolCrossSell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Free Instagram Caption Generator (AI) — Trendly',
  description:
    'Generate scroll-stopping Instagram captions in seconds with our free AI Instagram caption generator. Pick a tone, add keywords, and get ready-to-post captions. No signup.',
  alternates: { canonical: '/tools/instagram-caption-generator' },
};

const faqs = [
  {
    q: 'Is this Instagram caption generator really free?',
    a: 'Yes. You can generate Instagram captions for free with no account and no credit card. It runs on the same AI that powers the Trendly marketing workspace.',
  },
  {
    q: 'How do I write a good Instagram caption?',
    a: 'Lead with a strong hook, keep it scannable, add value or a story, and end with a clear call to action. Then add 3–5 relevant hashtags. This generator handles the structure for you — just describe your post and pick a tone.',
  },
  {
    q: 'Can I use these captions for business and brand accounts?',
    a: 'Absolutely. Choose the Professional or Bold tone for brand voice, add your product keywords, and edit the output to match your style before posting.',
  },
];

export default function InstagramCaptionGeneratorPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Tools', path: '/tools' },
            { name: 'Instagram Caption Generator', path: '/tools/instagram-caption-generator' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Free AI Tool"
        title="Instagram Caption Generator"
        highlight="Caption Generator"
        subtitle="Describe your post, pick a tone, and get ready-to-paste Instagram captions in seconds. Free, no signup."
      />

      <section className="pb-4">
        <div className="container-px">
          <div className="mx-auto max-w-2xl">
            <ToolRunner
              tool="instagram-caption"
              cta="Generate captions"
              fields={[
                {
                  name: 'topic',
                  label: 'What is your post about?',
                  type: 'textarea',
                  placeholder: 'e.g. Launching our new cold-pressed orange juice — fresh, no added sugar, delivered next-day.',
                },
                {
                  name: 'tone',
                  label: 'Tone',
                  type: 'select',
                  options: ['Friendly', 'Professional', 'Playful', 'Bold'],
                  required: false,
                },
                {
                  name: 'keywords',
                  label: 'Keywords or hashtags to include (optional)',
                  type: 'text',
                  placeholder: 'e.g. cold-pressed, healthy, small batch',
                  required: false,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ToolCrossSell
        headline="Caption every post automatically in Trendly"
        body="This tool writes one caption at a time. In Trendly, AI generates on-brand captions for every post on your calendar — then your team reviews, approves, and schedules them without leaving the app."
      />

      {/* ── SEO supporting copy ── */}
      <section className="py-12">
        <div className="container-px">
          <div className="mx-auto max-w-3xl prose-content">
            <h2>A free Instagram caption generator built for real marketers</h2>
            <p>
              A great photo or reel only does half the work — the caption is what turns a scroll
              into a save, a comment, or a click. But writing fresh Instagram captions every single
              day is exhausting, especially when you&apos;re also running the rest of the business.
              This free Instagram caption generator removes the blank-page problem: tell it what
              your post is about, choose a tone, and it returns several caption options you can copy
              and post immediately.
            </p>

            <h2>How to use the Instagram caption generator</h2>
            <p>
              It takes about ten seconds. First, describe your post in the box — the more specific
              you are about the product, moment, or message, the sharper the captions. Second, pick
              a tone that matches your brand: Friendly for community-led accounts, Professional for
              B2B and service brands, Playful for lifestyle and consumer products, or Bold when you
              want to make a statement. Third, add any keywords or hashtags you want woven in, then
              hit generate. Copy your favourite with one tap and tweak the wording to sound like
              you.
            </p>

            <h2>Tips for captions that actually convert</h2>
            <p>
              The strongest Instagram captions follow a simple shape. Open with a hook — a question,
              a bold claim, or a relatable problem — so the first line earns the &quot;more&quot;
              tap. Deliver one clear idea in the middle; don&apos;t try to say five things at once.
              Close with a single call to action: ask a question to drive comments, point to your
              link in bio, or invite a save. Keep hashtags relevant and limited (three to five beats
              thirty), and break long captions into short lines so they&apos;re easy to read on a
              phone. Use the generator as your first draft, then edit for your voice — AI gets you 80%
              of the way there in seconds.
            </p>

            <h2>Why captions matter for growth</h2>
            <p>
              Instagram rewards content that keeps people on the post and sparks interaction. A
              caption that earns saves, shares, and comments signals quality to the algorithm and
              extends your reach beyond your followers. For small brands, that organic lift is the
              difference between shouting into the void and steadily compounding an audience. Pair
              strong captions with a consistent posting rhythm — see our{' '}
              <Link href="/tools/best-time-to-post">best time to post guide</Link> and grab the{' '}
              <Link href="/tools/social-media-calendar-template">content calendar template</Link> to
              stay consistent. When you&apos;re ready to stop generating captions one at a time,{' '}
              <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP}>Trendly</a> does it for your entire content plan
              automatically.
            </p>
          </div>
        </div>
      </section>

      <ToolFAQ faqs={faqs} />
      <CTA />
    </PageShell>
  );
}
