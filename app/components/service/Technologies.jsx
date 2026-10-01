import React from "react";
import { Webhook } from "lucide-react";
import {
  SiLaravel,
  SiPhp,
  SiKotlin,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiMysql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { Container, SectionHeading } from "./shared";

// Requires: npm install react-icons
const techs = [
  { name: "Laravel", kind: "Backend framework", icon: SiLaravel },
  { name: "PHP", kind: "Language", icon: SiPhp },
  { name: "Java", kind: "Language", icon: FaJava },
  { name: "Kotlin", kind: "Android", icon: SiKotlin },
  { name: "JavaScript", kind: "Language", icon: SiJavascript },
  { name: "React", kind: "UI library", icon: SiReact },
  { name: "Next.js", kind: "Web framework", icon: SiNextdotjs },
  { name: "Flutter", kind: "Cross-platform", icon: SiFlutter },
  { name: "MySQL", kind: "Database", icon: SiMysql },
  { name: "REST API", kind: "Architecture", icon: Webhook },
];

const Technologies = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          title="Powered by Modern Technologies"
          description="We work with modern development technologies to create flexible, maintainable, and practical software solutions."
        />

        <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
          {techs.map(({ name, kind, icon: Icon }) => (
            <li
              key={name}
              className="group flex items-center gap-3 rounded-xl border border-[#080f20]/10 bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-[#FF4D4D]/50 dark:border-white/10 dark:bg-[#0b1225]"
            >
              <Icon
                className="h-7 w-7 shrink-0 text-[#080f20] transition-colors group-hover:text-[#FF4D4D] dark:text-white dark:group-hover:text-[#FF4D4D]"
                aria-hidden="true"
              />
              <span className="min-w-0">
                <span className="block truncate text-sm font-semibold text-[#080f20] dark:text-white">
                  {name}
                </span>
                <span className="block truncate text-xs text-[#6B7280] dark:text-slate-400">
                  {kind}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default Technologies;
