"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    company: "OpenAI",
    quote:
      "In my professional opinion, this product is one of the most practical and exciting applications of AI in a space that has been stale for years.",
    name: "Keith Jones",
    role: "GTM Systems Lead",
    avatar: "/avatar.jpg",
    color: "bg-lime-400",
  },
  {
    company: "Vanta",
    quote:
      "This should be an essential pillar of every company's GTM stack. It automates hours of manual research so teams can focus on selling.",
    name: "Stevie Case",
    role: "CRO",
    avatar: "/avatar.jpg",
    color: "bg-orange-500",
  },
  {
    company: "Intercom",
    quote:
      "The depth of insight unlocked here is something we couldn't have imagined before.",
    name: "Alexander DeMoulin",
    role: "Director of Revenue Operations",
    avatar: "/avatar.jpg",
    color: "bg-blue-500",
  },
  {
    company: "Linear",
    quote:
      "Everything feels thoughtfully designed. Speed, clarity, and reliability stand out.",
    name: "Sarah Kim",
    role: "Product Lead",
    avatar: "/avatar.jpg",
    color: "bg-purple-500",
  },
  {
    company: "Notion",
    quote:
      "It removed friction from our workflows instantly. Adoption was effortless.",
    name: "Daniel Park",
    role: "Head of Operations",
    avatar: "/avatar.jpg",
    color: "bg-pink-500",
  },
];

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

type TitleProps = {
  title: string;
  breakTitle: string;
};

export default function Testimonials({ title, breakTitle }: TitleProps) {
  const [index, setIndex] = useState(0);

  const CARD_WIDTH = 420;
  const GAP = 24;

  const next = () => {
    if (index < testimonials.length - 1) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <section className="overflow-hidden px-6 py-36">
      <motion.div
        className="mx-auto mb-12 flex max-w-7xl items-start justify-between"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{fadeInUp}}
      >
        <h2 className="text-5xl font-semibold text-zinc-900">
          {title}
          <br className="mt-1" />
          {breakTitle}
        </h2>

        <div className="flex gap-3 mt-8">
          <button
            onClick={prev}
            className="flex h-12 w-10 items-center justify-center rounded border border-zinc-400 text-zinc-500 disabled:opacity-50"
            disabled={index === 0}
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="flex h-12 w-10 items-center justify-center rounded border border-primary/80 text-zinc-900 disabled:opacity-40"
            disabled={index === testimonials.length - 1}
          >
            <ChevronRight />
          </button>
        </div>
      </motion.div>

      {/* Horizontal Track */}
      <motion.div
        className="relative mx-auto max-w-7xl mt-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={staggerContainer}
      >
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={`mr-6 flex h-[350px] w-[580px] shrink-0 flex-col justify-between rounded-sm p-6 cursor-pointer ${t.color}`}
              variants={{fadeInUp}}
            >
              <div>
                <p className="text-xl font-medium leading-relaxed text-primary">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="mt-8 border-t border-dashed border-black/20 pt-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-[60px] w-[55px]">
                    <AvatarImage src={t.avatar} />
                    <AvatarFallback>{t.name[0]}</AvatarFallback>
                  </Avatar>

                  <div className="mt-5">
                    <p className="font-medium text-lg">{t.name}</p>
                    <p className="text-sm font-medium text-primary/80">
                      {t.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
