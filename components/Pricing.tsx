'use client';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

type Plan = {
  name: string;
  blurb: string;
  price: number | 'free' | 'custom';
  features: string[];
  cta: { label: string; href: string };
  popular?: boolean;
  /** Sales-led tier — CTA is always "Contact us" (mailto), never gated/Book-a-demo. */
  contact?: boolean;
};

// Single value metric = brands/workspaces per org; everything metered draws from
// one monthly AI-token wallet. Monthly-only (no annual).
//
// The allowances below are the live backend numbers (PlanLimitsMap in
// backend-sls/internal/models/trendlymodels/organization.go), stated in the
// same unit the product meters in. The site used to say "20 / 200 / 600 AI
// credits" against a wallet that actually grants 200K / 2M / 5M tokens and a
// meter that reads "5M" — so anyone who signed up met a different product
// than the one they priced. Keep these in step when the allotments are
// re-tuned (Phase-1 values are still provisional).
const plans: Plan[] = [
  {
    name: 'Free',
    blurb: 'For founders exploring the platform',
    price: 'free',
    features: [
      '1 brand · 1 seat',
      '200K AI tokens / month',
      'AI content calendar & strategy',
      'Starter scheduling',
      'Analytics preview',
    ],
    cta: { label: 'Start Free', href: LINKS.BRAND_SIGNUP },
  },
  {
    name: 'Pro',
    blurb: 'For solo founders and freelancers',
    price: 29,
    features: [
      '1 brand · 2 seats',
      '2M AI tokens / month',
      'Unlimited scheduling to every platform',
      'Reply to comments & DMs from the inbox',
      'Standard analytics & reporting',
    ],
    cta: { label: 'Get Started', href: LINKS.BRAND_SIGNUP },
  },
  {
    name: 'Team',
    blurb: 'For growing marketing teams',
    price: 79,
    features: [
      '3 brands · 5 seats',
      '5M AI tokens / month',
      'Unlimited scheduling & inbox replies',
      'Campaign management & approvals',
      'Full analytics + team reporting',
    ],
    cta: { label: 'Get Started', href: LINKS.BRAND_SIGNUP },
    popular: true,
  },
  {
    name: 'Agency',
    blurb: 'For agencies running multiple brands',
    price: 'custom',
    features: [
      'Custom brands & seats',
      'Custom AI token allowance',
      'White-label client reports & portal',
      'SSO / SAML · dedicated success manager',
      'Done-for-you growth services available',
    ],
    cta: { label: 'Contact us', href: 'mailto:support@idiv.in' },
    contact: true,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-12">
      <div className="container-px">

        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Pricing</span>
          <h2 className="h-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
            Simple, <span className="text-gradient-animated">self-serve pricing</span>
          </h2>
          <p className="mt-4 text-slate-600">
            One plan for your whole team, worldwide. Billed monthly in USD. No contracts. Cancel anytime.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-4">
          {plans.map((p) => {
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
                  {p.price === 'free' ? (
                    <div className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>Free</div>
                  ) : p.price === 'custom' ? (
                    <div className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>Custom</div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span className={`text-4xl font-extrabold ${isPopular ? 'text-white' : 'text-slate-900'}`}>
                        ${p.price}
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
                  href={p.contact ? p.cta.href : DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : p.cta.href}
                  className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                    isPopular
                      ? 'bg-white text-brand-700 hover:bg-slate-100'
                      : 'bg-slate-900 text-white hover:bg-brand-600'
                  }`}
                >
                  {p.contact ? p.cta.label : DISABLE_LOGIN_SIGNUP ? 'Book a demo' : p.cta.label}
                </a>
              </div>
            );
          })}
        </div>

        {/* What's an AI token? — define the single value metric inline */}
        <div className="mx-auto mt-8 max-w-3xl rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
          <p className="text-sm text-slate-600">
            <span className="font-semibold text-slate-900">What&apos;s an AI token?</span>{' '}
            Tokens meter the work the AI actually does, so you only spend on what you generate — a quick caption is cheap, a fully AI-designed post or video costs more. Using the platform itself is free. Your whole organization shares one monthly pool that refills on the 1st, and top-up packs are available anytime.
          </p>
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
