import { APP_DOWNLOAD } from '@/lib/site-config';

/**
 * Official App Store + Google Play badges for the Trendly brand app.
 *
 * The artwork in `public/badge-*` is the vendors' own, unmodified: Apple's and
 * Google's marketing guidelines both forbid redrawing, recoloring or retyping
 * the badges, so these are <img> tags rather than hand-rolled SVG like the rest
 * of the site.
 *
 * The two files carry different built-in clear space (Apple's SVG is the badge
 * at its natural bounds; Google's PNG bakes in ~11% padding on every side), so
 * the Play badge is rendered taller than the App Store badge to make the two
 * black pills optically the same height. Tweak the pair together, never one.
 */

const SIZES = {
  md: { apple: 44, google: 56 },
  lg: { apple: 52, google: 66 },
} as const;

export default function StoreBadges({
  size = 'md',
  className = '',
}: {
  size?: keyof typeof SIZES;
  className?: string;
}) {
  const h = SIZES[size];

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={APP_DOWNLOAD.APP_STORE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Download Trendly on the App Store"
        className="inline-block rounded-xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
      >
        <img
          src="/badge-app-store.svg"
          alt="Download on the App Store"
          height={h.apple}
          width={Math.round(h.apple * (119.66407 / 40))}
          style={{ height: h.apple, width: 'auto' }}
        />
      </a>

      <a
        href={APP_DOWNLOAD.PLAY_STORE}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Get Trendly on Google Play"
        className="inline-block rounded-xl transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-600"
      >
        <img
          src="/badge-google-play.png"
          alt="Get it on Google Play"
          height={h.google}
          width={Math.round(h.google * (646 / 250))}
          style={{ height: h.google, width: 'auto' }}
        />
      </a>
    </div>
  );
}
