import PageShell from '@/components/PageShell';
import LegalDoc from '@/components/LegalDoc';

export const metadata = {
  title: 'Privacy Policy — Trendly',
  description: 'How Trendly collects, uses, and protects your data.',
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <LegalDoc
        title="Privacy Policy"
        updated="May 2026"
        intro="This Privacy Policy explains how IDIVARTS Solutions Pvt Ltd (\"we\", \"us\") collects, uses, and protects your information when you use Trendly. We treat your data with the same care we would want for our own."
        sections={[
          {
            heading: 'Data we collect',
            body: [
              'When you sign up for or use Trendly, we collect:',
              [
                'Account info — name, email, brand/company name, password (hashed)',
                'Usage data — campaigns you create, creators you unlock, messages you send within the platform',
                'Payment info — handled via our payment processor (we never store full card details)',
                'Cookies & analytics — basic analytics to understand product usage and fix bugs',
              ],
            ],
          },
          {
            heading: 'How we use your data',
            body: [
              'We use the data we collect to:',
              [
                'provide, operate, and improve the platform',
                'communicate with you about updates, billing, and support',
                'detect and prevent fraudulent or unauthorized activity',
                'comply with legal obligations',
              ],
            ],
          },
          {
            heading: 'Sharing your data',
            body: [
              'We do not sell your personal data. We share limited data with trusted third parties only when necessary:',
              [
                'Payment processors to handle subscription billing',
                'Influencer-data partners (e.g., Modash, Phyllo) to fulfill enterprise data requests',
                'Cloud hosting providers (e.g., AWS) to operate the service',
                'Legal authorities when required by law',
              ],
            ],
          },
          {
            heading: 'Data retention',
            body: [
              'We retain your data for as long as your account is active or as needed to provide the service. You can request deletion at any time — see our Data Deletion page for details.',
            ],
          },
          {
            heading: 'Your rights',
            body: [
              'You have the right to access, correct, or delete your personal data at any time. To exercise these rights, email support@idiv.in.',
            ],
          },
          {
            heading: 'Security',
            body: [
              'We use industry-standard security practices — encrypted connections (HTTPS), encrypted-at-rest databases, role-based access control, and regular security reviews.',
            ],
          },
          {
            heading: 'Contact',
            body: [
              'For any privacy-related concern, write to support@idiv.in. We aim to respond within 7 business days.',
            ],
          },
        ]}
      />
    </PageShell>
  );
}
