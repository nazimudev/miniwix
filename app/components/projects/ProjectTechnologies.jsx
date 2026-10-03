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
  { name: "Laravel", icon: SiLaravel },
  { name: "PHP", icon: SiPhp },
  { name: "Java", icon: FaJava },
  { name: "Kotlin", icon: SiKotlin },
  { name: "JavaScript", icon: SiJavascript },
  { name: "React", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Flutter", icon: SiFlutter },
  { name: "MySQL", icon: SiMysql },
  { name: "REST APIs", icon: Webhook },
];

const ProjectTechnologies = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          title="Built With Modern Technologies"
          description="We use modern development technologies to create flexible, maintainable, and practical digital solutions."
        />

        <ul className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3">
          {techs.map(({ name, icon: Icon }) => (
            <li
              key={name}
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#080f20]/10 bg-white px-4 py-2.5 text-sm font-medium text-[#080f20] transition duration-300 hover:-translate-y-0.5 hover:border-[#FF4D4D]/50 dark:border-white/10 dark:bg-[#0b1225] dark:text-white"
            >
              <Icon
                className="h-4.5 w-4.5 transition-colors group-hover:text-[#FF4D4D]"
                aria-hidden="true"
              />
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};

export default ProjectTechnologies;
