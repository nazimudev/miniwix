import React from "react";
import { ArrowUpRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-(--color-cta-bg) border border-(--color-border) px-6 py-14 sm:px-10 lg:px-16 lg:py-20">
        <div className="flex flex-col items-start justify-between gap-10 lg:flex-row lg:items-center">
          {/* Content */}
          <div className="max-w-2xl">
            <span className="mb-4 inline-block text-sm font-medium tracking-wide text-(--color-cta-text)">
              {`LET'S BUILD SOMETHING`}
            </span>

            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-(--color-white-cta) sm:text-4xl lg:text-5xl">
              Have an idea?
              <br />
              <span className="text-(--color-cta-text)">
                Let&apos;s turn it into reality.
              </span>
            </h2>

            <p className="mt-5 max-w-xl text-sm leading-6 text-(--color-cta-text) sm:text-base">
              From ideas to working products, Miniwix helps you build practical
              digital experiences faster and better.
            </p>
          </div>

          {/* Button */}
          <div className="shrink-0">
            <button
              type="button"
              className="group inline-flex items-center gap-3 rounded-full bg-(--color-white-cta) px-6 py-3.5 text-sm font-semibold text-[#080f20] transition-all duration-300 hover:gap-4 hover:bg-red-500 hover:text-[#ffffff]"
            >
              Let&apos;s Talk
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#080f20] text-white transition-transform duration-300 group-hover:rotate-45">
                <ArrowUpRight size={16} color="#ffffff" />
              </span>
            </button>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-12 h-px w-full bg-(--color-muted)" />

        <div className="mt-5 flex flex-col justify-between gap-2 text-xs text-(--color-muted) sm:flex-row">
          <span>MINIWIX</span>
          <span>Let&apos;s create something meaningful.</span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
