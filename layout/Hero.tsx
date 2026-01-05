import { Button } from "@/components/ui/button";
import { FloatingCube } from "@/components/floating-cube";
import CompanyLogo from "@/components/company-logo";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20">
      <div className="w-full px-6 relative z-10">
        <div className="text-center">
          <div className="bg-[#FAEFE0] border-[#F3D7B2] border  w-full h-full py-24 rounded-3xl ">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              Adopt AI that Aligns with your business Process. Priorities.
              Context
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto my-12 mt-14">
              From use-case prioritization to vendor evaluation—powered by{" "}
              <span className="font-bold text-black/75 tracking-wide">
                MillionGraph™
              </span>
            </p>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Meet your AI →
            </Button>
          </div>
          <CompanyLogo />
        </div>
      </div>

      <FloatingCube />
    </section>
  );
}
