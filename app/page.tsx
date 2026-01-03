import { TrustedInsights } from "@/layout/trusted-insights";
import { Hero } from "@/layout/Hero";
import Testimonials from "@/layout/Testimonials";
import GuideSection from "@/layout/GuideSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedInsights />
      <GuideSection />
      <Testimonials />
    </main>
  );
}
