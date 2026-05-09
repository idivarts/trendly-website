import PageShell from '@/components/PageShell';
import LegalDoc from '@/components/LegalDoc';

export const metadata = {
  title: 'Terms & Conditions — Trendly',
  description: 'The terms governing the use of Trendly\'s influencer marketing platform.',
};

export default function TermsPage() {
  return (
    <PageShell>
      <LegalDoc
        title="Terms & Conditions"
        updated="May 2026"
        intro="These Terms govern your access to and use of Trendly's website and services, operated by IDIVARTS Solutions Pvt Ltd. By using Trendly you agree to these Terms — please read them carefully."
        sections={[
          {
            heading: 'Acceptance of terms',
            body: [
              'By creating an account, browsing, or using any feature of Trendly, you agree to be bound by these Terms and our Privacy Policy. If you do not agree, please discontinue use of the service.',
              'We may update these Terms from time to time. We will notify users of material changes; continued use of Trendly after changes are posted constitutes acceptance.',
            ],
          },
          {
            heading: 'Eligibility',
            body: [
              'You must be at least 18 years old to create a Trendly account. By registering, you confirm that the information you provide is accurate and that you have authority to bind the entity (if any) on whose behalf you are using the service.',
            ],
          },
          {
            heading: 'Subscription & payments',
            body: [
              'Trendly offers tiered subscription plans (Starter, Growth, Pro, Enterprise). Pricing is displayed on the pricing page in INR (₹) and is exclusive of applicable taxes.',
              'Subscriptions auto-renew at the end of each billing cycle. You may cancel anytime — cancellations take effect at the end of the current billing period.',
              'Influencer service fees are agreed and paid directly between you and the influencer. Trendly does not collect or hold those funds.',
            ],
          },
          {
            heading: 'Role of Trendly',
            body: [
              'Trendly is a discovery and management platform — it is not a PR or marketing agency. We help you find and contract verified creators; we do not produce content or guarantee specific campaign outcomes.',
              'We provide a Trustability Score and Trust Score to help you make informed decisions, but final responsibility for campaign success rests with you and the influencer you engage.',
            ],
          },
          {
            heading: 'Acceptable use',
            body: [
              'You agree not to:',
              [
                'use the platform for any unlawful or fraudulent purpose',
                'misrepresent your identity or your brand',
                'attempt to scrape or replicate creator data',
                'circumvent the platform to negotiate with creators discovered on Trendly',
              ],
            ],
          },
          {
            heading: 'Intellectual property',
            body: [
              'All Trendly trademarks, logos, and platform content are the property of IDIVARTS Solutions Pvt Ltd. You receive a non-exclusive, non-transferable license to use the platform for your business purposes during your subscription period.',
            ],
          },
          {
            heading: 'Limitation of liability',
            body: [
              "Trendly is provided \"as-is\" without warranties of any kind. To the maximum extent permitted by law, IDIVARTS Solutions Pvt Ltd is not liable for any indirect, incidental, or consequential damages arising from your use of the platform.",
            ],
          },
          {
            heading: 'Governing law',
            body: [
              'These Terms are governed by the laws of India. Any disputes will be resolved in the courts of Bangalore, Karnataka.',
            ],
          },
        ]}
      />
    </PageShell>
  );
}
