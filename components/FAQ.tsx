'use client';
import { useState } from 'react';
import JsonLd, { faqSchema } from '@/components/JsonLd';

const faqs = [
  {
    q: 'How is Trendly different from Buffer, Later, or Hootsuite?',
    a: "Those are mainly schedulers — you still juggle separate AI tools to actually make content. Trendly brings every top AI model (GPT, Claude, Gemini, ElevenLabs and more) into one workspace, generates your captions, images and scripts from a single prompt, turns ideas into a calendar in one click, schedules to every platform, and pulls all your comments and DMs into one inbox. It replaces your whole stack — Docs, Notion, a calendar, a scheduler, and a pile of AI subscriptions — not just your scheduler.",
  },
  {
    q: 'Which AI models does Trendly support?',
    a: 'Trendly brings the leading models together in one place — GPT (OpenAI), Claude (Anthropic), Gemini (Google), ElevenLabs, and more — and routes each task to the model that does it best (e.g. research vs. captions vs. images vs. voice). You get the strongest result without paying for and switching between several AI subscriptions.',
  },
  {
    q: 'What social channels does Trendly support?',
    a: 'Instagram, TikTok, LinkedIn, X (Twitter), YouTube and Facebook — schedule and multi-publish to all of them from one place, and manage every comment and DM across them in a single inbox.',
  },
  {
    q: 'How does the AI content strategy actually work?',
    a: "You answer a few questions about your brand, audience, and goals. Trendly's AI analyzes your competitive landscape and trending content formats to produce a content strategy organized into pillars, posting cadence, and content themes — tailored to your brand, not generic templates.",
  },
  {
    q: 'Can my whole team use it? How do permissions work?',
    a: 'Yes. Team plans include multiple seats with role-based access: writers can draft, designers can upload assets, approvers can sign off, and admins control publishing. Everyone works in the same calendar without stepping on each other.',
  },
  {
    q: 'Do I have to use the creator / influencer feature?',
    a: "No — it's completely optional. Many teams use Trendly purely for strategy, planning, and scheduling. The influencer discovery tools are there when you're ready to amplify with creators, but you'll never be pushed toward it.",
  },
  {
    q: 'How does influencer discovery work?',
    a: "Search our database of 10,000+ verified micro-influencers by niche, platform, audience size, and engagement rate. When you find a match, you can send a campaign brief directly from your Trendly calendar — no separate tool, no spreadsheet.",
  },
  {
    q: 'Is my content and strategy data private?',
    a: "Yes. Your strategy, drafts, and brand data are private to your workspace. We never use your content to train AI models, sell your data, or share it with third parties. See our Privacy Policy for the full details.",
  },
  {
    q: 'What does the free plan include?',
    a: 'The free plan gives you 1 seat, 1 workspace, 15 scheduled posts per month, 5 AI strategy credits, and 10 creator searches. It never expires — a good way to explore the platform before upgrading.',
  },
  {
    q: 'Can I cancel or change my plan anytime?',
    a: 'Yes. All monthly plans are cancel-anytime with no contracts. Annual plans are billed upfront and are non-refundable after a 7-day window. You can upgrade or downgrade at any time; changes take effect at the next billing cycle.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
      <JsonLd data={faqSchema(faqs)} />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">FAQ</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Questions, <span className="bg-gradient-brand bg-clip-text text-transparent">answered</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 rounded-3xl border border-slate-200 bg-white">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-6">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-slate-900">{f.q}</span>
                  <span
                    className={`grid h-8 w-8 flex-none place-items-center rounded-full border transition ${
                      isOpen ? 'rotate-45 border-brand-600 bg-brand-600 text-white' : 'border-slate-200 bg-white text-slate-700'
                    }`}
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-300 ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 text-sm leading-relaxed text-slate-600">{f.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
