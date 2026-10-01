import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./shared";

const ServicesCTA = () => {
  return (
    <section className="relative overflow-hidden bg-[#040d27] py-24 text-white sm:py-32 lg:py-40">
      {/* Concentric rings + one glow. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-48 top-1/2 -translate-y-1/2"
      >
        <div className="relative h-160 w-160 rounded-full border border-white/10">
          <div className="absolute inset-[15%] rounded-full border border-white/10" />
          <div className="absolute inset-[30%] rounded-full border border-[#FF4D4D]/30" />
          <div className="absolute inset-[42%] rounded-full bg-[#FF4D4D]/20 blur-3xl" />
        </div>
      </div>

      <Container className="relative grid items-end gap-10 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        <h2 className="text-5xl font-bold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
          Have an Idea Worth Building?
        </h2>

        <div>
          <p className="max-w-md text-base leading-relaxed text-slate-300 sm:text-lg">
            Let&apos;s turn your ideas into practical digital solutions with
            thoughtful engineering and modern technology.
          </p>

          <Link
            href="/contact"
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#FF4D4D] py-2 pl-7 pr-2 text-base font-semibold text-white transition hover:bg-[#ff6363] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Start a Conversation
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#040d27]">
              <ArrowUpRight
                className="h-5 w-5 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </span>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServicesCTA;
