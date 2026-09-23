// Recognizable social platform "app icon" chips (brand color + white glyph).
// Used to make it obvious Trendly connects Instagram, TikTok, LinkedIn, X,
// YouTube and Facebook in one place.

export type SocialKey = 'instagram' | 'tiktok' | 'linkedin' | 'x' | 'youtube' | 'facebook';

const GLYPHS: Record<SocialKey, React.ReactNode> = {
  instagram: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="h-full w-full">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
      <circle cx="12" cy="12" r="4.2" />
      <circle cx="17.3" cy="6.7" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M16.5 3c.3 2.1 1.5 3.4 3.5 3.6v2.4c-1.2.1-2.3-.3-3.5-1v5.6c0 4-3.3 6.2-6.6 5-2.6-1-3.6-4.3-2-6.7 1-1.6 3-2.4 4.9-2v2.6c-.3-.1-.6-.1-.9-.1-1 0-1.8.8-1.8 1.8s.8 1.9 1.9 1.9c1.1 0 2-.8 2-2V3h2.5z" />
    </svg>
  ),
  linkedin: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zM10 9h3.8v1.7h.06c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.77 2.65 4.77 6.1V21h-4v-5.4c0-1.3 0-3-1.83-3-1.83 0-2.11 1.43-2.11 2.9V21h-4z" />
    </svg>
  ),
  x: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.96 6.82H1.68l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z" />
    </svg>
  ),
  youtube: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M9 8l8 4-8 4z" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-full w-full">
      <path d="M22 12a10 10 0 1 0-11.6 9.9V15H8v-3h2.4V9.6c0-2.4 1.4-3.8 3.6-3.8 1 0 2.1.2 2.1.2v2.3H15c-1.2 0-1.6.7-1.6 1.5V12h2.7l-.4 3h-2.3v6.9A10 10 0 0 0 22 12z" />
    </svg>
  ),
};

export const SOCIALS: { key: SocialKey; label: string; bg: string }[] = [
  { key: 'instagram', label: 'Instagram', bg: 'linear-gradient(45deg,#feda75,#fa7e1e 25%,#d62976 55%,#962fbf 80%,#4f5bd5)' },
  { key: 'tiktok', label: 'TikTok', bg: '#010101' },
  { key: 'linkedin', label: 'LinkedIn', bg: '#0A66C2' },
  { key: 'x', label: 'X', bg: '#000000' },
  { key: 'youtube', label: 'YouTube', bg: '#FF0000' },
  { key: 'facebook', label: 'Facebook', bg: '#1877F2' },
];

const BG: Record<SocialKey, string> = Object.fromEntries(SOCIALS.map((s) => [s.key, s.bg])) as Record<SocialKey, string>;
const LABEL: Record<SocialKey, string> = Object.fromEntries(SOCIALS.map((s) => [s.key, s.label])) as Record<SocialKey, string>;

/** A single brand app-icon chip. `size` is the chip's px dimension. */
export function SocialIcon({ platform, size = 40, className = '' }: { platform: SocialKey; size?: number; className?: string }) {
  return (
    <span
      title={LABEL[platform]}
      aria-label={LABEL[platform]}
      className={`inline-grid flex-none place-items-center rounded-xl text-white shadow-sm ${className}`}
      style={{ background: BG[platform], width: size, height: size }}
    >
      <span style={{ width: size * 0.56, height: size * 0.56 }}>{GLYPHS[platform]}</span>
    </span>
  );
}

/** A horizontal row of all platform icons — the "every account, connected" strip. */
export function SocialRow({ size = 40, className = '' }: { size?: number; className?: string }) {
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {SOCIALS.map((s) => (
        <SocialIcon key={s.key} platform={s.key} size={size} />
      ))}
    </div>
  );
}
