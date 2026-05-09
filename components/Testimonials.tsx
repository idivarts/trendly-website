'use client';
import { useEffect, useState } from 'react';

type T = {
  quote: string;
  name: string;
  role: string;
  brand: string;
  gradient: string;
  rating: number;
};

const testimonials: T[] = [
  {
    quote:
      'Trendly cut our influencer discovery time from 2 weeks to a single afternoon. The micro-creator filters actually work — every collab moved the needle.',
    name: 'Aakash Sharma',
    role: 'Co-founder',
    brand: 'BoldCare',
    gradient: 'from-brand-500 to-accent-500',
    rating: 5,
  },
  {
    quote:
      'We launched 12 campaigns in 3 months with zero agency overhead. The trust score caught fake followers we would have totally missed.',
    name: 'Riya Kapoor',
    role: 'Head of Growth',
    brand: 'Quench',
    gradient: 'from-pink-500 to-rose-500',
    rating: 5,
  },
  {
    quote:
      "Pay-on-delivery was the killer feature for us. We finally tried influencer marketing without the usual financial risk.",
    name: 'Mohit Singh',
    role: 'Marketing Lead',
    brand: 'Earth Rhythm',
    gradient: 'from-emerald-500 to-teal-500',
    rating: 5,
  },
  {
    quote:
      'The interface feels like Linear meets Instagram. We onboarded in under 10 minutes and ran our first campaign the same day.',
    name: 'Neha Verma',
    role: 'Brand Manager',
    brand: 'Sleepyhead',
    gradient: 'from-violet-500 to-purple-500',
    rating: 5,
  },
  {
    quote:
      "We used to spend ₹50k+ on agencies. Trendly delivers more authentic creators at a fraction of the cost — and we keep full control.",
    name: 'Arjun Patel',
    role: 'Founder',
    brand: 'Plum',
    gradient: 'from-amber-500 to-orange-500',
    rating: 5,
  },
  {
    quote:
      'The interactive demo sold us. We could see exactly what kind of creators we would find before we paid a rupee.',
    name: 'Sneha Iyer',
    role: 'Performance Marketing',
    brand: 'Mamaearth',
    gradient: 'from-sky-500 to-indigo-500',
    rating: 5,
  },
];

export default function Testimonials() {
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % testimonials.length), 4500);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Loved by founders</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Real startups, <span className="bg-gradient-brand bg-clip-text text-transparent">real results</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Thousands of startups and SMBs trust Trendly to leverage the power of micro and mid-tier influencers — cost-effectively
            and authentically.
          </p>
        </div>

        {/* Featured testimonial */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mx-auto mt-12 max-w-4xl"
        >
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-12">
            <svg
              className="absolute -top-5 left-8 h-10 w-10 text-brand-200"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9 7H5a3 3 0 0 0-3 3v8h8v-8H6c0-1.1.9-2 2-2h1V7zm10 0h-4a3 3 0 0 0-3 3v8h8v-8h-4c0-1.1.9-2 2-2h1V7z" />
            </svg>
            <div key={idx} className="animate-fade-up">
              <div className="flex items-center gap-1">
                {Array.from({ length: testimonials[idx].rating }).map((_, i) => (
                  <svg key={i} className="h-5 w-5 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2 15 9l8 .8-6 5.4 1.8 7.8L12 19l-6.8 4 1.8-7.8L1 9.8 9 9z" />
                  </svg>
                ))}
              </div>
              <p className="mt-5 text-xl font-semibold leading-relaxed text-slate-900 sm:text-2xl">
                "{testimonials[idx].quote}"
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className={`h-12 w-12 rounded-full bg-gradient-to-br ${testimonials[idx].gradient}`} />
                <div>
                  <div className="text-sm font-bold text-slate-900">{testimonials[idx].name}</div>
                  <div className="text-xs text-slate-500">
                    {testimonials[idx].role} · {testimonials[idx].brand}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Show testimonial ${i + 1}`}
                onClick={() => setIdx(i)}
                className={`h-2 rounded-full transition-all ${
                  i === idx ? 'w-8 bg-gradient-brand' : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats strip */}
        <div className="mx-auto mt-16 grid max-w-4xl gap-4 sm:grid-cols-3">
          {[
            { v: '10,000+', l: 'Verified micro-creators' },
            { v: '500+', l: 'Campaigns launched' },
            { v: '92%', l: 'On-time delivery rate' },
          ].map((s) => (
            <div key={s.l} className="rounded-3xl border border-slate-200 bg-white p-6 text-center">
              <div className="bg-gradient-brand bg-clip-text text-3xl font-extrabold text-transparent">{s.v}</div>
              <div className="mt-1 text-sm text-slate-600">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
