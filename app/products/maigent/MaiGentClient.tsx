import CompanyLogo from "@/components/company-logo";
import { Button } from "@/components/ui/button";
import Testimonials from "@/layout/Testimonials";

const marketSignalsCards = [
  {
    bgGradient: "bg-[#0667d9]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    imageAlt: "Data formatting interface",
    badgeText: "News, Curated",
    title: "News without Noise, Curated",
    description:
      "Curated updates organized by segment, so you see only what’s relevant to you. Sources are filtered for credibility and recency—less scrolling, faster decisions.",
    cta: "Explore News",
    descriptionColor: "text-white/90",
  },
  {
    bgGradient: "bg-[#02693e]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    imageAlt: "Workflow automation",
    badgeText: "Analyst Views",
    title: "Analysts View, distilled",
    description:
      "Analyst insight, segmented by source and distilled for relevance. We ensure you get curated relevant view- no scrolling through the heap.",
    cta: "Explore Analyst",
    descriptionColor: "text-white/90",
  },
  {
    bgGradient: "bg-[#8b045c]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    imageAlt: "Integration tools",
    badgeText: "Similar to...",
    title: "AI Agents, Side by side",
    description:
      "Stack your selected vendors side-by-side across key parameters, enabling selection of the vendors on factors that matter most.",
    cta: "Explore Similar to...",
    descriptionColor: "text-white/90",
  },
];

const MaiGentClient = () => {
  return (
    <main>
      <section className="container-section relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: `
          linear-gradient(to right, rgba(0,0,0,0.15) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.15) 1px, transparent 1px)
        `,
              backgroundSize: "40px 40px",
              maskImage:
                "radial-gradient(circle at center, black 0%, black 65%, transparent 70%)",
              WebkitMaskImage:
                "radial-gradient(circle at center, black 0%, black 65%, transparent 70%)",
            }}
          />
        </div>

        <div className="relative z-10 text-center px-6 py-20 mx-auto mt-16">
          <h1 className="text-5xl md:text-6xl font-semibold text-foreground mb-6 leading-tight">
            We work harder, so you dont have to
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
            Enterprise-ready agents, mapped to your workflows, scored on fit,
            readiness, and risk —shortlist in minutes, not months.
          </p>

          <Button
            size="lg"
            className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 py-6 text-base font-semibold"
          >
            Discover AI Agents →
          </Button>
        </div>
      </section>

      <CompanyLogo />

      <section className="container-section px-6 py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <span className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-md">
              Score
            </span>
            <div className="mt-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Evidence, not opinion
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                MAI scores every agent across 120 data points— Product depth +
                Company strength—delivering aadvisory grade ranking
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
            >
              Explore Score →
            </Button>
          </div>

          <div className="relative">
            <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden h-120">
              <img
                src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-linear-to-br from-background via-muted/20 to-background">
        <div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden h-120">
              <img
                src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="space-y-16">
            <span className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-md">
              Profiles
            </span>
            <div className="mt-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Whats behind the Logo
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                End-to-end vendor intel: who built it, who it partners with, how
                fast it’s scaling, and where it plays—backed by a 50+-signal
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
            >
              Explore Profiles →
            </Button>
          </div>
        </div>
      </section>

      <section className="container-section px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <span className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-md">
              Align
            </span>
            <div className="mt-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Align Vendors to Process <br />
                and Usecases
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                Align vendors to real workflows—process → use case —so you can
                slice by task, spot gaps, and choose with confidence.
              </p>
            </div>

            <div className="space-y-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
              >
                Explore Align →
              </Button>
              <div className="text-foreground text-xl font-semibold">
                MRI{" "}
                <span className="bg-linear-to-r from-red-500 via-pink-500 to-indigo-500 bg-clip-text text-transparent">
                  Speak to Domain Expert
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden h-120">
              <img
                src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
                alt=""
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-section overflow-hidden px-6 pt-36 pb-20">
        <div className="mb-16 text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold text-foreground mb-6">
            MAIGent, so the shortlist isint just top rated, -its truely aligned
            to how you work
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MAIGent blends a proprietary scoring engine (product depth + company
            strength) with data from web sources, social signals, and expert
            networks. It then maps agents to your processes and tasks
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto">
          {marketSignalsCards.map((card, index) => (
            <div
              key={index}
              className={`${card.bgGradient} rounded-4xl p-8 py-10 ${card.textColor} flex flex-col`}
            >
              <div className="mb-6">
                <img
                  src={card.image}
                  alt={card.imageAlt}
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>

              <div className="space-y-4 flex-1">
                <span className="font-semibold uppercase text-xs tracking-widest">
                  {card.badgeText}
                </span>
                <h3 className="text-3xl font-bold mt-3">{card.title}</h3>
                <p
                  className={`${card.descriptionColor} leading-relaxed font-medium`}
                >
                  {card.description}
                </p>
              </div>

              <div className="flex justify-end mt-5">
                <Button className="border-none bg-transparent text-primary-foreground hover:bg-transparent text-base">
                  {card.cta} →
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Testimonials
        title="Heres what leaders are saying"
        breakTitle="about MAIGent™"
      />
    </main>
  );
};

export default MaiGentClient;
