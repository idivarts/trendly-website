import PageShell, { PageHero } from '@/components/PageShell';
import Pricing from '@/components/Pricing';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema } from '@/components/JsonLd';
import { PROOF } from '@/lib/site-config';

export const metadata = {
  title: 'Pricing — Social Media Tool Pricing for Founders & Small Teams',
  description:
    'Transparent USD pricing for solo founders and small in-house marketing teams. Start free forever, scale to Starter at $29/mo or Team at $79/mo. No credit card, cancel anytime.',
};

const compareRows = [
  { feature: 'Team seats',          free: '1',           starter: '2',            team: '5',               agency: '15' },
  { feature: 'Workspaces',          free: '1',           starter: '1',            team: '3',               agency: 'Unlimited' },
  { feature: 'Scheduled posts/mo',  free: '15',          starter: 'Unlimited',    team: 'Unlimited',       agency: 'Unlimited' },
  { feature: 'AI credits/mo',       free: '5',           starter: '50',           team: '300',             agency: '1,000' },
  { feature: 'Content calendar',    free: '✓',           starter: '✓',            team: '✓',               agency: '✓' },
  { feature: 'Team approvals',      free: '—',           starter: '✓',            team: '✓',               agency: '✓' },
  { feature: 'Campaign management', free: '—',           starter: '—',            team: '✓',               agency: '✓' },
  { feature: 'Creator discovery',   free: 'Basic',       starter: 'Basic',        team: 'Advanced',        agency: 'Advanced' },
  { feature: 'Analytics & reports', free: 'Basic',       starter: 'Standard',     team: 'Standard',        agency: 'White-label' },
  { feature: 'API access',          free: '—',           starter: '—',            team: '—',               agency: '✓' },
  { feature: 'Priority support',    free: '—',           starter: 'Email',        team: 'Priority email',  agency: 'Dedicated CSM' },
];

const faqs = [
  {
    q: 'Is the free plan really free?',
    a: 'Yes — Free forever, no credit card required. You get 1 seat, 1 workspace, 15 scheduled posts a month, and 5 AI credits. Upgrade only when you need more seats, AI, or campaign features.',
  },
  {
    q: 'Can I change or cancel my plan anytime?',
    a: 'Yes. Monthly plans are cancel-anytime with no contracts. You can upgrade or downgrade whenever you like; changes take effect at your next billing cycle.',
  },
  {
    q: 'How does annual billing work?',
    a: 'Annual plans are billed upfront and save you roughly 20% versus monthly. The lower per-month price shown on each card is the annual rate.',
  },
  {
    q: 'Do you offer Enterprise or custom plans?',
    a: 'Yes. Enterprise adds unlimited seats and workspaces, SSO/SAML, a dedicated success manager, and custom integrations — plus optional done-for-you services. Contact us for a quote.',
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
        title="Pricing built for founders and small teams"
        highlight="founders and small teams"
        subtitle="Start free and upgrade only when you need more AI, more seats, or campaign management. Cancel anytime — no contracts."
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
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Starter</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">Team</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Agency</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {compareRows.map((r) => (
                  <tr key={r.feature} className="hover:bg-brand-50/30">
                    <td className="px-6 py-3 font-semibold text-slate-800">{r.feature}</td>
                    <td className="px-6 py-3 text-slate-500">{r.free}</td>
                    <td className="px-6 py-3 text-slate-600">{r.starter}</td>
                    <td className="px-6 py-3 font-semibold text-brand-700">{r.team}</td>
                    <td className="px-6 py-3 text-slate-600">{r.agency}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            All prices in USD. Annual billing saves ~20%. Enterprise (unlimited seats, SSO/SAML) available — contact us.
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
