import PageShell, { PageHero } from '@/components/PageShell';
import ScrollReveal from '@/components/ScrollReveal';
import StoreBadges from '@/components/StoreBadges';
import { PhoneMock } from '@/components/DownloadApp';
import CTA from '@/components/CTA';
import JsonLd, { breadcrumbSchema, faqSchema, mobileApplicationSchema } from '@/components/JsonLd';
import { LINKS, DISABLE_LOGIN_SIGNUP } from '@/lib/site-config';

export const metadata = {
  title: 'Download the Trendly app — AI social planner for iOS & Android',
  description:
    'Get Trendly on iPhone and Android. Plan your content calendar, review and approve AI drafts, schedule to every channel, and answer comments and DMs — from your phone. Free to download.',
};

const features = [
  {
    t: 'Your calendar, in your pocket',
    d: 'See the week at a glance, drag a post to a new slot, and spot the gaps before they become a quiet week.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="5" width="18" height="16" rx="3" />
        <path d="M8 3v4M16 3v4M3 11h18" />
      </svg>
    ),
  },
  {
    t: 'Approve without a laptop',
    d: 'Your teammate generates, you review. Clear the approval queue between meetings instead of at the end of the day.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l2 2 4-4" />
        <path d="M21 12a9 9 0 1 1-9-9" />
      </svg>
    ),
  },
  {
    t: 'Create with every AI model',
    d: 'Captions, images and scripts from one prompt — the same models you get on the web, routed to whichever is best for the job.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3l1.9 4.6L18.5 9.5l-4.6 1.9L12 16l-1.9-4.6L5.5 9.5l4.6-1.9z" />
        <path d="M18 15l.9 2.1L21 18l-2.1.9L18 21l-.9-2.1L15 18l2.1-.9z" />
      </svg>
    ),
  },
  {
    t: 'Publish and reschedule anywhere',
    d: 'Push a post live now or move it to next Tuesday — across every channel you have connected.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="M22 2l-7 20-4-9-9-4z" />
      </svg>
    ),
  },
  {
    t: 'One inbox for comments and DMs',
    d: 'Every reply from every connected account in one thread list, so nothing sits unanswered for three days.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.4 8.4 0 0 1-9 8.4 9 9 0 0 1-3.3-.6L3 21l1.8-5.1A8.4 8.4 0 0 1 12 3a8.5 8.5 0 0 1 9 8.5z" />
      </svg>
    ),
  },
  {
    t: 'Push notifications that matter',
    d: 'Know when something needs your approval, when a post goes live, and when a comment needs a human.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8" />
        <path d="M13.7 21a2 2 0 0 1-3.4 0" />
      </svg>
    ),
  },
];

const faqs = [
  {
    q: 'Is the Trendly app free?',
    a: 'Yes. The app is free to download on both the App Store and Google Play, and the Free plan is free forever with no credit card. Paid plans add more brands, more seats and a bigger monthly AI token allowance.',
  },
  {
    q: 'Do I need a separate account for the app?',
    a: 'No. It is the same Trendly account and the same workspace as the web app — sign in once on your phone and your brands, calendar, drafts and connected channels are already there.',
  },
  {
    q: 'Which devices are supported?',
    a: 'iPhone on the App Store and Android phones on Google Play. There is no tablet build yet — on an iPad or a larger screen, use the web app in your browser.',
  },
  {
    q: 'Can I do everything from the phone?',
    a: 'The app covers the day-to-day: the calendar, creating and editing posts, approvals, scheduling, publishing and the inbox. Longer-form work like writing a full content strategy document is simply easier on a bigger screen, so most teams do that on the web and run the week from their phone.',
  },
];

export default function Page() {
  return (
    <PageShell>
      <JsonLd
        data={[
          mobileApplicationSchema(),
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Download', path: '/download' },
          ]),
          faqSchema(faqs),
        ]}
      />

      <PageHero
        eyebrow="Mobile app"
        title="Get Trendly on iPhone and Android"
        highlight="iPhone and Android"
        subtitle="Plan, create, approve and publish your social content from your phone — the same workspace you use on the web, in your pocket."
      />

      {/* Badges + phone */}
      <section className="pb-16 sm:pb-20">
        <div className="container-px">
          <ScrollReveal className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 flex justify-center lg:order-1 lg:justify-end">
              <PhoneMock />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="h-display text-2xl sm:text-3xl">Download it free</h2>
              <p className="mt-3 max-w-md text-slate-600">
                No credit card, no trial clock. Install the app, sign in with your Trendly account, and your calendar is
                waiting for you.
              </p>

              <StoreBadges size="lg" className="mt-7" />

              {/* BRAND_WEB_APP, not BRAND_SIGNUP: this is the one link on the
                  site where the user has said they want the web, so it skips
                  the app-download interstitial. See the note on the constant. */}
              <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
                <div className="text-sm font-semibold text-slate-900">Prefer a bigger screen?</div>
                <p className="mt-1 text-sm text-slate-600">
                  Trendly runs in the browser too — no install, same workspace.
                </p>
                <a
                  href={DISABLE_LOGIN_SIGNUP ? LINKS.BOOK_DEMO : LINKS.BRAND_WEB_APP}
                  className="mt-3 inline-flex text-sm font-semibold text-brand-700 underline-offset-2 hover:underline"
                >
                  {DISABLE_LOGIN_SIGNUP ? 'Book a demo →' : 'Open the web app →'}
                </a>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What you can do */}
      <section className="border-y border-slate-200/70 bg-white py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-2xl text-center">
            <span className="section-eyebrow">On the go</span>
            <h2 className="h-display mt-3 text-3xl sm:text-4xl">What you can do from your phone</h2>
            <p className="mt-4 text-slate-600">
              Not a cut-down companion app — the work you actually do in a week, on the device you actually have on you.
            </p>
          </ScrollReveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f, i) => (
              <ScrollReveal key={f.t} delay={i * 60}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:shadow-glow">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-50 text-brand-600">
                    <span className="h-5 w-5">{f.icon}</span>
                  </span>
                  <div className="mt-4 font-semibold text-slate-900">{f.t}</div>
                  <p className="mt-2 text-sm text-slate-600">{f.d}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24">
        <div className="container-px">
          <ScrollReveal className="mx-auto max-w-3xl">
            <h2 className="h-display text-center text-3xl sm:text-4xl">Questions about the app</h2>
            <div className="mt-10 space-y-4">
              {faqs.map((f) => (
                <div key={f.q} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
                  <div className="font-semibold text-slate-900">{f.q}</div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{f.a}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col items-center gap-4 text-center">
              <div className="text-sm font-semibold text-slate-900">Ready when you are</div>
              <StoreBadges />
            </div>
          </ScrollReveal>
        </div>
      </section>

      <CTA />
    </PageShell>
  );
}
