const brands = [
  'Dabur',
  'Haldiram',
  'SUGAR Cosmetics',
  'Earth Rhythm',
  'Quench',
  'BoldCare',
  'Mamaearth',
  'WOW Skin',
  'Plum',
  'mCaffeine',
  'Bewakoof',
  'Sleepyhead',
];

export default function LogosMarquee() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-10">
      <div className="container-px">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
          Trusted by 500+ startups & D2C brands
        </p>
      </div>
      <div className="mt-6 fade-mask overflow-hidden">
        <div className="flex w-max animate-marquee gap-12 whitespace-nowrap px-6">
          {[...brands, ...brands].map((b, i) => (
            <span
              key={i}
              className="text-2xl font-bold tracking-tight text-slate-400 transition hover:text-slate-700"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
