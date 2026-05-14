'use client';
import { useMemo, useState } from 'react';
import { LINKS } from '@/lib/site-config';

const UNS = 'https://images.unsplash.com/photo-';
const AV  = '?w=200&h=200&fit=crop&auto=format&q=80';

type Influencer = {
  name: string;
  niche: string;
  city: string;
  followers: number;
  er: number;
  trust: number;
  gradient: string;
  avatar: string;
  verified: boolean;
};

const all: Influencer[] = [
  { name: 'Aanya Sharma',  niche: 'Lifestyle',  city: 'Mumbai',    followers: 38400,  er: 4.8, trust: 92, gradient: 'from-pink-400 to-rose-500',     avatar: UNS+'1531746020798-e6953c6e8e04'+AV, verified: true  },
  { name: 'Rohan Mehta',   niche: 'Fitness',     city: 'Bangalore', followers: 52100,  er: 6.2, trust: 88, gradient: 'from-emerald-400 to-teal-500',   avatar: UNS+'1507003211169-0a1dd7228f2d'+AV, verified: true  },
  { name: 'Priya Iyer',    niche: 'Food',        city: 'Delhi',     followers: 24600,  er: 5.4, trust: 85, gradient: 'from-amber-400 to-orange-500',   avatar: UNS+'1438761681033-6461ffad8d80'+AV, verified: false },
  { name: 'Karan Joshi',   niche: 'Tech',        city: 'Bangalore', followers: 61200,  er: 3.9, trust: 90, gradient: 'from-sky-400 to-indigo-500',     avatar: UNS+'1500648767791-00dcc994a43e'+AV, verified: true  },
  { name: 'Meera Pillai',  niche: 'Fashion',     city: 'Mumbai',    followers: 88300,  er: 4.1, trust: 84, gradient: 'from-violet-400 to-purple-500',  avatar: UNS+'1517841905240-472988babdf9'+AV, verified: true  },
  { name: 'Vikas Kumar',   niche: 'Comedy',      city: 'Delhi',     followers: 142000, er: 7.1, trust: 81, gradient: 'from-fuchsia-400 to-pink-500',   avatar: UNS+'1539571696357-5a69c17a67c6'+AV, verified: false },
  { name: 'Tara Nair',     niche: 'Travel',      city: 'Pune',      followers: 31200,  er: 5.2, trust: 89, gradient: 'from-cyan-400 to-sky-500',       avatar: UNS+'1534528741775-53994a69daeb'+AV, verified: true  },
  { name: 'Devansh Roy',   niche: 'Education',   city: 'Kolkata',   followers: 19500,  er: 8.0, trust: 95, gradient: 'from-lime-400 to-emerald-500',   avatar: UNS+'1552058544-f2b08422138a'+AV,    verified: true  },
  { name: 'Sana Khan',     niche: 'Beauty',      city: 'Hyderabad', followers: 47800,  er: 5.7, trust: 87, gradient: 'from-rose-400 to-pink-600',      avatar: UNS+'1573496799652-408c2ac9fe98'+AV, verified: true  },
  { name: 'Aditya Rao',    niche: 'Gaming',      city: 'Chennai',   followers: 76500,  er: 6.6, trust: 86, gradient: 'from-indigo-400 to-violet-600',  avatar: UNS+'1506794778202-cad84cf45f1d'+AV, verified: false },
];

const niches = ['All', 'Lifestyle', 'Fitness', 'Food', 'Tech', 'Fashion', 'Comedy', 'Travel', 'Education', 'Beauty', 'Gaming'];
const cities = ['All', 'Mumbai', 'Bangalore', 'Delhi', 'Pune', 'Kolkata', 'Hyderabad', 'Chennai'];

function fmt(n: number) {
  if (n >= 1000) return (n / 1000).toFixed(n >= 100000 ? 0 : 1) + 'k';
  return String(n);
}

