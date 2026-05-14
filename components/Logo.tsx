export default function Logo({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src="/logo.png"
        alt="Trendly"
        className={`h-10 w-auto object-contain${dark ? ' brightness-0 invert' : ''}`}
      />
    </div>
  );
}
