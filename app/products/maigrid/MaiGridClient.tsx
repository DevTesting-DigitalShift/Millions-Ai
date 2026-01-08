"use client";

import CompanyLogo from "@/components/company-logo";
import { Button } from "@/components/ui/button";
import Testimonials from "@/layout/Testimonials";
import { motion, type Variants } from "framer-motion";

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
      "Live adoption signals across business domains—filter by region, industry to see who's adopting what",
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

// Animation variants
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7 },
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const MaiGridClient = () => {
  return (
    <main>
      {/* Hero Section */}
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

        <motion.div
          className="relative z-10 text-center px-6 py-20 mx-auto mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          <motion.h1
            className="text-5xl md:text-6xl font-semibold max-w-6xl text-foreground mb-6 leading-tight"
            variants={fadeInDown}
          >
            Skip the{" "}
            <span className="font-graphik text-[#002956]">
              unMagical Quadrant
              <sup className="text-3xl align-super ml-0.5">®</sup>
            </span>
            , prioritise what moves the needle
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-8"
            variants={fadeInUp}
          >
            MAIGrid™ maps your business context, and delivers a personalized,
            execution-ready AI roadmap—what to do now, pilot next, park the rest
          </motion.p>

          <motion.div variants={scaleIn}>
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90 rounded-lg px-8 py-6 text-base font-semibold"
            >
              Discover Your UseCases →
            </Button>
          </motion.div>
        </motion.div>
      </section>

      <CompanyLogo />

      {/* Business Domains Section */}
      <section className="container-section px-6 py-20 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span
              className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-lg inline-block"
              variants={fadeInLeft}
            >
              MRI Select Domain
            </motion.span>
            <motion.div className="mt-6" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Business Domains mapped <br />
                from process to usecase
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                Drill into any business domain to view underlying processes →
                usecases, validated by experts for real-world coverage.
              </p>
            </motion.div>

            <motion.div className="space-y-6" variants={fadeInUp}>
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
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden h-120">
              <img
                src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
                alt=""
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Smart Intake Section */}
      <section className="px-6 py-20 bg-linear-to-br from-background via-muted/20 to-background/60">
        <div className="container-section grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInLeft}
          >
            <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden h-120">
              <img
                src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
                alt=""
                className="w-full h-full"
              />
            </div>
          </motion.div>

          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span
              className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-lg inline-block"
              variants={fadeInRight}
            >
              MRI Smart Intake
            </motion.span>
            <motion.div className="mt-6" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Get personalised usecases <br />- based on your input
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                A practitioner-designed intake that asks only what matters and
                infers the rest. Provide input once; get a personalized set of
                use cases with clear next steps.
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
              >
                Utilise Smart Intake →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Personalize Section */}
      <section className="container-section px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="space-y-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={staggerContainer}
          >
            <motion.span
              className="text-foreground text-lg font-semibold bg-muted-foreground/10 px-4 py-2 rounded-lg inline-block"
              variants={fadeInLeft}
            >
              Personalize
            </motion.span>
            <motion.div className="mt-6" variants={fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                Use cases, tailored to <br />
                your reality
              </h2>

              <p className="text-lg text-muted-foreground font-semibold leading-relaxed mb-6">
                MAIGrid distills your inputs into a personalized AI roadmap with
                rationale and next steps —what to do first, what to stage, what
                to skip.
              </p>
            </motion.div>

            <motion.div variants={scaleIn}>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
              >
                Explore Personalise →
              </Button>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInRight}
          >
            <div className="relative bg-black rounded-lg shadow-2xl overflow-hidden h-120">
              <img
                src="https://media.istockphoto.com/id/1402430797/photo/business-3d-tablet-virtual-growth-arrow-financial-graph-on-digital-technology-strategy.jpg?s=612x612&w=0&k=20&c=OKYWpTE-G2OYQu7wKjfEiUZQWVnf7XVPuJNlj7X7tAI="
                alt=""
                className="w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Market Signals Section */}
      <section className="container-section overflow-hidden px-6 pt-36 pb-20">
        <motion.div
          className="mb-16 text-center max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
        >
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
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {marketSignalsCards.map((card, index) => (
            <motion.div
              key={index}
              className={`${card.bgGradient} rounded-4xl p-8 py-10 ${card.textColor} flex flex-col`}
              variants={scaleIn}
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
            </motion.div>
          ))}
        </motion.div>
      </section>

      <Testimonials
        title="Heres what leaders are saying"
        breakTitle="about MAIGrid™"
      />
    </main>
  );
};

export default MaiGridClient;
