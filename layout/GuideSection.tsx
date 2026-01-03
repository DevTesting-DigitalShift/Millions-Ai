import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function GuideSection() {
  return (
    <div className="bg-white/50">
      <section className="mx-auto container px-6 py-36">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-[1.3fr_0.7fr]">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl leading-[1.1] ">
              Million AI isn’t just a database
              <br />– it’s a guide
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

            {/* CTA */}
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

            {/* CONNECTOR / BREAKER */}
            <div className="mt-16 h-px w-40 bg-gradient-to-r from-transparent via-muted-foreground/40 to-transparent" />
          </div>

          {/* RIGHT VISUAL */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative aspect-square w-full ">
              <Image
                src="/placeholder-illustration.jpg"
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
