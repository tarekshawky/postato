import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { ForBusinesses } from "@/components/site/for-businesses";
import { BrandNetwork } from "@/components/site/brand-network";
import { ForPublishers } from "@/components/site/for-publishers";
import { PublisherLevels } from "@/components/site/publisher-levels";
import { Pricing } from "@/components/site/pricing";
import { FlowDiagram } from "@/components/site/flow-diagram";
import { FreeTrial } from "@/components/site/free-trial";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { Footer } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ForBusinesses />
        <BrandNetwork />
        <ForPublishers />
        <PublisherLevels />
        <Pricing />
        <FlowDiagram />
        <FreeTrial />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
