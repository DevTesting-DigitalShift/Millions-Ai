import { Button } from "@/components/ui/button";
import { FloatingCube } from "@/components/floating-cube";

export function Hero() {
  return (
    <section className="relative flex items-center justify-center overflow-hidden pt-20">
      {/* Main Content */}
      <div className="w-full px-6 relative z-10">
        <div className="text-center">
          <div className="bg-[#FAEFE0] border-[#F3D7B2] border  w-full h-full py-24 rounded-3xl ">
            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-6">
              Adopt AI that Aligns <br /> with you process | priorities |
              context
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-5xl mx-auto my-12 mt-14">
              World’s most comprehensive AI Guide, powered by revolutionary{" "}
              <span className="font-bold text-black/75 tracking-wide">
                MillionGraph™
              </span>
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-medium shadow-lg hover:shadow-xl transition-all"
            >
              Meet your AI →
            </Button>
          </div>

          {/* Trust Badge */}
          <div className="mt-20">
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-6 font-bold">
              Evaluated 5,000+ leading AI Agents across business functions
            </p>

            {/* Company Logos Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center justify-items-center max-w-5xl mx-auto mt-15">
              {/* Row 1 */}
              <CompanyLogo name="Canva" />
              <CompanyLogo name="HubSpot" />
              <CompanyLogo name="Vanta" />
              <CompanyLogo name="Intercom" />
              <CompanyLogo name="Google" />
              <CompanyLogo name="OpenAI" />
              <CompanyLogo name="Webflow" />
              <CompanyLogo name="Cursor" />

              {/* Row 2 */}
              <CompanyLogo name="Ramp" />
              <CompanyLogo name="Rippling" />
              <CompanyLogo name="Notion" />
              <CompanyLogo name="Perplexity" />
              <CompanyLogo name="Uber" />
              <CompanyLogo name="Figma" />
              <CompanyLogo name="Dropbox" />
              <CompanyLogo name="Verkada" />
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Cube */}
      <FloatingCube />
    </section>
  );
}

// Simple company logo component
function CompanyLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center h-8 opacity-60 hover:opacity-100 transition-opacity">
      <span className="text-sm font-medium text-foreground/70">{name}</span>
    </div>
  );
}
