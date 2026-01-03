"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      "This should be an essential pillar of every company’s GTM stack. It automates hours of manual research so teams can focus on selling.",
    name: "Stevie Case",
    role: "CRO",
    avatar: "/avatar.jpg",
    color: "bg-orange-500",
  },
  {
    company: "Intercom",
    quote:
      "The depth of insight unlocked here is something we couldn’t have imagined before.",
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

export default function Testimonials() {
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
      {/* Header */}
      <div className="mx-auto mb-12 flex container items-start justify-between">
        <h2 className="text-5xl font-semibold text-zinc-900">
          Practitioners are raving
          <br />
          about us
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
      </div>

      {/* Horizontal Track */}
      <div className="relative mx-auto container mt-20">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${index * (CARD_WIDTH + GAP)}px)`,
          }}
        >
          {testimonials.map((t, i) => (
            <div
              key={i}
              className={`mr-6 flex h-[350px] w-[580px] shrink-0 flex-col justify-between rounded-sm p-6 cursor-pointer hover:shadow-xl ${t.color}`}
            > 
              <div>
                <p className="text-xl font-medium leading-relaxed text-primary">
                  “{t.quote}”
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
                    <p className="text-sm font-medium text-primary/80">{t.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
