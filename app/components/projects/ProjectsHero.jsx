import React from "react";
import { Container } from "./shared";

const Window = ({ className = "", accent = false }) => (
  <div
    className={`absolute w-[78%] rounded-2xl border border-[#080f20]/10 bg-white p-3 shadow-xl shadow-[#080f20]/5 dark:border-white/10 dark:bg-[#0b1225] dark:shadow-none ${className}`}
  >
    <div className="flex gap-1.5">
      <span className="h-2 w-2 rounded-full bg-[#FF4D4D]" />
      <span className="h-2 w-2 rounded-full bg-[#080f20]/15 dark:bg-white/20" />
      <span className="h-2 w-2 rounded-full bg-[#080f20]/15 dark:bg-white/20" />
    </div>
    <div className="mt-3 grid grid-cols-3 gap-2">
      <div
        className={`col-span-2 h-16 rounded-lg ${accent ? "bg-[#FF4D4D]/15" : "bg-[#080f20]/6 dark:bg-white/6"}`}
      />
      <div className="h-16 rounded-lg bg-[#080f20]/6 dark:bg-white/6" />
      <div className="col-span-3 h-2 rounded bg-[#080f20]/10 dark:bg-white/10" />
      <div className="col-span-2 h-2 rounded bg-[#080f20]/10 dark:bg-white/10" />
    </div>
  </div>
);

const ProjectsHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] dark:bg-[#080f20]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0b12250f_1px,transparent_1px),linear-gradient(to_bottom,#0b12250f_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_top_right,black,transparent_70%)] dark:bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#FF4D4D]/15 blur-3xl dark:bg-[#FF4D4D]/10"
      />

      <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-28">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
            OUR WORK
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#080f20] dark:text-white sm:text-5xl lg:text-6xl">
            Ideas Into Digital Reality.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6B7280] dark:text-slate-400 sm:text-lg">
            Explore selected projects where thoughtful engineering meets
            practical solutions. From modern web applications to mobile
            experiences, discover what we build at MINIWIX.
          </p>
        </div>

        {/* Decorative: two overlapping app windows */}
        <div
          aria-hidden="true"
          className="relative mx-auto hidden h-64 w-full max-w-md lg:block"
        >
          <Window className="left-0 top-0" />
          <Window className="bottom-0 right-0" accent />
        </div>
      </Container>
    </section>
  );
};

export default ProjectsHero;
