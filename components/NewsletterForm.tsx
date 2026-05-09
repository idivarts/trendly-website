'use client';

export default function NewsletterForm() {
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="mx-auto mt-6 flex max-w-md items-center gap-2 rounded-full border border-slate-200 bg-white p-1.5 shadow-sm"
    >
      <input
        type="email"
        placeholder="you@brand.com"
        className="flex-1 bg-transparent px-3 text-sm outline-none"
      />
      <button className="btn-primary !py-2 !text-xs">Subscribe</button>
    </form>
  );
}
