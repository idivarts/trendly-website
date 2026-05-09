import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import LogosMarquee from '@/components/LogosMarquee';
import HowItWorks from '@/components/HowItWorks';
import Features from '@/components/Features';
import InteractiveDemo from '@/components/InteractiveDemo';
import WhyTrendly from '@/components/WhyTrendly';
import WhyMicro from '@/components/WhyMicro';
import Pricing from '@/components/Pricing';
import PilotProgramme from '@/components/PilotProgramme';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Blog from '@/components/Blog';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogosMarquee />
      <HowItWorks />
      <Features />
      <InteractiveDemo />
      <WhyTrendly />
      <WhyMicro />
      <Pricing />
      <PilotProgramme />
      <Testimonials />
      <FAQ />
      <Blog />
      <CTA />
      <Footer />
    </main>
  );
}
