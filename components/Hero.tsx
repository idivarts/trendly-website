export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 pb-20 sm:pt-36 sm:pb-28">
      {/* Background mesh + grid */}
      <div className="absolute inset-0 bg-gradient-mesh" />
      <div className="absolute inset-0 grid-bg opacity-[0.35]" />
      <div className="absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-brand-300/30 blur-3xl" />
      <div className="absolute -bottom-40 left-[-10%] h-[420px] w-[420px] rounded-full bg-accent-400/20 blur-3xl" />

      <div className="container-px relative">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="pill animate-fade-up">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600" />
              For Influencer Discovery
            </span>
            <h1 className="h-display mt-5 text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Find{' '}
              <span className="relative inline-block">
                <span className="bg-gradient-brand bg-clip-text text-transparent">powerful micro</span>
                <svg
                  viewBox="0 0 200 12"
                  preserveAspectRatio="none"
                  className="absolute -bottom-2 left-0 h-3 w-full text-brand-300"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                >
                  <path d="M2 9 C 60 1, 140 1, 198 9" />
                </svg>
              </span>{' '}
              influencers to grow your brand
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-600">
              Your startup journey begins here. Discover thousands of verified micro-creators with mind-blowing filters,
              run end-to-end campaigns, and pay only after they deliver.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="https://openinapp.link/b5aqc" className="btn-primary">
                Try free for 3 days
                <svg className="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
              <a href="https://cal.com/rahul-idiv/30min" className="btn-ghost">
                <svg className="mr-2 h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
                Book a Demo
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  'from-pink-400 to-rose-500',
                  'from-amber-400 to-orange-500',
                  'from-emerald-400 to-teal-500',
                  'from-sky-400 to-indigo-500',
                  'from-violet-400 to-purple-500',
                ].map((g, i) => (
                  <div
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-white bg-gradient-to-br ${g} shadow`}
                  />
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-slate-900">10,000+ creators</div>
                <div className="text-xs text-slate-500">Verified micro-influencers under 100k followers</div>
              </div>
            </div>
          </div>

          {/* Hero visual: stylized app preview */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md animate-fade-up">
              <div className="absolute -top-6 -left-8 h-20 w-20 rounded-2xl bg-gradient-brand opacity-30 blur-2xl" />
              <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-2xl bg-accent-400 opacity-25 blur-2xl" />

              {/* App card */}
              <div className="relative rounded-3xl border border-slate-200/80 bg-white p-5 shadow-[0_30px_80px_-20px_rgba(15,23,42,0.25)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <div className="text-xs text-slate-400">trendly.now/discover</div>
                </div>
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-slate-50 px-3 py-2">
                  <svg className="h-4 w-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="7" />
                    <path d="m20 20-3.5-3.5" />
                  </svg>
                  <span className="text-sm text-slate-500">Search "fitness creators in Mumbai..."</span>
                </div>
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {['Fashion', 'Food', 'Fitness'].map((t) => (
                    <span key={t} className="rounded-full bg-brand-50 px-3 py-1 text-center text-xs font-semibold text-brand-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 space-y-3">
                  {[
                    { name: 'Aanya Sharma', niche: 'Lifestyle • Mumbai', followers: '38.4k', color: 'from-pink-400 to-rose-500' },
                    { name: 'Rohan Mehta', niche: 'Fitness • Bangalore', followers: '52.1k', color: 'from-emerald-400 to-teal-500' },
                    { name: 'Priya Iyer', niche: 'Food • Delhi', followers: '24.6k', color: 'from-amber-400 to-orange-500' },
                  ].map((c) => (
                    <div key={c.name} className="flex items-center justify-between rounded-2xl border border-slate-100 p-3 transition hover:border-brand-200 hover:bg-brand-50/40">
                      <div className="flex items-center gap-3">
                        <div className={`h-10 w-10 rounded-full bg-gradient-to-br ${c.color}`} />
                        <div>
                          <div className="text-sm font-semibold text-slate-900">{c.name}</div>
                          <div className="text-xs text-slate-500">{c.niche}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-slate-900">{c.followers}</div>
                        <div className="text-[10px] uppercase tracking-wider text-slate-400">followers</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -left-10 bottom-6 hidden animate-float rounded-2xl border border-slate-200 bg-white p-3 shadow-lg sm:block">
                <div className="text-[10px] uppercase tracking-wider text-slate-500">Engagement Rate</div>
                <div className="mt-1 text-2xl font-extrabold text-slate-900">4.8%</div>
                <div className="text-xs font-medium text-emerald-600">+1.2% vs avg</div>
              </div>
              <div className="absolute -right-6 -top-6 hidden animate-float rounded-2xl bg-gradient-brand p-3 text-white shadow-glow sm:block" style={{ animationDelay: '1.5s' }}>
                <div className="text-[10px] uppercase tracking-wider opacity-80">Trust Score</div>
                <div className="mt-1 text-2xl font-extrabold">92</div>
                <div className="text-xs opacity-90">Verified ✓</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
