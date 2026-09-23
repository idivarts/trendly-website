import PageShell, { PageHero } from '@/components/PageShell';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Pricing — AI Social Media Tool Pricing for Founders & Teams Worldwide',
  description:
    'Transparent USD pricing for founders and marketing teams anywhere in the world. Start free forever, scale to Pro at $29/mo or Team at $79/mo. Billed monthly, no credit card, cancel anytime.',
};

const compareRows = [
  { feature: 'Brands / workspaces',  free: '1',           pro: '1',                team: '3',               agency: 'Custom' },
  { feature: 'Team seats',           free: '1',           pro: '2',                team: '5',               agency: 'Custom' },
  { feature: 'AI credits / mo',      free: '20',          pro: '200',              team: '600',             agency: 'Custom' },
  { feature: 'Creator lookups',      free: '10/mo',       pro: 'From credits',     team: 'From credits',    agency: 'Unlimited' },
  { feature: 'Scheduling',           free: 'Basic',       pro: 'Full',             team: 'Full',            agency: 'Full' },
  { feature: 'Content calendar',     free: '✓',           pro: '✓',                team: '✓',               agency: '✓' },
  { feature: 'Team approvals',       free: '—',           pro: '—',                team: '✓',               agency: '✓' },
  { feature: 'Campaign management',  free: '—',           pro: '—',                team: '✓',               agency: '✓' },
  { feature: 'Analytics & reports',  free: 'Basic',       pro: 'Standard',         team: 'Full + team',     agency: 'White-label' },
  { feature: 'SSO / SAML',           free: '—',           pro: '—',                team: '—',               agency: '✓' },
  { feature: 'Done-for-you services', free: '—',          pro: '—',                team: '—',               agency: '✓' },
  { feature: 'Support',              free: 'Community',    pro: 'Email',            team: 'Priority email',  agency: 'Dedicated CSM' },
];

const faqs = [
  {
    q: 'Is the free plan really free?',
    a: 'Yes — Free forever, no credit card required. You get 1 brand, 1 seat, 20 AI credits a month, and 10 creator lookups. Upgrade only when you need more brands, seats, AI credits, or campaign features.',
  },
  {
    q: 'What is an AI credit?',
    a: 'One credit = one AI action — a generated caption, image, script, or creator lookup. Every plan shares a single monthly credit pool that refills on the 1st of the month. If you run out, you can buy top-up credit packs anytime.',
  },
  {
    q: 'Can I use Trendly outside the US?',
    a: 'Yes. Trendly works for founders and teams anywhere in the world. All plans are priced and billed in USD, and you can subscribe from any country.',
  },
  {
    q: 'How does billing work?',
    a: 'Plans are billed monthly in USD — there are no annual contracts or long-term commitments. You can upgrade, downgrade, or cancel anytime; changes take effect on your next billing cycle.',
  },
  {
    q: 'Is there an in-app purchase on iOS?',
    a: 'No. The iOS app is free to use, with no in-app purchase. When you want to upgrade, you do it on the web — just reach out to support and we will send you a secure upgrade link.',
  },
  {
    q: 'Do you offer Agency or custom plans?',
    a: 'Yes. The Agency plan adds custom brands and seats, white-label client reports and a client portal, SSO/SAML, a dedicated success manager, and optional done-for-you growth services. Contact us for a quote.',
  },
];

export default function PricingPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Pricing', path: '/pricing' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Pricing"
        title="Pricing built for founders and teams worldwide"
        highlight="founders and teams worldwide"
        subtitle="Start free and upgrade only when you need more brands, seats, or AI credits. Billed monthly in USD, anywhere in the world. Cancel anytime — no contracts."
      />

      <p className="container-px -mt-8 text-center text-sm font-semibold text-slate-500">
        {PROOF.riskReversal}
      </p>

      <Pricing />

      {/* ── Compare plans ── */}
      <section className="py-16 sm:py-20">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Compare plans</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Everything, side by side</h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
            <table className="w-full min-w-[720px] text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Feature</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Free</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Pro</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">Team</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {compareRows.map((r) => (
                  <tr key={r.feature} className="hover:bg-brand-50/30">
                    <td className="px-6 py-3 font-semibold text-slate-800">{r.feature}</td>
                    <td className="px-6 py-3 text-slate-500">{r.free}</td>
                    <td className="px-6 py-3 text-slate-600">{r.pro}</td>
                    <td className="px-6 py-3 font-semibold text-brand-700">{r.team}</td>
                    <td className="px-6 py-3 text-slate-600">{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            All prices in USD, billed monthly, available worldwide. Agency (custom brands &amp; seats, SSO/SAML, done-for-you services) — contact us.
          </p>
        </div>
      </section>

      {/* ── Billing FAQ (plan/billing specific only) ── */}
      <section className="py-12 sm:py-16">
        <div className="container-px mx-auto max-w-3xl">
          <div className="text-center">
            <span className="section-eyebrow">Pricing FAQ</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Billing questions</h2>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((f) => (
              <div key={f.q} className="rounded-3xl border border-slate-200 bg-white p-6">
                <h3 className="text-base font-bold text-slate-900">{f.q}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-slate-500">
            Want us to run your marketing for you?{' '}
            <a href="/services" className="font-semibold text-brand-700 hover:underline">See our services →</a>
          </p>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
