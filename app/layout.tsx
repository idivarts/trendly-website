import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: 'Trendly — Find the Right Micro Influencers to Grow Your Brand',
    template: '%s — Trendly',
  },
  description:
    'Trendly is the smartest way for startups and SMBs to discover, hire, and manage micro-influencers. Launch authentic campaigns from ₹750 with verified creators.',
  metadataBase: new URL('https://www.trendly.now'),
  // ── Canonical & indexing ──────────────────────────────────────────────────
  alternates: {
    canonical: 'https://www.trendly.now',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    title: 'Trendly — Influencer Marketing for Indian Startups',
    description:
      'Discover 10,000+ verified micro-creators, manage campaigns end-to-end, and pay only on delivery. From ₹750/month.',
    url: 'https://www.trendly.now',
    siteName: 'Trendly',
    locale: 'en_IN',
    type: 'website',
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'Trendly — Micro Influencer Marketing Platform for Indian Startups',
      },
    ],
  },
  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@trendlynow',
    creator: '@trendlynow',
    title: 'Trendly — Influencer Marketing for Indian Startups',
    description:
      'Discover 10,000+ verified micro-creators, manage campaigns end-to-end, and pay only on delivery. From ₹750/month.',
    images: ['/og-default.png'],
  },
  // ── App / browser hints ───────────────────────────────────────────────────
  applicationName: 'Trendly',
  keywords: [
    'influencer marketing India',
    'micro influencer platform',
    'influencer marketing for startups',
    'find influencers India',
    'influencer marketing saas',
    'instagram influencer marketing',
    'D2C influencer marketing',
  ],
  authors: [{ name: 'Trendly — IDIVARTS Solutions Pvt Ltd', url: 'https://www.trendly.now' }],
  creator: 'IDIVARTS Solutions Pvt Ltd',
  publisher: 'IDIVARTS Solutions Pvt Ltd',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-700 antialiased">{children}</body>
    </html>
  );
}
