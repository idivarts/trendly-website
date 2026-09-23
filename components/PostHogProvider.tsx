'use client';

import { POSTHOG } from '@/lib/marketing-config';
import posthog from 'posthog-js';
import { useEffect } from 'react';

/**
 * Initialises PostHog for the marketing site.
 *
 * Renders nothing — it exists for the init effect, and sits beside
 * MarketingPixels in the root layout.
 *
 * No key configured ⇒ no-op, so a fork or a local build without the env var
 * behaves exactly as before rather than throwing.
 */
export default function PostHogProvider() {
  useEffect(() => {
    if (!POSTHOG.KEY) return;

    posthog.init(POSTHOG.KEY, {
      api_host: POSTHOG.HOST,

      // 'history_change' makes PostHog capture a pageview on App Router
      // client-side navigations, not just the first load. The manual
      // alternative needs useSearchParams, which forces a CSR bailout in a
      // static export (output: 'export') — this avoids that entirely.
      capture_pageview: 'history_change',

      // Anonymous visitors still produce events; person profiles are only
      // billed once someone identifies. This is the default, set explicitly.
      person_profiles: 'identified_only',

      // Cookie on .trendly.now rather than www.trendly.now, so the SAME
      // distinct_id follows a visitor into brands.trendly.now. This is what
      // connects an ad click on the marketing site to the signup that follows.
      cross_subdomain_cookie: true,
    });

    // Distinguishes this surface from the brand app and the connect bridge,
    // which report into the same production project.
    posthog.register({ site: 'website', environment: 'prod' });
  }, []);

  return null;
}
