import React from "react";
import { Cloud, Wrench, Rocket, Globe, Smartphone, Code2 } from "lucide-react";
import { Container, SectionHeading, IconTile } from "./shared";

const items = [
  {
    icon: Cloud,
    title: "SaaS Products",
    text: "Practical cloud-based products designed to solve real problems.",
  },
  {
    icon: Wrench,
    title: "Developer Tools",
    text: "Tools, utilities, and resources that make development faster and easier.",
  },
  {
    icon: Rocket,
    title: "Starter Kits",
    text: "Production-ready foundations for developers who want to start building quickly.",
  },
  {
    icon: Globe,
    title: "Web Applications",
    text: "Modern web applications with clean architecture and intuitive experiences.",
  },
  {
    icon: Smartphone,
    title: "Android Applications",
    text: "Native Android applications designed for real-world use cases.",
  },
  {
    icon: Code2,
    title: "Custom Software",
    text: "Tailored software solutions for businesses and product ideas.",
  },
];

const WhatWeBuild = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          title="What We Build"
          description="From reusable foundations to full products, everything we make is meant to be used."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map(({ icon, title, text }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-2xl border border-[#080f20]/10 bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#FF4D4D]/50 hover:shadow-lg hover:shadow-[#FF4D4D]/5 dark:border-white/10 dark:bg-[#0b1225] dark:hover:border-[#FF4D4D]/50 dark:hover:shadow-none"
            >
              {/* corner glow on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[#FF4D4D]/0 blur-2xl transition duration-300 group-hover:bg-[#FF4D4D]/15"
              />
              <IconTile
                icon={icon}
                className="group-hover:border-[#FF4D4D]/40"
              />
              <h3 className="mt-5 text-lg font-semibold text-[#080f20] dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default WhatWeBuild;
