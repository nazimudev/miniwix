import React from "react";
import { Target, Layers, Cpu, RefreshCw } from "lucide-react";
import { Container, SectionHeading } from "./shared";

const principles = [
  {
    icon: Target,
    title: "Practical Thinking",
    text: "We focus on useful solutions that address real needs.",
  },
  {
    icon: Layers,
    title: "Clean Architecture",
    text: "We value maintainable, organized, and reusable code.",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    text: "We explore and apply modern technologies to build better digital experiences.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    text: "We believe great products evolve through learning, testing, and refinement.",
  },
];

const WhyMiniwix = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeading
          eyebrow="WHY MINIWIX"
          title="Thoughtful Engineering. Practical Results."
          description="Four habits that shape how we build."
        />

        <ul className="grid gap-px overflow-hidden rounded-2xl border border-[#080f20]/10 bg-[#080f20]/10 dark:border-white/10 dark:bg-white/10 sm:grid-cols-2">
          {principles.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="group bg-white p-6 transition-colors hover:bg-[#f7f9fd] dark:bg-[#0b1225] dark:hover:bg-[#080f20]"
            >
              <Icon
                className="h-6 w-6 text-[#FF4D4D] transition-transform duration-300 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-semibold text-[#080f20] dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhyMiniwix;
