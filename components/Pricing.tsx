'use client';
import { useState } from 'react';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

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
    name: 'Free',
    blurb: 'For solo marketers exploring the platform',
    monthly: 'free',
    annually: 'free',
    features: [
      '1 seat · 1 workspace',
      '15 scheduled posts / month',
      '5 AI strategy credits / month',
      '10 creator searches / month',
      'Basic analytics',
    ],
    cta: { label: 'Start Free', href: LINKS.BRAND_SIGNUP },
  },
  {
    name: 'Starter',
    blurb: 'For individual marketers and freelancers',
    monthly: 29,
    annually: 23,
    features: [
      '2 seats · 2 workspaces',
      'Unlimited scheduled posts',
      '50 AI credits / month',
      '100 creator searches / month',
      'Standard analytics & reporting',
    ],
    cta: { label: 'Get Started', href: LINKS.BRAND_SIGNUP },
  },
  {
    name: 'Team',
    blurb: 'For growing marketing teams',
    monthly: 79,
    annually: 63,
    features: [
      '5 seats · 5 workspaces',
      'Unlimited posts + scheduling',
      '300 AI credits / month',
      'Unlimited creator searches',
      'Campaign management & approvals',
      'Full analytics + team reporting',
    ],
    cta: { label: 'Get Started', href: LINKS.BRAND_SIGNUP },
    popular: true,
  },
  {
    name: 'Agency',
    blurb: 'For agencies managing multiple brands',
    monthly: 199,
    annually: 159,
    features: [
      '15 seats · 15 workspaces',
      'Everything in Team',
      'White-label client reports',
      'Client portal access',
      'API access',
      'Priority support',
    ],
    cta: { label: 'Get Started', href: LINKS.BRAND_SIGNUP },
  },
];

export default function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section id="pricing" className="relative py-12">
      <div className="container-px">

        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="h-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Simple, <span className="text-gradient-animated">self-serve pricing</span>
          </h2>
          <p className="mt-4 text-slate-600">
            All plans include a free trial. No contracts. Cancel anytime.
          </p>
          <div className="mt-6 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white p-1 shadow-sm">
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
                Save 20%
              </span>
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
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
                          ${p.monthly}
                        </span>
                      )}
                      <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                        ${price}
                      </span>
                      <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-slate-500'}`}>/mo</span>
                    </div>
                  )}
                </div>

                <ul className="mt-6 flex-1 space-y-3">
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
                  href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : p.cta.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    isPopular
                      ? 'bg-white text-brand-700 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-brand-600'
                  }`}
                >
                  {DISABLE_LOGIN_SIGNUP ? 'Book a demo' : p.cta.label}
                </a>
              </div>
            );
          })}
        </div>

        {/* Enterprise / Custom plan */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-brand-200 hover:shadow-soft sm:p-8">
          <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <div className="text-sm font-bold text-slate-900">Enterprise / Custom</div>
              <div className="mt-1 max-w-xl text-sm text-slate-600">
                The platform plus done-for-you growth — scoped to your brand. Software, ads, and performance marketing under one custom plan.
              </div>
            </div>
            <a href="mailto:support@idiv.in" className="shrink-0 rounded-full border border-slate-200 bg-white px-6 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-brand-300 hover:text-brand-700">
              Contact us
            </a>
          </div>
          <div className="mt-6 grid gap-x-6 gap-y-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              'Unlimited seats & workspaces',
              'SSO / SAML',
              'Dedicated success manager',
              'Custom integrations',
              'SLA',
              'Website & full-funnel conversion audit',
              'Ad running & management',
              'Performance marketing',
            ].map((f) => (
              <div key={f} className="flex items-start gap-2">
                <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                  <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12l5 5L20 7" />
                  </svg>
                </span>
                <span className="text-sm text-slate-700">{f}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <a href="/pricing" className="text-sm font-semibold text-brand-700 hover:underline">
            View full feature comparison →
          </a>
        </div>
      </div>
    </section>
  );
}
