'use client';
import { useState } from 'react';

const faqs = [
  {
    q: "Will I find who I'm looking for in Trendly?",
    a: "Yes. If you're looking for micro-creators (influencers under 100k followers) on Instagram, you'll find them on Trendly. We specialize in this category, which means our database is much larger and cleaner than what most competitors offer.",
  },
  {
    q: 'Where does Trendly get influencer data from? Is it accurate?',
    a: "We have multiple trusted sources. Our in-house team manually reviews and curates micro-creators (under 100k followers) on Instagram. Over 90% of quality micro-influencers in India are already on our platform. For enterprise needs we also rely on verified providers like Modash and Phyllo.",
  },
  {
    q: "How does Trendly ensure influencers are trustworthy and don't have fake followers?",
    a: "Each influencer goes through our internal AI system that analyzes follower profiles, engagement patterns, comment quality, and growth signals to assign a Trust Score. This score reflects audience authenticity, so you can focus on collaborations while we handle the background checks.",
  },
  {
    q: "If an influencer doesn't deliver on time or quality, who is responsible?",
    a: "Trendly is a discovery tool, not a PR or marketing agency, so we don't take responsibility for influencer deliverables. That said, our Trustability Score (above 80% is highly reliable) helps you pick safely. If issues do occur, we step in to escalate, blacklist repeat offenders, and report to partner networks.",
  },
  {
    q: 'How is Trendly priced so much lower compared to competitors?',
    a: "We focus on a specific niche — micro-creators on Instagram — which lets us run lean while delivering high-quality data. For enterprise plans we partner with Modash and Phyllo on a shared model, operating at roughly 30% of what they would charge directly.",
  },
  {
    q: 'Can I get celebrity or macro influencers on Trendly?',
    a: "Trendly specializes in micro-creators under 100k followers. For larger influencers we partner with data providers like Modash and Phyllo to fulfill those requirements on the Enterprise plan.",
  },
  {
    q: 'Will Trendly handle content brainstorming or follow-ups for delivery?',
    a: "No. Trendly is a discovery tool — we help you find the right influencers and run campaigns that attract them, while you stay in full control of collaboration and content delivery.",
  },
  {
    q: 'Do I pay the influencer separately from my Trendly subscription?',
    a: "Yes. Your Trendly subscription is for discovering influencers and managing campaigns. The amount you agree on with the influencer for their services is handled separately, directly between you and them.",
  },
  {
    q: "Do I get a refund if I don't find the influencer I'm looking for?",
    a: "Normally, yes. Each refund request is evaluated for validity. If your campaign expectations are aligned with industry standards and you still don't get matched with any influencer, we process the refund.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24">
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
