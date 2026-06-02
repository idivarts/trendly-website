import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

// "Impulse" = Trendly's comment-to-cart automation. When a follower shows buying
// intent on a post (comments "Interested" / DMs), the AI instantly replies with
// the right link and nurtures them to purchase — capturing the impulse buy in the
// moment instead of losing it. (Proposed feature name — easy to rename.)

const steps = [
  {
    n: '01',
    title: 'A follower shows intent',
    desc: 'Someone comments "Interested", "Price?", or DMs your post. Impulse detects the buying signal in real time.',
  },
  {
    n: '02',
    title: 'AI replies instantly',
    desc: 'It sends the exact product link, answers the obvious questions, and keeps the tone on-brand — within seconds, not hours.',
  },
  {
    n: '03',
    title: 'They buy in the moment',
    desc: 'Impulse nurtures the conversation to checkout, so interest converts while it is hot — and never leaks to a competitor.',
  },
];

export default function Impulse() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left — copy */}
          <ScrollReveal className="lg:col-span-6" direction="left" distance={36}>
            <span className="pill">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
              New · Impulse
            </span>
            <h2 className="h-display mt-4 text-3xl sm:text-4xl lg:text-5xl">
              Turn comments into{' '}
              <span className="text-gradient-animated">customers</span> — automatically
            </h2>
            <p className="mt-5 text-slate-600">
              The moment someone comments &ldquo;Interested&rdquo; or DMs your post, <strong>Impulse</strong> replies instantly with the right buy link and keeps the conversation going — so you capture the sale in the first interaction, before interest fades.
            </p>

            <ul className="mt-7 space-y-4">
              {steps.map((s) => (
                <li key={s.n} className="flex items-start gap-4">
                  <span className="grid h-9 w-9 flex-none place-items-center rounded-2xl bg-gradient-brand text-xs font-bold text-white shadow-glow">
                    {s.n}
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{s.title}</div>
                    <p className="mt-0.5 text-sm text-slate-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href="/product/impulse" className="btn-primary">See how Impulse works</a>
              <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-ghost">{DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Start for free'}</a>
            </div>
          </ScrollReveal>

          {/* Right — chat mock visual */}
          <ScrollReveal className="lg:col-span-6" direction="right" distance={36} delay={80}>
            <div className="relative mx-auto max-w-md">
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-gradient-brand opacity-25 blur-2xl" />
              <div className="absolute -bottom-8 -left-8 h-28 w-28 rounded-2xl bg-accent-400 opacity-20 blur-2xl" />

              <div className="relative rounded-3xl border border-slate-200 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]">
                {/* post header */}
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <div className="h-9 w-9 rounded-full bg-gradient-to-br from-pink-400 to-rose-500" />
                  <div>
                    <div className="text-sm font-bold text-slate-900">your_brand</div>
                    <div className="text-[10px] text-slate-400">New Reel · 2,418 likes</div>
                  </div>
                  <span className="ml-auto rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">
                    Impulse on
                  </span>
                </div>

                {/* conversation */}
                <div className="mt-4 space-y-3">
                  {/* user comment */}
                  <div className="flex justify-end">
                    <div className="max-w-[80%] rounded-2xl rounded-tr-sm bg-slate-100 px-3.5 py-2 text-sm text-slate-700">
                      😍 Obsessed! How much &amp; where do I get it?
                    </div>
                  </div>
                  {/* AI auto reply */}
                  <div className="flex items-end gap-2">
                    <div className="grid h-6 w-6 flex-none place-items-center rounded-full bg-gradient-brand text-white">
                      <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" />
                      </svg>
                    </div>
                    <div className="max-w-[82%] rounded-2xl rounded-tl-sm bg-gradient-to-br from-brand-600 to-brand-700 px-3.5 py-2 text-sm text-white shadow-glow">
                      Hi! It&apos;s $48 and ships free. Grab it here 👉 <span className="underline">trendly.now/shop/hero</span> — want me to hold one for you?
                    </div>
                  </div>
                  {/* auto badge */}
                  <div className="flex items-center gap-1.5 pl-8 text-[10px] font-semibold text-slate-400">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Sent automatically · 3s after comment
                  </div>
                  {/* converted */}
                  <div className="flex items-center justify-between rounded-2xl border border-emerald-100 bg-emerald-50 px-3.5 py-2.5">
                    <span className="text-xs font-semibold text-emerald-700">✅ Order placed — $48</span>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600">Converted</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
