import Link from 'next/link';
import PageShell, { PageHero } from '@/components/PageShell';
import ToolRunner from '@/components/tools/ToolRunner';
import ToolFAQ from '@/components/tools/ToolFAQ';
import ToolCrossSell from '@/components/tools/ToolCrossSell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Free Hook Generator for Social Media (AI) — Trendly',
  description:
    'Write the first line that stops the scroll. Our free AI hook generator creates attention-grabbing hooks for Instagram, TikTok, LinkedIn and X in seconds. No signup.',
  alternates: { canonical: '/tools/hook-generator' },
};

const faqs = [
  {
    q: 'What makes a good social media hook?',
    a: 'A good hook creates an open loop in the first second — through curiosity, a bold claim, a relatable problem, or a surprising result — so the viewer has to keep watching or reading. It should be specific, fast, and promise a payoff.',
  },
  {
    q: 'Does the hook generator work for Reels, TikTok and LinkedIn?',
    a: 'Yes. Choose your platform and the generator adapts the style — punchy and visual for TikTok and Reels, more credibility-driven for LinkedIn, and concise for X.',
  },
  {
    q: 'How many hooks should I test?',
    a: 'Generate several and test a few. Hooks are the highest-leverage part of a post, so it is worth trying different angles to see which one earns the most watch time or saves.',
  },
];

export default function HookGeneratorPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Free Tools', path: '/tools' },
            { name: 'Hook Generator', path: '/tools/hook-generator' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Free AI Tool"
        title="Hook Generator for Social Media"
        highlight="Hook Generator"
        subtitle="Write the first line that stops the scroll. Generate punchy, platform-tuned hooks in seconds — free, no signup."
      />

      <section className="pb-4">
        <div className="container-px">
          <div className="mx-auto max-w-2xl">
            <ToolRunner
              tool="hook"
              cta="Generate hooks"
              fields={[
                {
                  name: 'topic',
                  label: 'What is your post or video about?',
                  type: 'textarea',
                  placeholder: 'e.g. How we grew a skincare brand to 10k followers in 90 days with zero ad spend.',
                },
                {
                  name: 'platform',
                  label: 'Platform',
                  type: 'select',
                  options: ['Instagram', 'TikTok', 'LinkedIn', 'X', 'YouTube'],
                  required: false,
                },
              ]}
            />
          </div>
        </div>
      </section>

      <ToolCrossSell
        headline="A scroll-stopping hook for every post"
        body="This tool writes hooks one topic at a time. In Trendly, AI drafts hooks, captions, and full posts across your entire content calendar — so every piece you ship opens strong."
      />

      {/* ── SEO supporting copy ── */}
      <section className="py-12">
        <div className="container-px">
          <div className="mx-auto max-w-3xl prose-content">
            <h2>A free hook generator for social media that earns the watch</h2>
            <p>
              On every platform, the first line — or the first second — decides everything. If your
              hook doesn&apos;t land, it doesn&apos;t matter how good the rest of your post is,
              because no one sticks around to see it. This free hook generator for social media helps
              you nail that opening: describe your topic, pick your platform, and get a set of hooks
              engineered to stop the scroll and pull people in.
            </p>

            <h2>How to use the hook generator</h2>
            <p>
              Describe what your post or video is about in plain language, and be specific about the
              outcome or angle — &quot;grew to 10k followers in 90 days with zero ad spend&quot;
              produces far stronger hooks than &quot;growing on Instagram.&quot; Choose the platform
              you&apos;re posting on so the tone fits: fast and visual for TikTok and Reels, more
              authority-led for LinkedIn, concise and punchy for X. Generate a batch, then test a few
              of the strongest against each other in your real content.
            </p>

            <h2>The anatomy of a great hook</h2>
            <p>
              The best hooks open a loop the viewer needs to close. Common patterns that work across
              platforms: the bold claim (&quot;Most founders post the wrong content&quot;), the
              specific result (&quot;This one change tripled our saves&quot;), the relatable problem
              (&quot;Your captions aren&apos;t the reason no one&apos;s engaging&quot;), the
              contrarian take, and the curiosity gap (&quot;Nobody talks about this part of
              growth&quot;). Keep it short, lead with the most interesting word, and make a promise
              the rest of the post actually pays off — a great hook with a weak payoff just trains
              people to scroll past you next time.
            </p>

            <h2>Why hooks are the highest-leverage edit you can make</h2>
            <p>
              Watch time and retention drive reach on nearly every platform, and the hook is what
              protects those first critical seconds. Improving your hook is often the single
              highest-return change you can make to a post — same content, far more reach. Once
              you&apos;ve got the hook, build the rest: pair it with a strong{' '}
              <Link href="/tools/instagram-caption-generator">caption</Link>, develop the idea from
              your <Link href="/tools/content-idea-generator">content ideas</Link>, and keep a
              steady cadence with the{' '}
              <Link href="/tools/social-media-calendar-template">content calendar template</Link>.
              When you want a strong opening for every post without doing it manually,{' '}
              <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP}>Trendly</a> generates hooks across your whole calendar
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
