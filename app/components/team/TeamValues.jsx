import React from "react";
import { Compass, Palette, Users, BookOpen } from "lucide-react";
import { Container, SectionHeading } from "./shared";

const values = [
  {
    icon: Compass,
    title: "Curiosity",
    text: "We believe every new idea is an opportunity to explore, learn, and discover better solutions.",
  },
  {
    icon: Palette,
    title: "Creativity",
    text: "We enjoy approaching problems with fresh perspectives and thoughtful ideas.",
  },
  {
    icon: Users,
    title: "Collaboration",
    text: "We believe meaningful products grow through shared ideas, communication, and teamwork.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learning",
    text: "We continuously explore technologies, improve our skills, and adapt to new possibilities.",
  },
];

const TeamValues = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container>
        <SectionHeading title="What Brings Us Together" />

        <ul className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <li key={title} className="group relative pt-6">
              {/* top rule that fills with the accent on hover */}
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-[#080f20]/10 dark:bg-white/10"
              />
              <span
                aria-hidden="true"
                className="absolute left-0 top-0 h-0.5 w-full origin-left scale-x-[0.15] bg-[#FF4D4D] transition-transform duration-500 group-hover:scale-x-100 motion-reduce:transition-none"
              />
              <Icon
                className="h-7 w-7 text-[#FF4D4D]"
                strokeWidth={1.75}
                aria-hidden="true"
              />
              <h3 className="mt-5 text-lg font-semibold text-[#080f20] dark:text-white">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
                {text}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default TeamValues;
