'use client';
import { useState } from 'react';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

type Post = {
  id: number;
  day: string;
  channel: string;
  chColor: string;
  chBg: string;
  type: string;
  title: string;
  status: 'Scheduled' | 'Review' | 'Draft' | 'Live';
  statusColor: string;
  brief: {
    goal: string;
    hook: string;
    caption: string;
    hashtags: string[];
    pillar: string;
    creator?: { name: string; followers: string; er: string; gradient: string };
  };
};

const posts: Post[] = [
  {
    id: 1,
    day: 'Mon',
    channel: 'Instagram',
    chColor: 'text-pink-700',
    chBg: 'bg-pink-50 border-pink-200',
    type: 'Reel',
    title: '5 ways to style our hero piece',
    status: 'Live',
    statusColor: 'bg-emerald-500',
    brief: {
      goal: 'Drive product discovery and save-worthy content',
      hook: '"Wait — one piece, 5 completely different looks?"',
      caption: 'Your wardrobe shortcut just arrived. 5 ways to style our new drop — from morning coffee to rooftop dinners. Which look is you? → Link in bio.',
      hashtags: ['#OOTD', '#StyleInspo', '#NewArrivals', '#OutfitIdeas'],
      pillar: 'Education',
    },
  },
  {
    id: 2,
    day: 'Tue',
    channel: 'TikTok',
    chColor: 'text-violet-700',
    chBg: 'bg-violet-50 border-violet-200',
    type: 'Video',
    title: 'GRWM with our summer drops',
    status: 'Draft',
    statusColor: 'bg-slate-300',
    brief: {
      goal: 'Build brand authenticity and relatability with Gen Z',
      hook: '"I have a 9am meeting and somehow I\'m pulling this together..."',
      caption: 'GRWM for a day that goes from Zoom calls to rooftop happy hour. All pieces linked in our bio 🔗',
      hashtags: ['#GRWM', '#SummerFashion', '#GetReadyWithMe', '#OOTD'],
      pillar: 'Authenticity',
      creator: { name: 'Jamie Lee', followers: '41k', er: '5.8%', gradient: 'from-pink-400 to-rose-500' },
    },
  },
  {
    id: 3,
    day: 'Wed',
    channel: 'LinkedIn',
    chColor: 'text-sky-700',
    chBg: 'bg-sky-50 border-sky-200',
    type: 'Article',
    title: 'Behind the design process',
    status: 'Review',
    statusColor: 'bg-amber-400',
    brief: {
      goal: 'Build thought leadership and attract B2B partnerships',
      hook: '"Every piece we ship goes through 11 rounds of revision. Here\'s why."',
      caption: 'We believe great design isn\'t just aesthetic — it\'s the difference between something people wear twice and something they wear forever. A behind-the-scenes look at our process.',
      hashtags: ['#DesignThinking', '#BrandBuilding', '#ProductDesign'],
      pillar: 'Education',
    },
  },
  {
    id: 4,
    day: 'Thu',
    channel: 'Instagram',
    chColor: 'text-pink-700',
    chBg: 'bg-pink-50 border-pink-200',
    type: 'Story',
    title: '24hr flash sale — don\'t miss it',
    status: 'Scheduled',
    statusColor: 'bg-brand-500',
    brief: {
      goal: 'Drive urgency and direct sales during promotion window',
      hook: '"24 hours. Your favorites at 30% off. Starting now."',
      caption: 'FLASH SALE 🔥 30% off sitewide — ends midnight tonight. Use code FLASH30 at checkout. Link in bio.',
      hashtags: ['#FlashSale', '#SaleAlert', '#LimitedTime'],
      pillar: 'Product',
    },
  },
  {
    id: 5,
    day: 'Fri',
    channel: 'X',
    chColor: 'text-slate-700',
    chBg: 'bg-slate-50 border-slate-200',
    type: 'Thread',
    title: 'How we built our brand in 18 months',
    status: 'Draft',
    statusColor: 'bg-slate-300',
    brief: {
      goal: 'Build authority and community through founder storytelling',
      hook: '"18 months ago we had a Canva logo and a Shopify store. Here\'s the full story 🧵"',
      caption: '18 months ago we had a Canva logo and a Shopify store. Today we\'re shipping to 40 countries. Here\'s everything we did — the wins, the fails, and the things we\'d do differently.',
      hashtags: ['#BuildInPublic', '#StartupStory', '#Entrepreneurship', '#DTC'],
      pillar: 'Authenticity',
    },
  },
];

