'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Carries ad-click attribution across the hop to the app subdomains.
 *
 * The problem: an ad click lands here on www.trendly.now carrying gclid /
 * fbclid / utm_*, then the visitor follows a CTA to brands.trendly.now — a
 * DIFFERENT origin. Those parameters are not forwarded, so the signup looks
 * organic and no campaign can ever be credited with it.
 *
 * Rather than editing the ~37 files that render a CTA (and needing every future
 * one to remember), this rewrites the hrefs once after hydration. Rewriting the
 * href rather than intercepting clicks is deliberate: it keeps middle-click and
 * "open in new tab" working, which a click handler would silently drop.
 *
 * Counterpart: utils/attribution.ts in trendly-brands, which reads these on
 * arrival and attaches them to signup_completed. Same parameter list — keep
 * them in sync.
 *
 * Note this is separate from PostHog identity, which already spans these hosts
 * via cross_subdomain_cookie. This is specifically the ad-platform click IDs,
 * which live in the URL and nowhere else.
 */

const TRACKED = [
    'gclid',
    'fbclid',
    'utm_source',
    'utm_medium',
    'utm_campaign',
    'utm_content',
    'utm_term',
] as const;

const STORAGE_KEY = 'attribution_v1';

type Attribution = Partial<Record<(typeof TRACKED)[number], string>>;

function readStored(): Attribution {
    try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        return raw ? (JSON.parse(raw) as Attribution) : {};
    } catch {
        // Private mode / blocked storage — degrade to URL-only.
        return {};
    }
}

function readFromUrl(): Attribution {
    const params = new URLSearchParams(window.location.search);
    const found: Attribution = {};
    for (const key of TRACKED) {
        const value = params.get(key);
        if (value) found[key] = value;
    }
    return found;
}

/**
 * Persist whatever this visit carries. A visit with no parameters must NOT
 * erase a previous paid click — the visitor may have arrived from an ad,
 * browsed, and come back directly before converting. A new campaign click does
 * overwrite: last non-empty touch wins, which is how the ad platforms
 * themselves attribute.
 */
function capture(): Attribution {
    const fromUrl = readFromUrl();
    if (Object.keys(fromUrl).length === 0) return readStored();

    try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
        // Nothing to do — the in-memory value below still decorates this page.
    }
    return fromUrl;
}

/** Any Trendly host that is not the one we are on, i.e. the app subdomains. */
function isAppHost(url: URL): boolean {
    return (
        (url.hostname === 'trendly.now' || url.hostname.endsWith('.trendly.now')) &&
        url.host !== window.location.host
    );
}

function decorate(attribution: Attribution): void {
    const entries = Object.entries(attribution);
    if (entries.length === 0) return;

    document.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((anchor) => {
        try {
            const url = new URL(anchor.href, window.location.href);
            if (!isAppHost(url)) return;

            let changed = false;
            for (const [key, value] of entries) {
                // Never clobber a parameter the link already sets itself.
                if (url.searchParams.has(key)) continue;
                url.searchParams.set(key, value);
                changed = true;
            }
            if (changed) anchor.href = url.toString();
        } catch {
            // Unparseable href (mailto:, tel:, malformed) — skip it.
        }
    });
}

export default function AttributionLinks() {
    // Re-runs on client-side navigation, where the freshly rendered page has
    // its own un-decorated anchors.
    const pathname = usePathname();

    useEffect(() => {
        decorate(capture());
    }, [pathname]);

    return null;
}
