"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FloatingCube } from "@/components/floating-cube";
import CompanyLogo from "@/components/company-logo";
import {
  useFadeIn,
  useSlideInLeft,
  useScaleIn,
} from "@/hooks/useGsapAnimations";

export function Hero() {
  const headingRef = useFadeIn(0.2);
  const descRef = useSlideInLeft(0.4);
  const buttonRef = useScaleIn(0.6);

  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-25">
      <div className="w-full px-6 relative z-10">
        <div className="text-center">
          <div className="bg-[#FAEFE0] border-[#F3D7B2] border w-full h-140 py-24 rounded-3xl">
            <h1
              ref={headingRef}
              className="text-5xl md:text-6xl lg:text-7xl max-w-7xl mx-auto font-semibold tracking-tight mb-6"
            >
              Adopt AI that Aligns with your business Process. Priorities.
              Context
            </h1>

            <p
              ref={descRef}
              className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto my-12 mt-14"
            >
              From use-case prioritization to vendor evaluation—powered by{" "}
              <span className="font-bold text-black/75 tracking-wide">
                MillionGraph™
              </span>
            </p>

            <div ref={buttonRef}>
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
                >
                  Meet your AI →
                </Button>
              </Link>
            </div>
          </div>
          <CompanyLogo />
        </div>
      </div>

      <FloatingCube />
    </section>
  );
}
