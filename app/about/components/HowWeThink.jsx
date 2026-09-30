import React from "react";
import { Lightbulb, BookOpen, Layers, Minimize2 } from "lucide-react";
import { Container, SectionHeading, IconTile } from "./shared";

const principles = [
  {
    icon: Lightbulb,
    title: "Build Useful",
    text: "We focus on solving real problems instead of building technology for the sake of technology.",
  },
  {
    icon: BookOpen,
    title: "Keep Learning",
    text: "Technology changes quickly, so we continuously learn, experiment, and improve.",
  },
  {
    icon: Layers,
    title: "Think Long Term",
    text: "We care about maintainable code, reusable systems, and products that can evolve.",
  },
  {
    icon: Minimize2,
    title: "Make It Simple",
    text: "Good software should solve complexity without unnecessarily creating more complexity.",
  },
];

const HowWeThink = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading title="How We Think" />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map(({ icon, title, text }) => (
            <div
              key={title}
              className="rounded-2xl border border-[#080f20]/10 bg-white p-6 transition-colors duration-300 hover:border-[#FF4D4D]/50 dark:border-white/10 dark:bg-[#0b1225]"
            >
              <IconTile icon={icon} />
              <h3 className="mt-5 text-base font-semibold text-[#080f20] dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default HowWeThink;
