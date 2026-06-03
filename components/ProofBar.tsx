import { PROOF } from '@/lib/site-config';

// Slim, honest social-proof bar for the homepage (numbers live here, not on About).
const stats = [
  { v: PROOF.creators, l: 'Creators on the platform' },
  { v: PROOF.brands, l: 'Brand campaigns by our team' },
  { v: '$0', l: 'To get started — free forever' },
];

export default function ProofBar() {
  return (
    <section className="border-y border-slate-200/70 bg-white py-10 sm:py-12">
      <div className="container-px">
        <div className="mx-auto grid max-w-3xl gap-6 text-center sm:grid-cols-3">
          {stats.map((s) => (
            <div key={s.l}>
              <div className="bg-gradient-brand bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">{s.v}</div>
              <div className="mt-1 text-sm text-slate-600">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
