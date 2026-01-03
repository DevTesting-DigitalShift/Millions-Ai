import { TrustedInsights } from "@/layout/trusted-insights";
import { Hero } from "@/layout/Hero";
import Testimonials from "@/layout/Testimonials";
import GuideSection from "@/layout/GuideSection";
import { ProductShowcase } from "@/layout/product-showcase";
import { ProductShowcase2 } from "@/layout/Scroll5";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedInsights />
      <GuideSection />
      <ProductShowcase />
      <ProductShowcase2 />
      <Testimonials />
    </main>
  );
}
