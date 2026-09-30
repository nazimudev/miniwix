import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "./shared";
import { CTA_HREF } from "./aboutData";

const AboutCTA = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-[#040d27] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-0 h-56 w-96 -translate-x-1/2 rounded-full bg-[#FF4D4D]/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Have an Idea Worth Building?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Whether you&apos;re thinking about a new product, a developer
              tool, or a custom software solution, let&apos;s turn the idea into
              something real.
            </p>

            <Link
              href={CTA_HREF}
              className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#FF4D4D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6363] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Let&apos;s Talk
              <ArrowUpRight
                className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutCTA;
