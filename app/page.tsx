import { TrustedInsights } from "@/layout/TrustedInsights";
import { Hero } from "@/layout/Hero";
import Testimonials from "@/layout/Testimonials";
import GuideSection from "@/layout/GuideSection";
import { ProductShowcase } from "@/layout/ProductShowcase";
import { ProductShowcase2 } from "@/layout/ProductShowcase2";
import MorphingShape from "@/components/MorphingShape";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-accent-foreground">
      <MorphingShape />
      {/* <ScrollingCube /> */}
        <Hero />
        <TrustedInsights />
        <GuideSection />
        <ProductShowcase />
        <ProductShowcase2 />
        <Testimonials title="Practitioners are raving" breakTitle="about us" />
    </main>
  );
}
