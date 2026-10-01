"use client";

import React, { useState } from "react";
import { Plus } from "lucide-react";
import { Container, SectionHeading } from "./shared";
import { FAQS } from "./servicesData";

const ServicesFAQ = () => {
  const [open, setOpen] = useState(0); // one item open at a time; set to null for all closed

  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          title="Frequently Asked Questions"
          description="Short answers to the most common questions about working with MINIWIX."
        />

        <div className="divide-y divide-[#080f20]/10 rounded-2xl border border-[#080f20]/10 dark:divide-white/10 dark:border-white/10">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <h3>
                  <button
                    type="button"
                    id={`faq-trigger-${i}`}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left text-base font-semibold text-[#080f20] transition-colors hover:text-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-offset-2px focus-visible:outline-[#FF4D4D] dark:text-white dark:hover:text-[#FF4D4D]"
                  >
                    {item.q}
                    <Plus
                      className={`h-5 w-5 shrink-0 text-[#FF4D4D] transition-transform duration-300 motion-reduce:transition-none ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-trigger-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default ServicesFAQ;
