import Navbar from '@/components/Navbar';
import HeroWalkthrough from '@/components/HeroWalkthrough';
import AIModels from '@/components/AIModels';
import CreateWithAI from '@/components/CreateWithAI';
import CollaborateOnAI from '@/components/CollaborateOnAI';
import ScheduleEverywhere from '@/components/ScheduleEverywhere';
import ProofBar from '@/components/ProofBar';
import PricingTeaser from '@/components/PricingTeaser';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import JsonLd, { organizationSchema, softwareApplicationSchema } from '@/components/JsonLd';

// Homepage = curiosity → demo/signup. One job. The deep content (full FAQ,
// pricing table, comparison, Impulse deep-dive, services) lives on its own
// pages and is linked, not inlined here.
export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <JsonLd data={[organizationSchema(), softwareApplicationSchema()]} />
      <Navbar />
      {/* Hero — headline + subtext + CTA + a live product walkthrough */}
      <HeroWalkthrough />
      {/* The problem + what Trendly is: every AI model in one workspace */}
      <AIModels />
      {/* 3 features shown as UI moments */}
      <CreateWithAI />
      <CollaborateOnAI />
      <ScheduleEverywhere />
      {/* Honest social proof + a one-line pricing teaser */}
      <ProofBar />
      <PricingTeaser />
      {/* One final CTA */}
      <CTA />
      <Footer />
    </main>
  );
}
