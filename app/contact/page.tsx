'use client';
import { useState } from 'react';
import PageShell, { PageHero } from '@/components/PageShell';

const contactOptions = [
  {
    title: 'Email support',
    desc: 'For any product, billing, or partnership question.',
    cta: 'support@idiv.in',
    href: 'mailto:support@idiv.in',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    title: 'Book a 30-min demo',
    desc: 'Walk through the platform with our team.',
    cta: 'cal.com/rahul-idiv',
    href: 'https://cal.com/rahul-idiv/30min',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="3" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: 'WhatsApp',
    desc: 'Quick chats during business hours (IST).',
    cta: '+91 76040 07156',
    href: 'https://wa.me/917604007156',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7A8.4 8.4 0 0 1 4 11.5 8.5 8.5 0 0 1 8.7 3.9 8.4 8.4 0 0 1 12.5 3a8.5 8.5 0 0 1 8.5 8.5z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <PageShell>
      <PageHero
        eyebrow="Contact"
        title="Let's talk."
        highlight="talk"
        subtitle="Whether you're a brand exploring micro-influencer campaigns or a creator with a question — we'd love to hear from you."
      />

      <section className="pb-16">
        <div className="container-px">
          <div className="grid gap-4 sm:grid-cols-3">
            {contactOptions.map((c) => (
              <a
                key={c.title}
                href={c.href}
                className="group rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-glow"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-brand text-white shadow-glow">
                  <div className="h-5 w-5">{c.icon}</div>
                </div>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600">{c.desc}</p>
                <div className="mt-4 inline-flex items-center text-sm font-semibold text-brand-700">
                  {c.cta}
                  <svg className="ml-1 h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container-px">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <span className="section-eyebrow">Send a message</span>
              <h2 className="h-display mt-3 text-3xl sm:text-4xl">
                Tell us about your <span className="bg-gradient-brand bg-clip-text text-transparent">campaign</span>
              </h2>
              <p className="mt-4 text-slate-600">
                Share a few details about your brand and what you're looking to achieve. We typically respond within 24
                hours on business days.
              </p>
              <div className="mt-8 space-y-3 text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span>Free 3-day trial — no credit card required</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span>Plans starting at ₹750/month</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </span>
                  <span>Pay only after the influencer delivers</span>
                </div>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSubmitted(true);
              }}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft sm:p-8"
            >
              {submitted ? (
                <div className="grid place-items-center py-16 text-center">
                  <div className="grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Got it!</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    We'll get back to you within 24 business hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Your name
                    </label>
                    <input
                      required
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="Aanya Sharma"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Work email
                    </label>
                    <input
                      required
                      type="email"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="aanya@brand.com"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Brand</label>
                    <input
                      type="text"
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="Your D2C brand"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Message</label>
                    <textarea
                      required
                      rows={4}
                      className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                      placeholder="Tell us a bit about your campaign goals..."
                    />
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Send message
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