const statusStyles: Record<Post['status'], string> = {
  Live:      'bg-emerald-100 text-emerald-700',
  Review:    'bg-amber-100 text-amber-700',
  Draft:     'bg-slate-100 text-slate-600',
  Scheduled: 'bg-brand-100 text-brand-700',
};

export default function InteractiveDemo() {
  const [active, setActive] = useState<Post>(posts[0]);

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-brand-50/50 to-transparent" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">See it in action</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Click any post to see the{' '}
            <span className="bg-gradient-brand bg-clip-text text-transparent">AI brief behind it</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Every post on your calendar comes with an AI-generated goal, hook, caption, and creator match — ready for your team to refine and approve.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">

          {/* Post list — weekly calendar */}
          <aside className="lg:col-span-5">
            <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-slate-900">Week of May 19</span>
                <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-bold text-brand-700 border border-brand-100">
                  {posts.length} posts
                </span>
              </div>
              <div className="space-y-2">
                {posts.map((p) => (
                  <button
                    key={p.id}
                    onClick={() => setActive(p)}
                    className={`w-full rounded-2xl border p-3.5 text-left transition-all duration-200 ${
                      active.id === p.id
                        ? 'border-brand-300 bg-brand-50 shadow-glow'
                        : 'border-slate-100 bg-white hover:border-brand-200 hover:bg-brand-50/40'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="w-7 shrink-0 text-center text-[10px] font-extrabold text-slate-400">
                        {p.day}
                      </span>
                      <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold border ${p.chBg} ${p.chColor}`}>
                        {p.channel.slice(0, 2).toUpperCase()}
                      </span>
                      <span className="flex-1 truncate text-sm font-medium text-slate-800">{p.title}</span>
                      <span className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyles[p.status]}`}>
                        {p.status}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* AI Brief panel */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              {/* Header */}
              <div className="flex items-start justify-between gap-3 border-b border-slate-100 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className={`rounded-full border px-2 py-0.5 text-[10px] font-bold ${active.chBg} ${active.chColor}`}>
                      {active.channel} · {active.type}
                    </span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${statusStyles[active.status]}`}>
                      {active.status}
                    </span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-slate-900">{active.title}</h3>
                </div>
                <span className="shrink-0 rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">
                  {active.brief.pillar}
                </span>
              </div>

              {/* Brief fields */}
              <div className="mt-5 space-y-4">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Goal</div>
                  <p className="mt-1 text-sm text-slate-700">{active.brief.goal}</p>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Opening Hook</div>
                  <p className="mt-1 text-sm font-medium italic text-slate-800">{active.brief.hook}</p>
                </div>

                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">AI-Draft Caption</div>
                  <div className="mt-1.5 rounded-2xl border border-slate-100 bg-slate-50 p-3">
                    <p className="text-sm leading-relaxed text-slate-700">{active.brief.caption}</p>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {active.brief.hashtags.map((h) => (
                        <span key={h} className="rounded-full bg-brand-100 px-2 py-0.5 text-[10px] font-semibold text-brand-700">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {active.brief.creator && (
                  <div>
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Creator Match</div>
                    <div className="mt-1.5 flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3 shadow-sm">
                      <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${active.brief.creator.gradient}`} />
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-slate-900">{active.brief.creator.name}</div>
                        <div className="text-xs text-slate-500">{active.brief.creator.followers} followers · {active.brief.creator.er} ER</div>
                      </div>
                      <a
                        href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP}
                        className="rounded-full bg-brand-600 px-3 py-1.5 text-xs font-semibold text-white shadow-glow transition hover:bg-brand-700"
                      >
                        {DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Invite'}
                      </a>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom CTA */}
              <div className="mt-6 rounded-2xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-4">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <div className="text-sm font-bold text-slate-900">Ready to build your own calendar?</div>
                    <div className="text-xs text-slate-500">Start free — no credit card required.</div>
                  </div>
                  <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary shrink-0">
                    {DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Start for free'}
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
