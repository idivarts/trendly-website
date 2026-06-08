import PageShell, { PageHero } from '@/components/PageShell';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, organizationSchema, softwareApplicationSchema } from '@/components/JsonLd';

export const metadata = {
  title: 'About Trendly — The AI Social Media Tool for Founders',
  description:
    'Built by the IDIVARTS team behind 100s of brand campaigns and a 10,000+ creator network, Trendly is the AI social media tool for founders and marketing teams worldwide.',
};

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
          ]),
          organizationSchema(),
          softwareApplicationSchema(),
        ]}
      />

      <PageHero
        eyebrow="Our story"
        title="We built the workspace we wished we had"
        highlight="workspace we wished we had"
        subtitle="Trendly is an AI social media tool for founders and marketing teams worldwide — built by the people behind 100s of brand campaigns and a 10,000+ creator network."
      />

      <section className="py-16 sm:py-24">
        <div className="container-px">
          <div className="mx-auto max-w-2xl space-y-12">
            {/* Who built it */}
            <div>
              <span className="section-eyebrow">Who built it</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                The team behind{' '}
                <span className="bg-gradient-brand bg-clip-text text-transparent">100s of campaigns</span>
              </h2>
              <p className="mt-4 text-slate-600">
                We&apos;re the IDIVARTS team. For years we ran creator marketing — hundreds of brand campaigns across a
                network of 10,000+ creators. Working that closely with founders and small teams, we kept seeing the same
                thing: smart people drowning in tool-sprawl just to get a few posts out the door.
              </p>
            </div>

            {/* Why we built it */}
            <div>
              <span className="section-eyebrow">Why we built it</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                Marketing shouldn&apos;t need{' '}
                <span className="text-gradient-animated">six tabs and a spreadsheet</span>
              </h2>
              <p className="mt-4 text-slate-600">
                A strategy doc here, a calendar there, approvals lost in Slack, creator outreach in a spreadsheet, and a
                pile of separate AI subscriptions. The hardest part of marketing was never hitting publish — it was
                knowing what to say, planning it as a team, and getting it out without ten tabs open. So we built Trendly:
                one place where AI drafts your strategy, your team plans and approves a visual calendar, and you activate
                creators — all under one roof.
              </p>
            </div>

            {/* What we believe */}
            <div>
              <span className="section-eyebrow">What we believe</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">What we believe</h2>
              <div className="mt-5 space-y-4 text-slate-600">
                <p>
                  Marketing software should be built for the team of one and the team of three — not assume a full
                  department most founders can&apos;t yet afford.
                </p>
                <p>
                  Strategy comes before scheduling. A queue of posts isn&apos;t a plan, so Trendly starts upstream: the AI
                  builds your content strategy first, so every post has a reason to exist.
                </p>
              </div>
            </div>

            {/* Honest disclaimer */}
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
              <span className="section-eyebrow">The honest part</span>
              <p className="mt-3 text-slate-700">
                Trendly the product is brand new, and we say so. No fake logos, no invented testimonials, no borrowed
                numbers. The track record above comes from our creator-marketing work — not from the new AI workspace. We&apos;d
                rather earn your trust with what we actually ship than fake it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
