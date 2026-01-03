"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export function ProductShowcase() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title:
        "Summarize the operating covenants for AayantiBio's General Counsel.",
      file: "Merger Agreement.docx",
      action: "Ask MAI",
    },
    {
      title: "Generate quarterly financial report summary",
      file: "Q4_Report.xlsx",
      action: "Generate",
    },
    {
      title: "Analyze customer feedback trends",
      file: "Customer_Data.csv",
      action: "Analyze",
    },
  ];

  return (
    <section className="py-36 bg-[#FFF8EE]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Animation */}
          <div className="relative">

            {/* Product Interface Animation */}
            <div className="relative bg-black rounded-2xl p-8 shadow-2xl min-h-[600px] flex items-center justify-center">
              <div className="w-full max-w-md">
                {/* Left Panel - Input */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-[#E8E0D5] rounded-xl p-6 mb-6"
                >
                  <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                    {steps[activeStep].title}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 text-xs mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                    <span>{steps[activeStep].file}</span>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white rounded-lg py-3 text-sm font-medium transition-colors flex items-center justify-center gap-2"
                    onClick={() =>
                      setActiveStep((prev) => (prev + 1) % steps.length)
                    }
                  >
                    {steps[activeStep].action}
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </motion.button>
                </motion.div>

                {/* Right Panel - Response */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-[#2A2A2A] rounded-xl p-6 text-white"
                >
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-violet-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-xs font-bold">AI</span>
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Assistant</p>
                      <p className="text-xs text-gray-400">
                        Tailored to Your Expertise
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-gray-300 leading-relaxed">
                    Delegate complex tasks in natural language to your
                    domain-specific personal assistant.
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <p className="text-xs text-gray-500">Explore Assistant →</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 leading-tight">
                MAIGrid™{" "}
                <span className="text-muted-foreground text-3xl">
                  My Process | My Priority | My AI
                </span>
              </h2>

              <p className="text-base text-muted-foreground font-semibold leading-relaxed mb-6">
                MAIGrid captures your objectives context, then generates an
                execution-ready roadmap: what to do first, what to delegate, and
                what to avoid.
              </p>

              <ul className="space-y-4">
                <li className="flex gap-3">
                  <span className="text-foreground font-semibold flex-shrink-0">
                    •
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Process Map:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      All critical processes and sub-processes across business
                      functions are pre-mapped—so you dont have to
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-semibold flex-shrink-0">
                    •
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Intelligent Discovery:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      Advisory-grade intake that reads your context, translating
                      noise into strategic signal.
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-foreground font-semibold flex-shrink-0">
                    •
                  </span>
                  <div>
                    <span className="font-semibold text-foreground">
                      Prioritisation:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      Consulting-grade, context-aware prioritisation—grounded in
                      your function, personalised to your business.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Testimonial */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <p className="text-sm text-foreground italic mb-4">
                "Game-changer. Without this, we'd have spent millions on
                consulting—or settled for cookie-cutter quadrants"
              </p>

              <div className="flex justify-end gap-3">
                <Image src="/avatar.jpg" alt="" width={50} height={50} className="rounded-md" />
                <div className="mt-4">
                  <p className="text-sm font-semibold text-foreground">
                    Peter Dunes
                  </p>
                  <p className="text-xs text-muted-foreground">
                    CTO, Mashreq Bank
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div>
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg px-8 py-6 text-base font-semibold"
              >
                Explore MAIGrid →
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
