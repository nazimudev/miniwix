import React from "react";
import { Container, AvatarPair } from "./shared";

const TeamHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] dark:bg-[#080f20]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0b12250f_1px,transparent_1px),linear-gradient(to_bottom,#0b12250f_1px,transparent_1px)] bg-size-[48px_48px] mask-[radial-gradient(ellipse_at_top,black,transparent_70%)] dark:bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-md -translate-x-1/2 rounded-full bg-[#FF4D4D]/12 blur-3xl dark:bg-[#FF4D4D]/10"
      />

      <Container className="relative py-16 text-center sm:py-20 lg:py-24">
        <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
          MEET THE TEAM
        </p>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-[#080f20] dark:text-white sm:text-5xl lg:text-6xl">
          The People Behind the Ideas.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#6B7280] dark:text-slate-400 sm:text-lg">
          Behind every meaningful product is a team driven by curiosity,
          creativity, and a shared vision. Meet the people building MINIWIX.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <AvatarPair size={52} />
          <p className="text-left text-sm text-[#6B7280] dark:text-slate-400">
            <span className="block font-semibold text-[#080f20] dark:text-white">
              Two founders
            </span>
            One shared vision
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TeamHero;
