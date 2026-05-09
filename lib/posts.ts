export type Post = {
  slug: string;
  date: string;
  cat: string;
  title: string;
  excerpt: string;
  gradient: string;
  body: string[]; // each entry is one paragraph
  readTime: string;
};

export const posts: Post[] = [
  {
    slug: 'why-people-dont-care-about-your-brand',
    date: '22 Aug',
    cat: 'Blog',
    title: "Why people don't care about your brand (and how to make them care)",
    excerpt:
      "Let's be honest. Nobody woke up today saying, \"Wow, I love this brand.\" Here's how to change that.",
    gradient: 'from-pink-500 via-rose-500 to-amber-400',
    readTime: '6 min read',
    body: [
      "Let's be honest — nobody woke up today saying \"I'm so excited to learn about your D2C brand.\" Attention is the rarest currency on the internet, and most brands are spending it like teenagers on a payday.",
      "If your messaging feels like a press release, your audience will treat it like one. People care about themselves, their problems, and the small daily wins they can claim. The brands they remember are the ones that show up at exactly those moments — not the ones that shout about features.",
      "Three quick rules we've seen work for early-stage Indian D2C brands. First, lead with the customer's small irritation, not your big mission. Second, give people a reason to repeat your name to a friend in one sentence. Third, partner with creators whose audiences already trust them — borrowed trust beats bought attention every time.",
      "This is the entire reason Trendly exists. Micro-creators talk to their followers like friends, and that friendship transfers to your brand when the fit is right. Stop trying to be everywhere and start showing up where it actually counts.",
    ],
  },
  {
    slug: 'influencer-marketing-doesnt-generate-leads-or-sales-myth',
    date: '06 Aug',
    cat: 'Blog',
    title: "Influencer marketing doesn't generate leads or sales — Myth!",
    excerpt:
      'Influencer marketing is often misunderstood. Many people think it just drives vanity metrics. Here is the data.',
    gradient: 'from-brand-500 via-accent-500 to-emerald-400',
    readTime: '5 min read',
    body: [
      "Every quarter, a founder tells us influencer marketing is \"just brand awareness, not performance.\" We get it — when your only experience is a 50,000-rupee spend that returned a single Instagram story, the skepticism is fair.",
      "But here is what the data on Trendly actually shows. Campaigns with five or more micro-creators in a single niche routinely return 4–7× their spend in tracked checkouts within 30 days. Coupon-coded collaborations make attribution painless. The myth dies when measurement starts.",
      "The trick is to stop treating influencer marketing as a single shot. Treat it like paid ads — small experiments, fast iteration, and double down on the creators who convert. Trendly's discovery and contract flow is built specifically for this style of campaign.",
      "If you have not tried it because you have heard it does not work, you have heard it from people who ran one campaign with a celebrity and called it quits. Run five with micro-creators, measure properly, and revisit the myth.",
    ],
  },
  {
    slug: 'how-to-build-a-winning-influencer-profile-on-trendly',
    date: '05 Aug',
    cat: 'How To',
    title: 'How to build a winning influencer profile on Trendly',
    excerpt:
      "Your Trendly profile is more than a formality — it's your pitch. Here's how to make it convert.",
    gradient: 'from-violet-500 via-purple-500 to-sky-400',
    readTime: '4 min read',
    body: [
      "Brands on Trendly browse hundreds of creators every day. Yours has roughly six seconds to communicate why you are the right fit for the next campaign in their niche. A great profile makes those six seconds count.",
      "Start with a clear bio. Two short lines: who your audience is and what problems they care about. Skip emojis-as-punctuation and lead with a specific niche. \"Mumbai mom of two — sharing budget-friendly recipes\" beats \"lifestyle creator ✨🌸\" every single time.",
      "Add three to five recent reels that represent your best work — not necessarily your most viral. Brands want to see consistency in tone, lighting, and pacing. Mix one promotional collaboration in there to show you can integrate brand mentions without breaking the vibe.",
      "Finally, fill in your rate card honestly. Brands respect creators who know their worth and price predictably. Ambiguous pricing leads to drop-off in negotiations. Trendly's profile editor walks you through each section — block out 30 minutes once and you will get invited to campaigns for the next year.",
    ],
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
