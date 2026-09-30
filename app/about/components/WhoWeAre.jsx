import React from "react";
import { Wrench, TrendingUp, Layers, Terminal, Users } from "lucide-react";
import { Container, SectionHeading } from "./shared";

const qualities = [
  {
    icon: Wrench,
    title: "Practical",
    text: "Built to solve a real, specific problem.",
  },
  {
    icon: TrendingUp,
    title: "Scalable",
    text: "Ready to grow with the product.",
  },
  {
    icon: Layers,
    title: "Maintainable",
    text: "Clean structure that is easy to change.",
  },
  {
    icon: Terminal,
    title: "Developer-friendly",
    text: "Clear code, sensible APIs, good docs.",
  },
  {
    icon: Users,
    title: "User-focused",
    text: "Simple to use for the people it is made for.",
  },
];

const WhoWeAre = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading title="Who We Are" />
          <div className="mt-6 space-y-4 text-base leading-relaxed text-[#6B7280] dark:text-slate-400">
            <p>
              MINIWIX is a small team of developers who care about what gets
              built, not only how much code gets written. Software is only
              useful when someone can actually use it, so we start from the
              problem and work backwards to the code.
            </p>
            <p>
              We work across modern technologies: backend systems, APIs, web
              apps, and Android. Those skills come together in products and
              tools that other developers, startups, and creators can pick up
              and build on.
            </p>
            <p>
              That is the difference we care about. We would rather ship one
              thing that works well and can be maintained than ten things that
              only look good in a demo.
            </p>
          </div>
        </div>

        <ul className="divide-y divide-[#080f20]/10 rounded-2xl border border-[#080f20]/10 bg-[#f7f9fd] dark:divide-white/10 dark:border-white/10 dark:bg-[#080f20]">
          {qualities.map(({ icon: Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 p-5">
              <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#FF4D4D]/10 text-[#FF4D4D]">
                <Icon
                  className="h-4.5 w-4.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h3 className="text-sm font-semibold text-[#080f20] dark:text-white">
                  {title}
                </h3>
                <p className="mt-0.5 text-sm text-[#6B7280] dark:text-slate-400">
                  {text}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default WhoWeAre;
