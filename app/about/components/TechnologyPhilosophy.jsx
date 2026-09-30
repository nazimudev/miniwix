import React from "react";
import { Server, Smartphone, Globe } from "lucide-react";
import { Container, SectionHeading } from "./shared";

const layers = [
  {
    icon: Server,
    name: "Backend & data",
    text: "The foundation: logic, storage, and the APIs everything else talks to.",
    tech: ["Laravel", "PHP", "MySQL", "REST APIs"],
  },
  {
    icon: Smartphone,
    name: "Mobile",
    text: "Apps built for the phones people actually carry.",
    tech: ["Android", "Kotlin", "Java", "Flutter"],
  },
  {
    icon: Globe,
    name: "Web",
    text: "Fast, modern interfaces that sit on top of solid backends.",
    tech: ["JavaScript", "React", "Next.js"],
  },
];

const TechnologyPhilosophy = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container>
        <SectionHeading
          title="Built With Technology. Driven By Curiosity."
          description="We work with modern technologies and keep exploring better ways to build software. The stack below is not a checklist. It is the set of tools that lets one idea travel from database to screen."
        />

        <div className="relative mt-12 grid gap-5 lg:grid-cols-3">
          {layers.map(({ icon: Icon, name, text, tech }) => (
            <div
              key={name}
              className="rounded-2xl border border-[#080f20]/10 bg-[#f7f9fd] p-6 dark:border-white/10 dark:bg-[#080f20]"
            >
              <div className="flex items-center gap-3">
                <Icon
                  className="h-5 w-5 text-[#FF4D4D]"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
                <h3 className="text-base font-semibold text-[#080f20] dark:text-white">
                  {name}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-[#080f20]/10 bg-white px-2.5 py-1 font-mono text-xs text-[#080f20] transition-colors hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] dark:border-white/10 dark:bg-[#0b1225] dark:text-slate-200 dark:hover:text-[#FF4D4D]"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-2xl text-sm text-[#6B7280] dark:text-slate-400">
          Tools change. What stays the same is the habit of learning, testing
          new approaches, and keeping what actually makes software better.
        </p>
      </Container>
    </section>
  );
};

export default TechnologyPhilosophy;
