"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useSlideInLeft, useSlideInRight } from "@/hooks/useGsapAnimations";

export default function GuideSection() {
  const textRef = useSlideInLeft(0.2);
  const imageRef = useSlideInRight(0.4);

  return (
    <div className="bg-linear-to-br from-background via-muted/20 to-background/60">
      <section className="mx-auto max-w-7xl px-6 py-36">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.3fr_0.7fr]">
          <div ref={textRef}>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1] ">
              Million AI isn&apos;t just a database – it&apos;s a guide
            </h2>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Think of it like this: F1 car needs a track map to perform
              effectively. A practitioner needs MAI in a similar way. With MAI
              Intelligence, professionals get the insights they need to complete
              a data driven evaluation.
            </p>

            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              The result: AI which can drive and deliver the promised ROI.
            </p>

            <div className="mt-10 flex items-center gap-6">
              <Button
                size="lg"
                className="rounded-lg bg-primary px-8 py-6 text-lg font-medium text-primary-foreground shadow-lg transition hover:opacity-90"
              >
                Meet your AI →
              </Button>

              <button className="flex items-center gap-2 text-base font-medium text-foreground/80 hover:text-foreground transition">
                <span className="font-mono text-lg">MRI</span>
                Ask the Expert
              </button>
            </div>
          </div>

          <div
            ref={imageRef}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative aspect-square w-160 rounded-lg">
              <Image
                src="/guide.jpeg"
                alt="AI intelligence illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
