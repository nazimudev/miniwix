import React from "react";
import {
  Hammer,
  BookOpen,
  TrendingUp,
  Cpu,
  MessagesSquare,
  Target,
  FlaskConical,
} from "lucide-react";
import { Container, SectionHeading } from "./shared";

const practices = [
  {
    icon: Hammer,
    title: "Learning by building",
    text: "Real projects are the best teacher.",
  },
  {
    icon: Cpu,
    title: "Exploring modern technologies",
    text: "Trying new tools to find what works.",
  },
  {
    icon: MessagesSquare,
    title: "Sharing ideas",
    text: "Good ideas get better when they are discussed.",
  },
  {
    icon: Target,
    title: "Solving practical problems",
    text: "Start with what people actually need.",
  },
  {
    icon: FlaskConical,
    title: "Improving through experimentation",
    text: "Test, learn, and refine.",
  },
];

const nodes = [
  {
    icon: Hammer,
    label: "Build",
    pos: "left-1/2 top-0 -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: BookOpen,
    label: "Learn",
    pos: "left-[93.3%] top-[75%] -translate-x-1/2 -translate-y-1/2",
  },
  {
    icon: TrendingUp,
    label: "Grow",
    pos: "left-[6.7%] top-[75%] -translate-x-1/2 -translate-y-1/2",
  },
];

const TeamCulture = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          title="Building. Learning. Growing."
          description="At MINIWIX, we believe that building great technology starts with a mindset of curiosity and continuous improvement."
        />

        <div className="mt-14 grid items-center gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          {/* Loop diagram */}
          <div className="flex justify-center py-6" aria-hidden="true">
            <div className="relative h-60 w-60 sm:h-72 sm:w-72">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF4D4D]/40" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                <span className="font-mono text-xs text-[#6B7280] dark:text-slate-400">
                  repeat
                </span>
                <span className="mt-1 text-lg font-semibold text-[#080f20] dark:text-white">
                  Every project
                </span>
              </div>
              {nodes.map(({ icon: Icon, label, pos }) => (
                <div
                  key={label}
                  className={`absolute flex flex-col items-center gap-1.5 ${pos}`}
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-full border border-[#FF4D4D]/40 bg-white text-[#FF4D4D] shadow-sm dark:bg-[#0b1225]">
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <span className="rounded-full bg-[#f7f9fd] px-2 text-xs font-semibold text-[#080f20] dark:bg-[#080f20] dark:text-white">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Practices */}
          <ul className="divide-y divide-[#080f20]/10 rounded-2xl border border-[#080f20]/10 bg-white dark:divide-white/10 dark:border-white/10 dark:bg-[#0b1225]">
            {practices.map(({ icon: Icon, title, text }) => (
              <li
                key={title}
                className="group flex items-start gap-4 p-5 transition-colors hover:bg-[#f7f9fd] dark:hover:bg-[#080f20]"
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF4D4D]/10 text-[#FF4D4D]">
                  <Icon
                    className="h-4.5 w-4.5"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </span>
                <div>
                  <h3 className="text-sm font-semibold text-[#080f20] dark:text-white">
                    {title}
                  </h3>
                  <p className="mt-0.5 text-sm text-[#6B7280] dark:text-slate-400">
                    {text}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
};

export default TeamCulture;
