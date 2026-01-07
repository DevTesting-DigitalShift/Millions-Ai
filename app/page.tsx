import { TrustedInsights } from "@/layout/TrustedInsights";
import { Hero } from "@/layout/Hero";
import Testimonials from "@/layout/Testimonials";
import GuideSection from "@/layout/GuideSection";
import { ProductShowcase } from "@/layout/ProductShowcase";
import { ProductShowcase2 } from "@/layout/ProductShowcase2";
import { EvolutionScroll } from "@/components/evolution-scroll";
import MillionGraphAnimation from "@/app/MillionGraphAnimations";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedInsights />
      <GuideSection />
      <ProductShowcase />
      <ProductShowcase2 />

      <MillionGraphAnimation />
      {/* Evolution scroll animation */}
      <EvolutionScroll />

      <Testimonials title="Practitioners are raving" breakTitle="about us" />
    </main>
  );
}
