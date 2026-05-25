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
      'We replaced Notion, Later, and our agency brief template with Trendly. Content output doubled in six weeks and our whole team is finally aligned on strategy.',
    name: 'Sarah Chen',
    role: 'Social Media Manager',
    brand: 'Haus Labs',
    gradient: 'from-brand-500 to-accent-500',
    rating: 5,
  },
  {
    quote:
      "The AI strategy feature is the closest thing to having a strategist on staff. It actually understands our brand voice and keeps every post consistent with our content pillars.",
    name: 'Marcus Reid',
    role: 'Head of Content',
    brand: 'Vive Health',
    gradient: 'from-emerald-500 to-teal-500',
    rating: 5,
  },
  {
    quote:
      "Team approvals used to take days of back-and-forth Slack threads. Now it's one click and everyone knows exactly what's scheduled and what needs attention.",
    name: 'Jamie Torres',
    role: 'Brand Lead',
    brand: 'Modern Age',
    gradient: 'from-pink-500 to-rose-500',
    rating: 5,
  },
  {
    quote:
      'We launched our first creator campaign in under two hours — start to finish. That includes finding the creators, sending the brief, and getting them on the calendar.',
    name: 'Alex Kim',
    role: 'Growth Lead',
    brand: 'Graza',
    gradient: 'from-amber-500 to-orange-500',
    rating: 5,
  },
  {
    quote:
      "I manage 4 brands and was juggling 4 Notion workspaces and a calendar for each. Trendly gave me everything in one login. My weekly prep time dropped by 60%.",
    name: 'Jordan Lee',
    role: 'Agency Owner',
    brand: 'Brand Foundry',
    gradient: 'from-violet-500 to-purple-500',
    rating: 5,
  },
  {
    quote:
      "Seeing owned content and creator content side by side on the same calendar was a game changer. I finally have the full picture when I'm planning a campaign.",
    name: 'Priya Nair',
    role: 'VP Marketing',
    brand: 'Brightland',
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
          <span className="section-eyebrow">Loved by marketers</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Real teams, <span className="bg-gradient-brand bg-clip-text text-transparent">real results</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Marketing teams at startups and agencies trust Trendly to run their entire content workflow — from AI strategy to live campaigns.
          </p>
        </div>

        {/* Featured testimonial */}
        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className="relative mx-auto mt-12 max-w-4xl"
        >
          <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-soft sm:p-12">
            <svg className="absolute -top-5 left-8 h-10 w-10 text-brand-200" viewBox="0 0 24 24" fill="currentColor">
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
                <div className={`h-12 w-12 flex-none rounded-full bg-gradient-to-br ${testimonials[idx].gradient}`} />
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
            { v: '2,000+', l: 'Marketing teams' },
            { v: '50k+',   l: 'Posts planned per month' },
            { v: '4.8★',   l: 'Average team satisfaction' },
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
