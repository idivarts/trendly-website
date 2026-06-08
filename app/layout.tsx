import MarketingPixels from '@/components/MarketingPixels';
import type { Metadata } from 'next';
// @ts-ignore - Next.js 14 app router types are still in RC and not yet included in @types/next
import './globals.css';

export const metadata: Metadata = {
  // ── Core ──────────────────────────────────────────────────────────────────
  title: {
    default: 'Trendly — The AI Social Media Tool for Founders & Teams Worldwide',
    template: '%s — Trendly',
  },
  description:
    'Trendly is the AI social media management tool that brings GPT, Claude & Gemini into one workspace. Built for founders and teams worldwide: generate posts, images & scripts, plan a calendar in one click, schedule to every platform, and manage all comments & DMs in one inbox. Free forever, no credit card.',
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
    title: 'Trendly — The AI Social Media Tool for Founders & Teams Worldwide',
    description:
      'Every AI model in one social media workspace: generate posts, images & scripts, plan a calendar in one click, schedule everywhere, and manage every comment & DM in one inbox.',
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
    title: 'Trendly — The AI Social Media Tool for Founders & Teams Worldwide',
    description:
      'Every AI model in one social media workspace: generate posts, images & scripts, plan a calendar in one click, schedule everywhere, and manage every comment & DM in one inbox.',
    images: ['/logo.png'],
  },
  // ── App / browser hints ───────────────────────────────────────────────────
  applicationName: 'Trendly',
  keywords: [
    'ai social media tool',
    'ai social media management',
    'social media management tool',
    'social media scheduling tool',
    'ai social media content generator',
    'social media tool for startups',
    'social media tool for small teams',
    'ai social media tool for agencies',
    'global social media management software',
    'buffer alternative',
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