export default function InteractiveDemo() {
  const [niche, setNiche] = useState('All');
  const [city, setCity] = useState('All');
  const [maxFollowers, setMaxFollowers] = useState(150000);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const filtered = useMemo(() => {
    return all.filter(
      (c) =>
        (niche === 'All' || c.niche === niche) &&
        (city === 'All' || c.city === city) &&
        c.followers <= maxFollowers &&
        (!verifiedOnly || c.verified),
    );
  }, [niche, city, maxFollowers, verifiedOnly]);

  return (
    <section className="relative py-24">
      <div className="absolute inset-x-0 top-0 -z-10 h-1/2 bg-gradient-to-b from-brand-50/50 to-transparent" />
      <div className="container-px">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">Try it live</span>
          <h2 className="h-display mt-3 text-4xl sm:text-5xl">
            Discover creators in <span className="bg-gradient-brand bg-clip-text text-transparent">real time</span>
          </h2>
          <p className="mt-4 text-slate-600">
            Tweak the filters and watch the results refresh instantly. This is a glimpse of what your search experience
            looks like inside Trendly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-12">
          {/* Filters */}
          <aside className="lg:col-span-4">
            <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-6 shadow-soft">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-brand text-white shadow-glow">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <path d="M4 6h16M7 12h10M10 18h4" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900">Filters</div>
                  <div className="text-xs text-slate-500">{filtered.length} creators match</div>
                </div>
              </div>

              <div className="mt-6 space-y-5">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Niche</label>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {niches.map((n) => (
                      <button
                        key={n}
                        onClick={() => setNiche(n)}
                        className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${
                          niche === n
                            ? 'border-brand-600 bg-brand-600 text-white shadow-glow'
                            : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 hover:text-brand-700'
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Location</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 outline-none transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  >
                    {cities.map((c) => (
                      <option key={c}>{c}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-slate-500">
                    Max followers
                    <span className="font-bold text-brand-700">{fmt(maxFollowers)}</span>
                  </label>
                  <input
                    type="range"
                    min={10000}
                    max={150000}
                    step={5000}
                    value={maxFollowers}
                    onChange={(e) => setMaxFollowers(Number(e.target.value))}
                    className="mt-3 w-full accent-brand-600"
                  />
                </div>

                <label className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
                  <span className="text-sm font-medium text-slate-700">Verified only</span>
                  <button
                    type="button"
                    onClick={() => setVerifiedOnly((v) => !v)}
                    className={`relative h-6 w-11 rounded-full transition ${verifiedOnly ? 'bg-brand-600' : 'bg-slate-300'}`}
                    aria-pressed={verifiedOnly}
                  >
                    <span
                      className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition ${
                        verifiedOnly ? 'left-[22px]' : 'left-0.5'
                      }`}
                    />
                  </button>
                </label>

              </div>
            </div>
          </aside>

          {/* Results */}
          <div className="lg:col-span-8">
            <div className="grid gap-4 sm:grid-cols-2">
              {filtered.map((c) => (
                <div
                  key={c.name}
                  className="group rounded-3xl border border-slate-200 bg-white p-5 transition hover:-translate-y-0.5 hover:border-brand-200 hover:shadow-glow"
                >
                  <div className="flex items-center gap-3">
                    <div className={`relative h-12 w-12 flex-none overflow-hidden rounded-2xl bg-gradient-to-br ${c.gradient}`}>
                      <img src={c.avatar} alt={c.name} className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-1">
                        <span className="text-sm font-bold text-slate-900">{c.name}</span>
                        {c.verified && (
                          <svg className="h-4 w-4 text-brand-600" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2 9.6 5.4 5.6 6 6 10l-3 3 3 3-.4 4 4 .6L12 22l2.4-3.4 4-.6-.4-4 3-3-3-3-.4-4-4-.6L12 2zm-1 14-4-4 1.5-1.5L11 13l4.5-4.5L17 10l-6 6z" />
                          </svg>
                        )}
                      </div>
                      <div className="text-xs text-slate-500">
                        {c.niche} • {c.city}
                      </div>
                    </div>
                    <div className="grid h-9 w-9 place-items-center rounded-xl bg-brand-50 text-brand-700 transition group-hover:bg-brand-600 group-hover:text-white">
                      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </div>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="rounded-xl bg-slate-50 px-2 py-2">
                      <div className="text-sm font-extrabold text-slate-900">{fmt(c.followers)}</div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-500">Followers</div>
                    </div>
                    <div className="rounded-xl bg-brand-50 px-2 py-2">
                      <div className="text-sm font-extrabold text-brand-700">{c.er}%</div>
                      <div className="text-[10px] uppercase tracking-wider text-brand-700/80">Engagement</div>
                    </div>
                    <div className="rounded-xl bg-emerald-50 px-2 py-2">
                      <div className="text-sm font-extrabold text-emerald-700">{c.trust}</div>
                      <div className="text-[10px] uppercase tracking-wider text-emerald-700/80">Trust</div>
                    </div>
                  </div>
                </div>
              ))}
              {filtered.length === 0 && (
                <div className="col-span-2 rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center text-slate-500">
                  No creators match these filters. Try widening your search.
                </div>
              )}
            </div>

            <div className="mt-6 rounded-3xl border border-brand-100 bg-gradient-to-br from-brand-50 to-white p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <div className="text-sm font-bold text-slate-900">This is a sample of 10 creators</div>
                  <div className="text-xs text-slate-600">Sign up to search 10,000+ verified micro-creators with 30+ advanced filters.</div>
                </div>
                <a href={LINKS.BRAND_SIGNUP} className="btn-primary">
                  Try free for 3 days
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
