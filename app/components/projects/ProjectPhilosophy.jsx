import React from "react";
import { Search, PenTool, Sprout } from "lucide-react";
import { Container } from "./shared";

const principles = [
  {
    icon: Search,
    title: "Understand the Problem",
    text: "We focus on understanding the purpose and requirements behind every idea.",
  },
  {
    icon: PenTool,
    title: "Engineer Thoughtfully",
    text: "We value clean architecture, maintainable code, and practical technology choices.",
  },
  {
    icon: Sprout,
    title: "Build for Growth",
    text: "We create solutions with flexibility and future improvements in mind.",
  },
];

const ProjectPhilosophy = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-28">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
            OUR APPROACH
          </p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#080f20] dark:text-white sm:text-4xl lg:text-5xl">
            Every Project Starts With a Purpose.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B7280] dark:text-slate-400">
            We believe meaningful software begins with understanding real
            problems. Our approach combines thoughtful planning, modern
            engineering, and continuous improvement to turn ideas into practical
            digital solutions.
          </p>
        </div>

        {/* Vertical path: one connected line, three stops */}
        <ol className="relative space-y-10 pl-16">
          <span
            aria-hidden="true"
            className="absolute bottom-6 left-[1.4rem] top-6 w-px bg-linear-to-b from-[#080f20]/15 via-[#080f20]/15 to-[#FF4D4D] dark:from-white/15 dark:via-white/15"
          />
          {principles.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group relative">
              <span className="absolute -left-16 top-0 flex h-11 w-11 items-center justify-center rounded-full border border-[#FF4D4D]/40 bg-white text-[#FF4D4D] transition-colors duration-300 group-hover:bg-[#FF4D4D] group-hover:text-white dark:bg-[#0b1225]">
                <Icon
                  className="h-5 w-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <h3 className="text-xl font-semibold text-[#080f20] dark:text-white">
                {title}
              </h3>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default ProjectPhilosophy;
