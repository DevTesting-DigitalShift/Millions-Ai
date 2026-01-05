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
    badgeText: "Adoption Signals",
    title: "Real Adoption Signals, no hype",
    description:
      "Live adoption signals across business domains—filter by region, industry to see who’s adopting what",
    cta: "Explore Adoption",
    descriptionColor: "text-white/90",
  },
  {
    bgGradient: "bg-[#02693e]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    imageAlt: "Workflow automation",
    badgeText: "Analyst Speak",
    title: "Analysts View, distilled",
    description:
      "Conditionally run any action based on different providers for different companies, search only your list of tools, or build in fallbacks.",
    cta: "Explore Analyst",
    descriptionColor: "text-white/90",
  },
  {
    bgGradient: "bg-[#8b045c]",
    textColor: "text-white",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop",
    imageAlt: "Integration tools",
    badgeText: "Top 5",
    title: "Top5, Side by side",
    description:
      "See the Top 5 for each process in a single,comparable view—scored across five critical categories so decisions are obvious.",
    cta: "Explore Top5",
    descriptionColor: "text-white/90",
  },
];

const MaiGridClient = () => {
  return (
    <section className="container-section">
      <CompanyLogo />

      <div className="px-6 py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <span className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-md">
              MRI Select Domain
            </span>
            <div className="mt-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Business Domains mapped <br />
                from process to usecase
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                Drill into any business domain to view underlying processes →
                usecases, validated by experts for real-world coverage.
              </p>
            </div>

            <div className="space-y-6">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
              >
                Explore Domains →
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
      </div>

      <div className="px-6 py-20 bg-linear-to-br from-background via-muted/20 to-background">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
              MRI Smart Intake
            </span>
            <div className="mt-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Get personalised usecases <br />- based on your input
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                A practitioner-designed intake that asks only what matters and
                infers the rest. Provide input once; get a personalized set of
                use cases with clear next steps.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
            >
              Utilise Smart Intake →
            </Button>
          </div>
        </div>
      </div>

      <div className="px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-16">
            <span className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-md">
              Personalize
            </span>
            <div className="mt-6">
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Use cases, tailored to <br />
                your reality
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                MAIGrid distills your inputs into a personalized AI roadmap with
                rationale and next steps —what to do first, what to stage, what
                to skip.
              </p>
            </div>

            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
            >
              Explore Personalise →
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
      </div>

      <section className="overflow-hidden px-6 pt-36 pb-20">
        <div className="mb-16 text-center max-w-5xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-semibold text-foreground mb-6">
            MAIGrid isint just a usecase list — it s a personalized decision
            support
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            MAIGrid not only helps you to personalise your use-cases based on
            your business context, but also helps you with market signals,
            further aiding you in understanding what is the market saying about
            AI in your choosen domain, to help you take a more informed decision
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
        breakTitle="about MAIGrid™"
      />
    </section>
  );
};

export default MaiGridClient;
