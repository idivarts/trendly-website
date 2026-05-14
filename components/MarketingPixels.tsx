'use client';

import Script from 'next/script';
import { MARKETING, isConfigured } from '@/lib/marketing-config';

/**
 * Renders all marketing/retargeting pixel scripts.
 * Each pixel fires only if its ID has been configured in lib/marketing-config.ts.
 * Mounted once in app/layout.tsx inside <body>.
 */
export default function MarketingPixels() {
  return (
    <>
      {/* ── Meta (Facebook / Instagram) Pixel ─────────────────────────────── */}
      {isConfigured(MARKETING.META_PIXEL_ID) && (
        <>
          <Script
            id="meta-pixel"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window,document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '${MARKETING.META_PIXEL_ID}');
                fbq('track', 'PageView');
              `,
            }}
          />
          {/* noscript fallback for non-JS environments */}
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src={`https://www.facebook.com/tr?id=${MARKETING.META_PIXEL_ID}&ev=PageView&noscript=1`}
              alt=""
            />
          </noscript>
        </>
      )}

      {/* ── Google Analytics 4 ─────────────────────────────────────────────── */}
      {isConfigured(MARKETING.GA4_MEASUREMENT_ID) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${MARKETING.GA4_MEASUREMENT_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="ga4-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${MARKETING.GA4_MEASUREMENT_ID}');
                ${
                  isConfigured(MARKETING.GOOGLE_ADS_ID)
                    ? `gtag('config', '${MARKETING.GOOGLE_ADS_ID}');`
                    : ''
                }
              `,
            }}
          />
        </>
      )}

      {/* ── Google Ads (standalone — only if GA4 is not already loaded) ────── */}
      {isConfigured(MARKETING.GOOGLE_ADS_ID) && !isConfigured(MARKETING.GA4_MEASUREMENT_ID) && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${MARKETING.GOOGLE_ADS_ID}`}
            strategy="afterInteractive"
          />
          <Script
            id="google-ads-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${MARKETING.GOOGLE_ADS_ID}');
              `,
            }}
          />
        </>
      )}

      {/* ── LinkedIn Insight Tag ───────────────────────────────────────────── */}
      {isConfigured(MARKETING.LINKEDIN_PARTNER_ID) && (
        <>
          <Script
            id="linkedin-insight"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                _linkedin_partner_id = "${MARKETING.LINKEDIN_PARTNER_ID}";
                window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
                window._linkedin_data_partner_ids.push(_linkedin_partner_id);
                (function(l) {
                  if (!l){window.lintrk = function(a,b){window.lintrk.q.push([a,b])};
                  window.lintrk.q=[]}
                  var s = document.getElementsByTagName("script")[0];
                  var b = document.createElement("script");
                  b.type = "text/javascript"; b.async = true;
                  b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
                  s.parentNode.insertBefore(b, s);
                })(window.lintrk);
              `,
            }}
          />
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              alt=""
              src={`https://px.ads.linkedin.com/collect/?pid=${MARKETING.LINKEDIN_PARTNER_ID}&fmt=gif`}
            />
          </noscript>
        </>
      )}

      {/* ── Twitter / X Pixel ─────────────────────────────────────────────── */}
      {isConfigured(MARKETING.TWITTER_PIXEL_ID) && (
        <Script
          id="twitter-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(e,t,n,s,u,a){e.twq||(s=e.twq=function(){s.exe?s.exe.apply(s,arguments):
              s.queue.push(arguments);},s.version='1.1',s.queue=[],u=t.createElement(n),u.async=!0,
              u.src='https://static.ads-twitter.com/uwt.js',a=t.getElementsByTagName(n)[0],
              a.parentNode.insertBefore(u,a))}(window,document,'script');
              twq('config','${MARKETING.TWITTER_PIXEL_ID}');
            `,
          }}
        />
      )}
    </>
  );
}
