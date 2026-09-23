'use client';
import { useState } from 'react';
import { QUOTE_ENDPOINT, PROOF, SERVICES } from '@/lib/site-config';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const budgets = ['Under $1k / mo', '$1k–$3k / mo', '$3k–$10k / mo', '$10k+ / mo', 'Not sure yet'];

const serviceOptions = [
  ...SERVICES.map((s) => s.title),
  'End-to-end marketing',
  'Not sure — help me decide',
];

export default function QuoteForm({
  defaultService,
  heading = 'Get a free, no-obligation quote',
  subheading = 'Tell us what you need and we’ll send a clear, line-by-line quote within 24 hours. No retainers, no obligation.',
}: {
  defaultService?: string;
  heading?: string;
  subheading?: string;
}) {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    service: defaultService ?? '',
    budget: '',
    message: '',
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitting');
    const payload = { ...form, source: 'website-quote-form' };

    // Placeholder endpoint: show success UX without actually sending.
    if (QUOTE_ENDPOINT.includes('REPLACE_ME')) {
      // eslint-disable-next-line no-console
      console.warn('[QuoteForm] QUOTE_ENDPOINT is a placeholder — not sending. Payload:', payload);
      setStatus('success');
      return;
    }

    try {
      const res = await fetch(QUOTE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? 'success' : 'error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="quote" className="scroll-mt-24 py-20">
      <div className="container-px">
        <div className="mx-auto max-w-4xl overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-soft">
          <div className="grid lg:grid-cols-12">

            {/* Left — value prop */}
            <div className="relative overflow-hidden bg-gradient-to-br from-brand-600 to-brand-700 p-8 text-white lg:col-span-5">
              <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] backdrop-blur">
                Get a quote
              </span>
              <h2 className="h-display mt-5 text-2xl sm:text-3xl">{heading}</h2>
              <p className="mt-3 text-sm text-white/85">{subheading}</p>
              <ul className="mt-6 space-y-2.5">
                {['Line-by-line pricing within 24h', 'No retainers or long contracts', `${PROOF.brandsLabel}`].map((t) => (
                  <li key={t} className="flex items-center gap-2.5 text-sm text-white/90">
                    <span className="grid h-5 w-5 flex-none place-items-center rounded-full bg-white/15">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 12l5 5L20 7" />
                      </svg>
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right — the form */}
            <div className="p-8 lg:col-span-7">
              {status === 'success' ? (
                <div className="flex h-full flex-col items-center justify-center py-8 text-center">
                  <div className="grid h-14 w-14 place-items-center rounded-full bg-emerald-100 text-emerald-600">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                  </div>
                  <h3 className="mt-4 text-xl font-bold text-slate-900">Thanks — we’re on it.</h3>
                  <p className="mt-2 max-w-sm text-sm text-slate-600">
                    We’ll review your details and send a clear, line-by-line quote within 24 hours. Keep an eye on your inbox.
                  </p>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="Your name" required>
                      <input required value={form.name} onChange={set('name')} className="qf-input" placeholder="Alex Founder" />
                    </Field>
                    <Field label="Work email" required>
                      <input required type="email" value={form.email} onChange={set('email')} className="qf-input" placeholder="you@brand.com" />
                    </Field>
                  </div>
                  <Field label="Company / brand">
                    <input value={form.company} onChange={set('company')} className="qf-input" placeholder="Your brand" />
                  </Field>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <Field label="What do you need?" required>
                      <select required value={form.service} onChange={set('service')} className="qf-input">
                        <option value="" disabled>Select a service…</option>
                        {serviceOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </Field>
                    <Field label="Monthly budget">
                      <select value={form.budget} onChange={set('budget')} className="qf-input">
                        <option value="" disabled>Select a range…</option>
                        {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </Field>
                  </div>
                  <Field label="Anything else? (optional)">
                    <textarea value={form.message} onChange={set('message')} rows={3} className="qf-input resize-none" placeholder="A line on your goals, current channels, timelines…" />
                  </Field>

                  {status === 'error' && (
                    <p className="text-sm font-medium text-rose-600">
                      Something went wrong sending that. Please try again, or email <a className="underline" href="mailto:support@idiv.in">support@idiv.in</a>.
                    </p>
                  )}

                  <button type="submit" disabled={status === 'submitting'} className="btn-primary w-full justify-center disabled:opacity-60">
                    {status === 'submitting' ? 'Sending…' : 'Get my quote'}
                  </button>
                  <p className="text-center text-[11px] text-slate-400">
                    We’ll only use your details to prepare your quote. No spam.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-semibold text-slate-700">
        {label}{required && <span className="text-brand-600"> *</span>}
      </span>
      {children}
    </label>
  );
}
