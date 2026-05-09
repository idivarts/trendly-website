export default function CTA() {
  return (
    <section className="relative py-24">
      <div className="container-px">
        <div className="relative overflow-hidden rounded-[36px] border border-brand-100 bg-gradient-to-br from-brand-600 via-brand-700 to-accent-600 p-10 text-white shadow-glow sm:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-10 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
                Ready when you are
              </span>
              <h2 className="h-display mt-4 text-4xl text-white sm:text-5xl">
                Launch your first campaign in under 10 minutes
              </h2>
              <p className="mt-4 max-w-lg text-white/80">
                Free 3-day trial. No credit card required. Start discovering verified micro-creators today.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href="https://openinapp.link/b5aqc"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-700 shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
                >
                  Try free for 3 days
                  <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </a>
                <a
                  href="https://cal.com/rahul-idiv/30min"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Book a Demo
                </a>
              </div>
            </div>

            <div className="relative grid grid-cols-3 gap-3">
              {[
                { v: '10k+', l: 'Verified creators' },
                { v: '₹750', l: 'Starts from / mo' },
                { v: '92%', l: 'Trust score avg.' },
                { v: '500+', l: 'Brands trust us' },
                { v: '4.8%', l: 'Avg engagement' },
                { v: '3 days', l: 'Free trial' },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur"
                >
                  <div className="text-xl font-extrabold text-white">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wider text-white/70">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
