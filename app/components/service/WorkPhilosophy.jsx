import React from "react";
import { Target, Hourglass, Feather } from "lucide-react";
import { Container } from "./shared";

const ideas = [
  {
    icon: Target,
    title: "Solve Real Problems",
    text: "Start from the need, then choose the technology.",
  },
  {
    icon: Hourglass,
    title: "Build for the Long Term",
    text: "Write code that can be maintained, reused, and extended.",
  },
  {
    icon: Feather,
    title: "Keep Things Simple",
    text: "Remove complexity wherever it doesn't help the user.",
  },
];

const WorkPhilosophy = () => {
  return (
    <section className="relative overflow-hidden bg-[#040d27] py-20 text-white sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size[48px_48px] mask-[radial-gradient(ellipse_at_left,black,transparent_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FF4D4D]/15 blur-3xl"
      />

      <Container className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div>
          <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
            OUR WORK PHILOSOPHY
          </p>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
            We Build With Purpose
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            At MINIWIX, we believe technology should make things simpler, not
            more complicated. Whether we are developing an application, building
            a reusable tool, or exploring a new product idea, we focus on
            clarity, usefulness, and thoughtful engineering.
          </p>
        </div>

        <ul className="space-y-3">
          {ideas.map(({ icon: Icon, title, text }) => (
            <li
              key={title}
              className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/4 p-5 transition-colors duration-300 hover:border-[#FF4D4D]/50"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#FF4D4D]/10 text-[#FF4D4D]">
                <Icon
                  className="h-5 w-5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="text-base font-semibold">{title}</h3>
                <p className="mt-1 text-sm text-slate-400">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WorkPhilosophy;
