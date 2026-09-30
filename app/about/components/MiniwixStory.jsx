import React from "react";
import { Container, SectionHeading } from "./shared";

// A conceptual journey, not a dated company history.
const steps = [
  {
    n: "01",
    title: "Learn",
    text: "Started with a passion for programming and software development.",
  },
  {
    n: "02",
    title: "Build",
    text: "Started creating applications, APIs, websites, and experimental projects.",
  },
  {
    n: "03",
    title: "Productize",
    text: "Moved from individual projects toward reusable software products and developer tools.",
  },
  {
    n: "04",
    title: "Miniwix",
    text: "MINIWIX represents the vision of turning practical development experience into useful products and solutions.",
    highlight: true,
  },
];

const MiniwixStory = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container>
        <SectionHeading
          title="The Idea Behind Miniwix"
          description="A simple path from learning to building to shipping products."
        />

        <ol className="relative mt-14 grid gap-10 md:grid-cols-4 md:gap-6">
          {/* Horizontal line on desktop */}
          <span
            aria-hidden="true"
            className="absolute left-0 right-0 top-4.75 hidden h-px bg-linear-to-r from-[#080f20]/15 via-[#080f20]/15 to-[#FF4D4D] dark:from-white/15 dark:via-white/15 md:block"
          />
          {/* Vertical line on mobile */}
          <span
            aria-hidden="true"
            className="absolute bottom-0 left-4.75 top-0 w-px bg-linear-to-b from-[#080f20]/15 to-[#FF4D4D] dark:from-white/15 md:hidden"
          />

          {steps.map(({ n, title, text, highlight }) => (
            <li key={n} className="relative flex gap-5 md:block">
              <span
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border font-mono text-xs font-semibold ${
                  highlight
                    ? "border-[#FF4D4D] bg-[#FF4D4D] text-white"
                    : "border-[#080f20]/15 bg-white text-[#080f20] dark:border-white/15 dark:bg-[#0b1225] dark:text-white"
                }`}
              >
                {n}
              </span>
              <div className="md:mt-6">
                <h3 className="text-base font-semibold text-[#080f20] dark:text-white">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default MiniwixStory;
