import React from "react";
import { Container } from "./shared";

// Conceptual stages only. No dates, numbers, or milestones.
const stages = [
  {
    label: "Today",
    text: "Founders building practical products and tools.",
    h: "sm:h-44",
  },
  {
    label: "Next",
    text: "Useful software products and developer resources.",
    h: "sm:h-60",
  },
  {
    label: "Beyond",
    text: "A growing ecosystem of practical, accessible technology.",
    h: "sm:h-80",
    accent: true,
  },
];

const TeamFuture = () => {
  return (
    <section className="relative overflow-hidden bg-[#040d27] py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size[48px_48px] mask-[radial-gradient(ellipse_at_bottom_right,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -right-24 h-96 w-96 rounded-full bg-[#FF4D4D]/15 blur-3xl"
      />

      <Container className="relative grid items-end gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
            LOOKING AHEAD
          </p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            A Small Team With a Bigger Vision.
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-300 sm:text-lg">
            MINIWIX is growing with the ambition to build useful software
            products, developer resources, and digital solutions that make
            technology more practical and accessible.
          </p>
        </div>

        <ol className="flex flex-col gap-3 sm:flex-row sm:items-end">
          {stages.map(({ label, text, h, accent }) => (
            <li
              key={label}
              className={`flex flex-1 flex-col justify-end rounded-2xl border p-5 transition-colors duration-300 ${h} ${
                accent
                  ? "border-[#FF4D4D]/60 bg-[#FF4D4D]/10"
                  : "border-white/10 bg-white/4 hover:border-[#FF4D4D]/40"
              }`}
            >
              <span
                className={`text-sm font-semibold ${accent ? "text-[#FF4D4D]" : "text-white"}`}
              >
                {label}
              </span>
              <span className="mt-1.5 text-sm leading-relaxed text-slate-300">
                {text}
              </span>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
};

export default TeamFuture;
