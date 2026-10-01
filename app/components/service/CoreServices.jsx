import React from "react";
import { Container, SectionHeading } from "./shared";
import { SERVICES } from "./servicesData";

const card = {
  dark: {
    wrap: "border-white/10 bg-[#080f20] text-white hover:border-[#FF4D4D]/60 dark:bg-[#040d27]",
    title: "text-white",
    text: "text-slate-300",
    num: "text-white/40",
    tile: "border-white/15 bg-white/5 text-[#FF4D4D]",
    tag: "border-white/15 bg-white/5 text-slate-200",
  },
  accent: {
    wrap: "border-[#FF4D4D]/20 bg-[#FF4D4D]/[0.06] hover:border-[#FF4D4D]/60 dark:bg-[#FF4D4D]/[0.07]",
    title: "text-[#080f20] dark:text-white",
    text: "text-[#6B7280] dark:text-slate-400",
    num: "text-[#080f20]/40 dark:text-white/40",
    tile: "border-[#FF4D4D]/30 bg-white text-[#FF4D4D] dark:bg-[#0b1225]",
    tag: "border-[#080f20]/10 bg-white text-[#080f20] dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
  },
  default: {
    wrap: "border-[#080f20]/10 bg-white hover:border-[#FF4D4D]/50 dark:border-white/10 dark:bg-[#0b1225]",
    title: "text-[#080f20] dark:text-white",
    text: "text-[#6B7280] dark:text-slate-400",
    num: "text-[#080f20]/40 dark:text-white/40",
    tile: "border-[#080f20]/10 bg-[#f7f9fd] text-[#FF4D4D] dark:border-white/10 dark:bg-white/5",
    tag: "border-[#080f20]/10 bg-[#f7f9fd] text-[#080f20] dark:border-white/10 dark:bg-white/5 dark:text-slate-200",
  },
};

const ApiVisual = () => (
  <div
    aria-hidden="true"
    className="mt-6 rounded-xl border border-[#080f20]/10 bg-[#f7f9fd] p-4 font-mono text-xs leading-6 text-[#6B7280] dark:border-white/10 dark:bg-[#080f20] dark:text-slate-400"
  >
    <p>
      <span className="text-[#FF4D4D]">GET </span> /api/products
    </p>
    <p>
      <span className="text-[#FF4D4D]">POST</span> /api/auth/token
    </p>
    <p>
      <span className="text-[#FF4D4D]">PUT </span> /api/products/{"{id}"}
    </p>
  </div>
);

const ServiceCard = ({ s }) => {
  const c = card[s.variant];
  const Icon = s.icon;

  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-3xl border p-6 transition duration-300 hover:-translate-y-1 sm:p-7 ${c.wrap} ${s.span}`}
    >
      {s.featured && (
        <>
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-size[36px_36px] mask-[radial-gradient(ellipse_at_top_right,black,transparent_70%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#FF4D4D]/20 blur-3xl"
          />
        </>
      )}

      <div className="relative flex items-start justify-between">
        <span
          className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-transform duration-300 group-hover:scale-105 ${c.tile}`}
        >
          <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
        </span>
        <span className={`font-mono text-sm ${c.num}`}>{s.number}</span>
      </div>

      <h3
        className={`relative mt-6 font-semibold ${c.title} ${
          s.featured ? "text-2xl sm:text-3xl" : "text-xl"
        }`}
      >
        {s.title}
      </h3>
      <p
        className={`relative mt-3 text-sm leading-relaxed sm:text-base ${c.text} ${s.featured ? "max-w-md" : ""}`}
      >
        {s.description}
      </p>

      {s.visual === "api" && <ApiVisual />}

      <ul className="relative mt-auto flex flex-wrap gap-2 pt-6">
        {s.tags.map((t) => (
          <li
            key={t}
            className={`rounded-full border px-3 py-1 text-xs font-medium ${c.tag}`}
          >
            {t}
          </li>
        ))}
      </ul>
    </article>
  );
};

const CoreServices = () => {
  return (
    <section
      id="services"
      className="scroll-mt-20 bg-white py-20 dark:bg-[#0b1225] sm:py-24"
    >
      <Container>
        <SectionHeading
          title="What We Can Build for You"
          description="We combine engineering, creativity, and practical thinking to build digital solutions that solve real problems."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-12 lg:gap-5">
          {SERVICES.map((s) => (
            <ServiceCard key={s.id} s={s} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoreServices;
