import React from "react";
import { Container } from "./shared";

const themes = [
  { word: "Curiosity", note: "Explore better solutions" },
  { word: "Practical thinking", note: "Create useful products" },
  {
    word: "Passion for technology",
    note: "Grow through learning and collaboration",
  },
];

const SharedVision = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-28">
      <Container className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#080f20] dark:text-white sm:text-4xl lg:text-5xl">
            More Than a Team. A Shared Vision.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-[#6B7280] dark:text-slate-400">
            MINIWIX brings together curiosity, practical thinking, and a passion
            for technology. Our goal is to create useful products, explore
            better solutions, and continuously grow through learning and
            collaboration.
          </p>
        </div>

        {/* Typographic composition, not a card grid */}
        <ul className="border-t border-[#080f20]/10 dark:border-white/10">
          {themes.map(({ word, note }) => (
            <li
              key={word}
              className="group flex flex-col gap-1 border-b border-[#080f20]/10 py-6 transition-colors dark:border-white/10 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="flex items-center gap-3 text-2xl font-bold tracking-tight text-[#080f20] transition duration-300 group-hover:translate-x-1 group-hover:text-[#FF4D4D] dark:text-white dark:group-hover:text-[#FF4D4D] sm:text-3xl lg:text-4xl">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 shrink-0 rounded-full bg-[#FF4D4D]"
                />
                {word}
              </span>
              <span className="pl-5 text-sm text-[#6B7280] dark:text-slate-400 sm:max-w-44 sm:pl-0 sm:text-right">
                {note}
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default SharedVision;
