import React from "react";
import { ArrowDown } from "lucide-react";
import { Container } from "./shared";
import ScrollButton from "./ScrollButton";

const layers = [
  { label: "Interface", items: ["Next.js", "React"] },
  { label: "Mobile", items: ["Kotlin", "Java"] },
  { label: "API", items: ["REST APIs", "Sanctum"] },
  { label: "Data", items: ["Laravel", "MySQL"] },
];

const ServicesHero = () => {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fd] dark:bg-[#080f20]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#0b12250f_1px,transparent_1px),linear-gradient(to_bottom,#0b12250f_1px,transparent_1px)] bg-size[48px_48px] mask-[radial-gradient(ellipse_at_top_left,black,transparent_70%)] dark:bg-[linear-gradient(to_right,#ffffff0d_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0d_1px,transparent_1px)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-32 h-96 w-96 rounded-full bg-[#FF4D4D]/15 blur-3xl dark:bg-[#FF4D4D]/10"
      />

      <Container className="relative grid items-center gap-12 py-20 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:py-32">
        <div>
          <p className="mb-5 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
            WHAT WE DO
          </p>
          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight text-[#080f20] dark:text-white sm:text-5xl lg:text-6xl">
            Technology Solutions Built Around Your Ideas.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6B7280] dark:text-slate-400 sm:text-lg">
            From modern web applications to mobile experiences and scalable
            software products, MINIWIX helps transform ideas into practical
            digital solutions.
          </p>

          <ScrollButton
            targetId="services"
            className="group mt-8 inline-flex items-center gap-2 rounded-xl bg-[#080f20] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D4D] dark:bg-white dark:text-[#080f20] dark:hover:bg-[#FF4D4D] dark:hover:text-white"
          >
            Explore Our Services
            <ArrowDown
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              aria-hidden="true"
            />
          </ScrollButton>
        </div>

        {/* Visual: the layers a product is built from */}
        <div
          className="rounded-2xl border border-[#080f20]/10 bg-white p-5 shadow-xl shadow-[#080f20]/5 dark:border-white/10 dark:bg-[#0b1225] dark:shadow-none"
          aria-hidden="true"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF4D4D]" />
            <span className="font-mono text-xs text-[#6B7280] dark:text-slate-500">
              your-product / stack
            </span>
          </div>
          <div className="space-y-2.5">
            {layers.map(({ label, items }, i) => (
              <div key={label}>
                <div className="flex items-center justify-between rounded-xl border border-[#080f20]/10 bg-[#f7f9fd] px-4 py-3 dark:border-white/10 dark:bg-[#080f20]">
                  <span className="text-sm font-semibold text-[#080f20] dark:text-white">
                    {label}
                  </span>
                  <span className="flex gap-1.5">
                    {items.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-[#080f20]/10 bg-white px-2 py-0.5 font-mono text-xs text-[#080f20] dark:border-white/10 dark:bg-[#0b1225] dark:text-slate-200"
                      >
                        {t}
                      </span>
                    ))}
                  </span>
                </div>
                {i < layers.length - 1 && (
                  <div className="mx-auto h-2.5 w-px bg-[#FF4D4D]/40" />
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ServicesHero;
