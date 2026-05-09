import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Trendly — Find the Right Micro Influencers to Grow Your Brand',
  description:
    'Trendly is the smartest way for startups and SMBs to discover, hire, and manage micro-influencers. Launch authentic campaigns from ₹750 with verified creators.',
  metadataBase: new URL('https://www.trendly.now'),
  openGraph: {
    title: 'Trendly — Influencer Marketing for Startups',
    description:
      'Discover thousands of verified micro-creators with advanced filters, manage campaigns end-to-end, and pay only on delivery.',
    url: 'https://www.trendly.now',
    siteName: 'Trendly',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-700 antialiased">{children}</body>
    </html>
  );
}
