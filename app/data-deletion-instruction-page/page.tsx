import PageShell from '@/components/PageShell';
import LegalDoc from '@/components/LegalDoc';

export const metadata = {
  title: 'Data Deletion — Trendly',
  description: 'How to request deletion of your Trendly account and data.',
};

export default function DataDeletionPage() {
  return (
    <PageShell>
      <LegalDoc
        title="Data Deletion Instructions"
        updated="May 2026"
        intro="At Trendly, you control your data. If you'd like to delete your account or specific data we hold about you, follow the steps below."
        sections={[
          {
            heading: 'Self-service deletion (recommended)',
            body: [
              'You can delete your Trendly account directly from inside the brands app:',
              [
                'Sign in at brands.trendly.now',
                'Open Settings → Account → Delete account',
                'Confirm deletion using the verification email we send',
                'Your account and associated personal data are removed within 30 days',
              ],
            ],
          },
          {
            heading: 'Email request',
            body: [
              'If you cannot access your account, email us at support@idiv.in from the address you registered with. Include the subject line "Data deletion request" and we will verify your identity and process the deletion within 30 days.',
            ],
          },
          {
            heading: 'What gets deleted',
            body: [
              'Upon successful deletion we remove:',
              [
                'Your account record (name, email, password, profile)',
                'Campaigns and contracts you created',
                'Saved creator unlocks and notes',
                'Messages and chat history',
              ],
              'Some anonymized usage data (e.g., aggregate analytics) may be retained for up to 12 months to improve the product. This data cannot be linked back to you.',
            ],
          },
          {
            heading: 'Legal exceptions',
            body: [
              'We may retain certain data longer when required by applicable law — for example, invoices and tax records, which our operating entity (IDIVARTS Solutions Pvt Ltd) is typically required to keep for up to 7 years. These records are stored securely and are not used for any other purpose.',
            ],
          },
          {
            heading: 'Questions?',
            body: [
              'If you have any concern about the deletion process or want to confirm your data has been removed, write to support@idiv.in. We typically respond within 2 business days.',
            ],
          },
        ]}
      />
    </PageShell>
  );
}
