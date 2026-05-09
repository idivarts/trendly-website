import PageShell, { PageHero } from '@/components/PageShell';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Pricing — Trendly',
  description:
    'Plans designed for Indian startups. Start free, upgrade to Growth at ₹625/mo (annual), or scale to Pro and Enterprise.',
};

const compareRows = [
  { feature: 'Influencer browsing', starter: 'Unlimited', growth: 'Unlimited', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Influencer unlocks', starter: '5', growth: '50', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Campaign postings', starter: '1', growth: '5', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Hirings (contracts)', starter: '1', growth: '8', pro: 'Unlimited', enterprise: 'Unlimited' },
  { feature: 'Advanced filters', starter: '—', growth: 'Basic', pro: 'Advanced', enterprise: 'Advanced+' },
  { feature: 'Modash / Phyllo access', starter: '—', growth: '—', pro: '—', enterprise: 'Direct' },
  { feature: 'Hiring support', starter: '—', growth: 'Email', pro: 'Priority', enterprise: 'Dedicated' },
  { feature: 'Recovery support', starter: '—', growth: '—', pro: 'Best effort', enterprise: 'Guaranteed' },
];

export default function PricingPage() {
  return (
    <PageShell>
      <PageHero
        eyebrow="Pricing"
        title="Pricing built for startups"
        highlight="startups"
        subtitle="Where competitors charge ₹30,000+, we start at ₹750/month. Pick the plan that matches your scale — upgrade or downgrade anytime."
      />

      <Pricing />

      <section className="py-20">
        <div className="container-px">
          <div className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">Compare plans</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">Everything, side by side</h2>
          </div>

          <div className="mt-10 overflow-x-auto rounded-3xl border border-slate-200 bg-white">
            <table className="w-full min-w-[680px] text-sm">
              <thead className="bg-slate-50">
                <tr className="text-left">
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Feature</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Starter</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-brand-700">Growth</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Pro</th>
                  <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">Enterprise</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {compareRows.map((r) => (
                  <tr key={r.feature} className="hover:bg-brand-50/30">
                    <td className="px-6 py-3 font-semibold text-slate-800">{r.feature}</td>
                    <td className="px-6 py-3 text-slate-600">{r.starter}</td>
                    <td className="px-6 py-3 font-semibold text-brand-700">{r.growth}</td>
                    <td className="px-6 py-3 text-slate-600">{r.pro}</td>
                    <td className="px-6 py-3 text-slate-600">{r.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-6 text-center text-xs text-slate-500">
            All prices in INR (₹). Annual billing saves you 2 months. Custom plans negotiable on Enterprise.
          </p>
        </div>
      </section>

      <FAQ />
      <CTA />
    </PageShell>
  );
}
