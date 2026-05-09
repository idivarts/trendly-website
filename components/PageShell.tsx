import Navbar from './Navbar';
import Footer from './Footer';

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <div className="pt-24">{children}</div>
      <Footer />
    </main>
  );
}

/**
 * Standard hero block for inner pages — keeps the section pattern consistent.
 */
export function PageHero({
  eyebrow,
  title,
  subtitle,
  highlight,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
  highlight?: string;
}) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20">
      <div className="absolute inset-0 -z-10 bg-gradient-mesh opacity-70" />
      <div className="absolute inset-0 -z-10 grid-bg opacity-[0.25]" />
      <div className="container-px text-center">
        <span className="pill">{eyebrow}</span>
        <h1 className="h-display mt-4 text-4xl leading-tight sm:text-5xl lg:text-6xl">
          {highlight ? (
            <>
              {title.split(highlight)[0]}
              <span className="bg-gradient-brand bg-clip-text text-transparent">{highlight}</span>
              {title.split(highlight)[1]}
            </>
          ) : (
            title
          )}
        </h1>
        {subtitle && <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-600">{subtitle}</p>}
      </div>
    </section>
  );
}
