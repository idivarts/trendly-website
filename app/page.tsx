import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AIModels from '@/components/AIModels';
import CreateWithAI from '@/components/CreateWithAI';
import CollaborateOnAI from '@/components/CollaborateOnAI';
import OneWorkspace from '@/components/OneWorkspace';
import ScheduleEverywhere from '@/components/ScheduleEverywhere';
import UnifiedInbox from '@/components/UnifiedInbox';
import Impulse from '@/components/Impulse';
import WhySwitch from '@/components/WhySwitch';
import DoneForYou from '@/components/DoneForYou';
import Pricing from '@/components/Pricing';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import JsonLd, { organizationSchema, softwareApplicationSchema } from '@/components/JsonLd';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <JsonLd data={[organizationSchema(), softwareApplicationSchema()]} />
      <Navbar />
      <Hero />
      {/* The differentiator: every AI model in one place */}
      <AIModels />
      {/* Create → collaborate → consolidate → schedule → engage */}
      <CreateWithAI />
      <CollaborateOnAI />
      <OneWorkspace />
      <ScheduleEverywhere />
      <UnifiedInbox />
      {/* Convert: comment-to-cart automation */}
      <Impulse />
      {/* Why us + done-for-you + convert */}
      <WhySwitch />
      <DoneForYou />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
