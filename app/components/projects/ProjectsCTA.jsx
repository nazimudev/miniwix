import React from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight } from "lucide-react";
import { Container } from "./shared";

const ProjectsCTA = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#040d27] px-6 py-14 text-white sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_top_right,black,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#FF4D4D]/20 blur-3xl"
          />

          <div className="relative max-w-2xl">
            <p
              aria-hidden="true"
              className="mb-5 font-mono text-sm text-slate-400"
            >
              <span className="text-[#FF4D4D]">$</span> miniwix start --project
            </p>
            <h2 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
              Have a Project in Mind?
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Every great digital solution begins with a conversation. Tell us
              about your idea, and let&apos;s explore how we can bring it to
              life.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#FF4D4D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6363] focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Start a Project
                <ArrowUpRight
                  className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/service"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/50 hover:bg-white/5 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Explore Our Services
                <ArrowRight
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProjectsCTA;
