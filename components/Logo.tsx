export default function Logo({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative h-9 w-9">
        <div className="absolute inset-0 rounded-xl bg-gradient-brand shadow-glow" />
        <div className="absolute inset-[3px] rounded-[10px] bg-white/10 backdrop-blur-sm" />
        <svg viewBox="0 0 24 24" className="absolute inset-0 m-auto h-5 w-5 text-white" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 17l4-4 4 4 7-7" />
          <path d="M14 6h6v6" />
        </svg>
      </div>
      <span className={`font-display text-xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        Trendly
      </span>
    </div>
  );
}
