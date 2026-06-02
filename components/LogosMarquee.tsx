import { PROOF } from '@/lib/site-config';

// Honest "trust bar": the channels Trendly plans & publishes to (real product
// scope) + the team's verified track record — no fabricated customer logos.
const channels = [
  'Instagram',
  'TikTok',
  'LinkedIn',
  'X',
  'YouTube',
  'Pinterest',
  'Threads',
  'Facebook',
];

export default function LogosMarquee() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-10">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Plan, create &amp; publish across every channel that matters
        </p>
        <p className="mt-2 text-center text-sm text-slate-500">
          {PROOF.brandsLabel} · {PROOF.creatorsLabel}
        </p>
      </div>
      <div className="mt-6 fade-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
          {[...channels, ...channels].map((c, i) => (
            <span
              key={i}
              className="text-2xl font-bold tracking-tight text-slate-400 transition hover:text-slate-700"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
