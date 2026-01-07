import { TrustedInsights } from "@/layout/TrustedInsights";
import { Hero } from "@/layout/Hero";
import Testimonials from "@/layout/Testimonials";
import GuideSection from "@/layout/GuideSection";
import { ProductShowcase } from "@/layout/ProductShowcase";
import { ProductShowcase2 } from "@/layout/ProductShowcase2";
import { EvolutionScroll } from "@/components/evolution-scroll";
import MillionGraphAnimation from "@/app/MillionGraphAnimations";
import { ScrollBackground } from "@/components/ScrollBackground"; // NEW: Background animation layer

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* NEW: Scroll-driven background animation layer - sits behind all content */}
      <ScrollBackground />

      {/* EXISTING CONTENT - All sections remain exactly the same */}
      <div className="relative z-10">
        <Hero />
        <TrustedInsights />
        <GuideSection />
        <ProductShowcase />
        <ProductShowcase2 />

        <MillionGraphAnimation />

        <Testimonials title="Practitioners are raving" breakTitle="about us" />
      </div>
    </main>
  );
}
