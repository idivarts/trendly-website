import ScrollReveal from '@/components/ScrollReveal';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';
import { SocialIcon, SocialRow, type SocialKey } from '@/components/SocialIcons';

const messages: { platform: SocialKey; name: string; text: string; kind: string }[] = [
  { platform: 'instagram', name: 'priya.skin', text: 'Is this good for oily skin?', kind: 'Comment' },
  { platform: 'tiktok', name: '@glowwithme', text: 'Where do I buy?? 😍', kind: 'DM' },
  { platform: 'facebook', name: 'Ravi M.', text: 'Do you ship to Canada?', kind: 'Message' },
  { platform: 'x', name: '@deepak', text: 'What’s the return policy?', kind: 'Reply' },
  { platform: 'youtube', name: '@beautybyana', text: 'Tutorial please! 🙌', kind: 'Comment' },
];

export default function UnifiedInbox() {
  return (
    <section className="relative py-16 sm:py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-brand-50/40 to-white" />
      <div className="container-px">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Left — copy */}
          <ScrollReveal className="lg:col-span-6" direction="left" distance={32}>
            <span className="section-eyebrow">One inbox</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl lg:text-5xl">
              Every comment, DM &amp; message —{' '}
              <span className="text-gradient-animated">one inbox</span>
            </h2>
            <p className="mt-5 text-slate-600">
              Stop hopping between apps to keep up with your audience. Trendly pulls every comment, DM, reply, and question from all your platforms into a single inbox — and AI drafts on-brand replies so nothing slips and no customer waits.
            </p>

            <div className="mt-7 space-y-4">
              {[
                { t: 'All platforms, one place', d: 'Instagram, TikTok, Facebook, X, YouTube — every conversation in a single feed.' },
                { t: 'AI-drafted replies', d: 'Trendly suggests an on-brand response to every message, ready to send or tweak.' },
                { t: 'Never miss a buyer', d: 'Buying questions get surfaced first — pairs perfectly with Impulse to convert them on the spot.' },
              ].map((w) => (
                <div key={w.t} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-none place-items-center rounded-full bg-brand-100 text-brand-700">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 7" /></svg>
                  </span>
                  <div>
                    <div className="text-sm font-bold text-slate-900">{w.t}</div>
                    <p className="mt-0.5 text-sm text-slate-600">{w.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_SIGNUP} className="btn-primary mt-8">{DISABLE_LOGIN_SIGNUP ? 'Book a demo' : 'Unify your inbox free'}</a>
          </ScrollReveal>

          {/* Right — inbox visual */}
          <ScrollReveal className="lg:col-span-6" direction="right" distance={32} delay={80}>
            <div className="relative mx-auto max-w-md">
              <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-slate-900">Inbox</span>
                  <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-[10px] font-bold text-brand-700 border border-brand-100">5 new</span>
                </div>

                {/* connected accounts strip */}
                <div className="mt-3 flex items-center gap-2 rounded-2xl border border-slate-100 bg-slate-50 px-3 py-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Connected</span>
                  <SocialRow size={24} className="!gap-1.5" />
                </div>

                <div className="mt-3 space-y-2">
                  {messages.map((m, i) => (
                    <div
                      key={m.name}
                      className={`flex items-center gap-3 rounded-2xl border p-3 ${i === 0 ? 'border-brand-200 bg-brand-50' : 'border-slate-100 bg-white'}`}
                    >
                      <SocialIcon platform={m.platform} size={28} />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-1.5">
                          <span className="truncate text-xs font-semibold text-slate-900">{m.name}</span>
                          <span className="text-[9px] text-slate-400">· {m.kind}</span>
                        </div>
                        <div className="truncate text-xs text-slate-500">{m.text}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI reply */}
                <div className="mt-3 rounded-2xl bg-gradient-to-r from-brand-50 to-accent-400/10 p-3">
                  <div className="flex items-center gap-1.5">
                    <svg className="h-3.5 w-3.5 text-brand-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M12 2L9 9H2l5.5 4-2 7L12 16l6.5 4-2-7L22 9h-7z" /></svg>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-700">AI reply ready</span>
                  </div>
                  <p className="mt-1.5 text-xs text-slate-700">&ldquo;Yes! It&apos;s perfect for oily skin — lightweight and non-greasy. Here&apos;s the link 👉&rdquo;</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
