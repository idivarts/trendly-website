import PageShell, { PageHero } from '@/components/PageShell';
import Pricing from '@/components/Pricing';
import ManagedServices from '@/components/ManagedServices';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Pricing — Trendly',
  description:
    'Simple, transparent pricing for marketing teams. Start free, scale to Starter at $29/mo or Team at $79/mo. Cancel anytime.',
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

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="One workspace for your whole marketing team"
        highlight="whole marketing team"
        subtitle="Start free. Upgrade when you need more AI, more seats, or managed services. Cancel anytime — no contracts."
      />

      <Pricing />

      {/* ── Compare plans ── */}
      <section className="py-20">
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

      <ManagedServices />

      <FAQ />
      <CTA />
    </PageShell>
  );
}
