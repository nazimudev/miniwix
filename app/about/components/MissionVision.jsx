import React from "react";
import { Target, Telescope, Users, Building2, Palette } from "lucide-react";
import { Container } from "./shared";

const audiences = [
  { icon: Users, label: "Developers", finds: "Tools and starter kits" },
  {
    icon: Building2,
    label: "Businesses",
    finds: "Products and custom software",
  },
  {
    icon: Palette,
    label: "Creators",
    finds: "Solutions that bring ideas to life",
  },
];

/* Mission: always-dark statement band, big type, left aligned. */
export const Mission = () => (
  <section className="relative overflow-hidden bg-[#040d27] py-24 text-white sm:py-28">
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size[48px_48px] [mask-image:radial-gradient(ellipse_at_left,black,transparent_75%)]"
    />
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-[#FF4D4D]/15 blur-3xl"
    />
    <Container className="relative">
      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-[#FF4D4D]">
          <Target
            className="h-4.5 w-4.5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
        <h2 className="text-sm font-semibold text-white/70">Our Mission</h2>
      </div>

      <p className="mt-8 max-w-4xl text-2xl font-semibold leading-snug tracking-tight sm:text-3xl lg:text-4xl">
        To make software development more practical, accessible, and efficient
        by building products and tools that help people move from ideas to
        working solutions.
      </p>
    </Container>
  </section>
);

/* Vision: light panel, split layout with a small ecosystem diagram. */
export const Vision = () => (
  <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
    <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <div>
        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#FF4D4D]/10 text-[#FF4D4D]">
          <Telescope
            className="h-5 w-5"
            strokeWidth={1.75}
            aria-hidden="true"
          />
        </span>
        <h2 className="mt-5 text-3xl font-bold tracking-tight text-[#080f20] dark:text-white sm:text-4xl">
          Our Vision
        </h2>
        <p className="mt-5 text-base leading-relaxed text-[#6B7280] dark:text-slate-400 sm:text-lg">
          We envision MINIWIX as a growing technology ecosystem where
          developers, businesses, and creators can find practical tools,
          products, and solutions that help them build better software faster.
        </p>
      </div>

      {/* Ecosystem diagram */}
      <div className="rounded-2xl border border-[#080f20]/10 bg-[#f7f9fd] p-5 dark:border-white/10 dark:bg-[#080f20] sm:p-6">
        <div className="rounded-xl bg-[#080f20] px-4 py-3 text-center text-sm font-bold tracking-wide text-white dark:bg-white dark:text-[#080f20]">
          MINIWIX
        </div>
        <div
          aria-hidden="true"
          className="mx-auto h-6 w-px bg-linear-to-b from-[#FF4D4D] to-transparent"
        />
        <ul className="grid gap-3 sm:grid-cols-3">
          {audiences.map(({ icon: Icon, label, finds }) => (
            <li
              key={label}
              className="rounded-xl border border-[#080f20]/10 bg-white p-4 dark:border-white/10 dark:bg-[#0b1225]"
            >
              <Icon
                className="h-5 w-5 text-[#FF4D4D]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <p className="mt-3 text-sm font-semibold text-[#080f20] dark:text-white">
                {label}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-[#6B7280] dark:text-slate-400">
                {finds}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </Container>
  </section>
);

const MissionVision = () => (
  <>
    <Mission />
    <Vision />
  </>
);

export default MissionVision;
