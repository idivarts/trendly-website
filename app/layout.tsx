import MarketingPixels from '@/components/MarketingPixels';
import type { Metadata } from 'next';
// @ts-ignore - Next.js 14 app router types are still in RC and not yet included in @types/next
import './globals.css';

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: 'Trendly — Your Entire Marketing Workflow in One Place',
    template: '%s — Trendly',
  },
  description:
    'Trendly is an AI-powered marketing workspace for modern teams. Build your content strategy, plan your calendar, collaborate on approvals, and find the right creators — all in one place.',
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
    title: 'Trendly — Your Entire Marketing Workflow in One Place',
    description:
      'AI content strategy, visual content calendar, team approvals, and creator campaigns — all in one workspace built for modern marketing teams.',
    url: 'https://www.trendly.now',
    siteName: 'Trendly',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Trendly — AI-Powered Marketing Workspace for Social Media Teams',
      },
    ],
  },
  // ── Twitter / X ───────────────────────────────────────────────────────────
  twitter: {
    card: 'summary_large_image',
    site: '@trendlynow',
    creator: '@trendlynow',
    title: 'Trendly — Your Entire Marketing Workflow in One Place',
    description:
      'AI content strategy, visual content calendar, team approvals, and creator campaigns — all in one workspace built for modern marketing teams.',
    images: ['/logo.png'],
  },
  // ── App / browser hints ───────────────────────────────────────────────────
  applicationName: 'Trendly',
  keywords: [
    'social media marketing tool',
    'content calendar app',
    'ai content strategy',
    'influencer marketing platform',
    'social media management for teams',
    'content workflow software',
    'creator campaign management',
  ],
  authors: [{ name: 'Trendly — IDIVARTS Solutions Pvt Ltd', url: 'https://www.trendly.now' }],
  creator: 'IDIVARTS Solutions Pvt Ltd',
  publisher: 'IDIVARTS Solutions Pvt Ltd',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-700 antialiased">
        <MarketingPixels />
        {children}
      </body>
    </html>
  );
}
