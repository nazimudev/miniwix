import React from "react";
import { Check } from "lucide-react";
import { Container } from "./shared";

const steps = [
  { label: "Idea", note: "Problem defined" },
  { label: "Prototype", note: "Working version built" },
  { label: "Product", note: "Ready to use" },
];

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] dark:bg-[#080f20]">
      {/* Grid + single soft glow. Decorative only. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0b12250f_1px,transparent_1px),linear-gradient(to_bottom,#0b12250f_1px,transparent_1px)] bg-size[48px_48px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_72%)] dark:bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-24 h-96 w-96 rounded-full bg-[#FF4D4D]/15 blur-3xl dark:bg-[#FF4D4D]/10"
      />

      <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.15fr_0.85fr] lg:py-32">
        <div>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#080f20]/10 bg-white px-3 py-1 text-xs font-semibold tracking-[0.18em] text-[#080f20] dark:border-white/10 dark:bg-white/5 dark:text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-[#FF4D4D]" />
            ABOUT MINIWIX
          </p>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#080f20] dark:text-white sm:text-5xl lg:text-6xl">
            Building Practical Technology for Ideas That Matter.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6B7280] dark:text-slate-400 sm:text-lg">
            MINIWIX is a technology company focused on building practical
            software products, developer tools, reusable digital solutions, and
            modern applications that help turn ideas into real products faster.
          </p>
        </div>

        {/* The one memorable element: idea → product pipeline card */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl border border-[#080f20]/10 bg-white shadow-xl shadow-[#080f20]/5 dark:border-white/10 dark:bg-[#0b1225] dark:shadow-none">
            <div className="flex items-center gap-2 border-b border-[#080f20]/10 px-4 py-3 dark:border-white/10">
              <span className="h-2.5 w-2.5 rounded-full bg-[#FF4D4D]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#080f20]/15 dark:bg-white/20" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#080f20]/15 dark:bg-white/20" />
              <span className="ml-3 font-mono text-xs text-[#6B7280] dark:text-slate-500">
                miniwix / from-idea-to-product
              </span>
            </div>

            <ol className="space-y-1 p-5">
              {steps.map((s, i) => (
                <li
                  key={s.label}
                  className="flex items-center gap-4 rounded-xl px-3 py-3"
                >
                  <span className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#FF4D4D]/40 bg-[#FF4D4D]/10 text-[#FF4D4D]">
                    <Check
                      className="h-4 w-4"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    {i === steps.length - 1 && (
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#FF4D4D]/20 motion-reduce:hidden" />
                    )}
                  </span>
                  <span>
                    <span className="block text-sm font-semibold text-[#080f20] dark:text-white">
                      {s.label}
                    </span>
                    <span className="block text-sm text-[#6B7280] dark:text-slate-400">
                      {s.note}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;
