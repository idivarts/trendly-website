export default function Logo({ className = '', dark = false }: { className?: string; dark?: boolean }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img
        src={dark ? '/trendly-primary-horizontal-white.png' : "/trendly-primary-horizontal-dark.png"}
        alt="Trendly"
        className={`h-10 w-auto object-contain`}
      />
    </div>
  );
}
