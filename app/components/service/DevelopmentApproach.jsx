import React from "react";
import { Search, ClipboardList, Hammer, RefreshCw } from "lucide-react";
import { Container, SectionHeading } from "./shared";

const steps = [
  {
    n: "01",
    icon: Search,
    title: "Discover",
    text: "Understand the idea, goals, requirements, and real-world problems.",
  },
  {
    n: "02",
    icon: ClipboardList,
    title: "Plan",
    text: "Define the structure, technologies, features, and development direction.",
  },
  {
    n: "03",
    icon: Hammer,
    title: "Build",
    text: "Develop the solution with clean architecture, responsive interfaces, and practical functionality.",
  },
  {
    n: "04",
    icon: RefreshCw,
    title: "Improve",
    text: "Test, refine, optimize, and prepare the solution for future growth.",
  },
];

// Staircase offset on large screens. Written in full for Tailwind.
const offsets = ["", "lg:mt-6", "lg:mt-12", "lg:mt-[4.5rem]"];

const DevelopmentApproach = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          title="From Idea to Implementation"
          description="Every successful product starts with a clear understanding of the problem. Our approach focuses on thoughtful planning, practical engineering, and continuous improvement."
        />

        <ol className="relative mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4 lg:items-start lg:gap-6">
          {/* Dashed path behind the staircase (desktop only) */}
          <svg
            aria-hidden="true"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="pointer-events-none absolute left-0 top-11 hidden h-24 w-full text-[#FF4D4D]/50 lg:block"
          >
            <line
              x1="0"
              y1="0"
              x2="100"
              y2="100"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeDasharray="5 5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          {steps.map(({ n, icon: Icon, title, text }, i) => (
            <li
              key={n}
              className={`group relative rounded-2xl border border-[#080f20]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF4D4D]/50 dark:border-white/10 dark:bg-[#0b1225] ${offsets[i]}`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                    i === steps.length - 1
                      ? "border-[#FF4D4D] bg-[#FF4D4D] text-white"
                      : "border-[#FF4D4D]/30 bg-[#FF4D4D]/10 text-[#FF4D4D]"
                  }`}
                >
                  <Icon
                    className="h-5 w-5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <span className="font-mono text-3xl font-semibold text-[#080f20]/10 dark:text-white/10">
                  {n}
                </span>
              </div>
              <h3 className="mt-5 text-lg font-semibold text-[#080f20] dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default DevelopmentApproach;
