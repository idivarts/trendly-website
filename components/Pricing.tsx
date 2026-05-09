'use client';
import { useState } from 'react';

type Plan = {
  name: string;
  blurb: string;
  monthly: number | 'free' | 'custom';
  annually: number | 'free' | 'custom';
  features: string[];
  cta: { label: string; href: string };
  popular?: boolean;
};

const plans: Plan[] = [
  {
    name: 'Starter',
    blurb: 'For early experiments, limited usage',
    monthly: 'free',
    annually: 'free',
    features: [
      'Unlimited influencer browsing',
      'Unlimited invitations / applications',
      '5 influencer unlocks',
      'Up to 1 campaign',
      'Max one hiring (contract)',
    ],
    cta: { label: 'Start Free', href: 'https://brands.trendly.now/' },
  },
  {
    name: 'Growth',
    blurb: 'For serious brands, multiple collabs, real hiring.',
    monthly: 750,
    annually: 625,
    features: [
      'Basic influencer filters',
      'Up to 50 influencer unlocks',
      '5 collaboration postings',
      'Up to 8 hirings (contracts)',
      'One free collaboration boosting',
    ],
    cta: { label: 'Get Started', href: 'https://brands.trendly.now/' },
    popular: true,
  },
  {
    name: 'Pro',
    blurb: 'Unlimited scale, end-to-end support, recovery safety net.',
    monthly: 1500,
    annually: 1250,
    features: [
      'Advanced discovery tools',
      '5 free collaboration boosting',
      'Unlimited collaboration postings',
      'Unlimited hirings (contracts)',
      'Advanced customer support',
    ],
    cta: { label: 'Get Started', href: 'https://brands.trendly.now/' },
  },
  {
    name: 'Enterprise',
    blurb: 'Unlimited scale, end-to-end support, recovery safety net.',
    monthly: 'custom',
    annually: 'custom',
    features: [
      'Discovery with no limits',
      'Access 250M+ influencers',
      'Direct access to Modash / Phyllo',
      'End-to-end hiring support *',
      'Guaranteed recovery support *',
    ],
    cta: { label: 'Contact Us', href: 'mailto:support@idiv.in' },
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-24">
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Best-in-class pricing, <span className="bg-gradient-brand bg-clip-text text-transparent">designed for startups</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Where competitors charge no less than ₹30,000, we're priced perfectly for startups looking for micro creators.
          </p>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                !annual ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`flex items-center gap-2 rounded-full px-5 py-2 text-sm font-semibold transition ${
                annual ? 'bg-slate-900 text-white' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annually
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-700">
                Save 2 mo
              </span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {plans.map((p) => {
            const price = annual ? p.annually : p.monthly;
            const isPopular = p.popular;
            return (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-3xl border p-6 transition hover:-translate-y-1 ${
                  isPopular
                    ? 'border-transparent bg-gradient-to-br from-brand-600 to-accent-600 text-white shadow-glow'
                    : 'border-slate-200 bg-white hover:border-brand-200 hover:shadow-glow'
                }`}
              >
                {isPopular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-700 shadow">
                    Most popular
                  </span>
                )}
                <div className={`text-sm font-bold ${isPopular ? 'text-white/90' : 'text-slate-900'}`}>{p.name}</div>
                <div className={`mt-1 text-xs ${isPopular ? 'text-white/80' : 'text-slate-500'}`}>{p.blurb}</div>

                <div className="mt-6">
                  {price === 'free' ? (
                    <div className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>Free</div>
                  ) : price === 'custom' ? (
                    <div className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>Custom</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      {annual && typeof p.monthly === 'number' && (
                        <span className={`text-base line-through ${isPopular ? 'text-white/60' : 'text-slate-400'}`}>
                          ₹{p.monthly}
                        </span>
                      )}
                      <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                        ₹{price}
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-slate-500'}`}>/mo</span>
                    </div>
                  )}
                </div>

                <ul className="mt-6 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <span
                        className={`mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full ${
                          isPopular ? 'bg-white/20 text-white' : 'bg-brand-100 text-brand-700'
                        }`}
                      >
                        <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 12l5 5L20 7" />
                        </svg>
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-white/95' : 'text-slate-700'}`}>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={p.cta.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    isPopular
                      ? 'bg-white text-brand-700 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-brand-600'
                  }`}
                >
                  {p.cta.label}
                </a>
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <a href="/pricing" className="text-sm font-semibold text-brand-700 hover:underline">
            View detailed pricing page →
          </a>
        </div>
      </div>
    </section>
  );
}
