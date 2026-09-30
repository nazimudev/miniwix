import React from "react";
import Image from "next/image";
import { Container, SectionHeading } from "./shared";
import { TEAM } from "./aboutData";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const linkMeta = {
  github: { icon: IconBrandGithub, label: "GitHub" },
  linkedin: { icon: IconBrandLinkedin, label: "LinkedIn" },
  email: { icon: IconMail, label: "Email" },
};

const TeamCard = ({ person, priority }) => {
  const links = person.links.filter((l) => l.href);

  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-[#080f20]/10 bg-white transition duration-300 hover:-translate-y-1 hover:border-[#FF4D4D]/50 hover:shadow-xl hover:shadow-[#080f20]/5 dark:border-white/10 dark:bg-[#0b1225] dark:hover:shadow-none">
      <div className="relative aspect-[4/4.2] w-full overflow-hidden bg-[#f7f9fd] dark:bg-[#080f20]">
        <Image
          src={person.image}
          alt={person.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 480px, (min-width: 640px) 50vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-black/30 to-transparent"
        />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold text-[#080f20] dark:text-white">
          {person.name}
        </h3>
        <p className="mt-1 text-sm font-medium text-[#FF4D4D]">{person.role}</p>

        <div className="mt-4 space-y-3 text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
          {person.bio.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <ul className="mt-5 flex flex-wrap gap-2">
          {person.focus.map((f) => (
            <li
              key={f}
              className="rounded-full border border-[#080f20]/10 px-3 py-1 text-xs font-medium text-[#080f20] dark:border-white/10 dark:text-slate-200"
            >
              {f}
            </li>
          ))}
        </ul>

        {links.length > 0 && (
          <div className="mt-6 flex gap-2 border-t border-[#080f20]/10 pt-5 dark:border-white/10">
            {links.map(({ type, href }) => {
              const { icon: Icon, label } = linkMeta[type];
              return (
                <a
                  key={type}
                  href={type === "email" ? `mailto:${href}` : href}
                  target={type === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`${person.name} on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#080f20]/10 text-[#6B7280] transition-colors hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:text-slate-400"
                >
                  <Icon
                    className="h-4 w-4"
                    strokeWidth={1.75}
                    aria-hidden="true"
                  />
                </a>
              );
            })}
          </div>
        )}
      </div>
    </article>
  );
};

const Founders = () => {
  return (
    <section className="bg-[#f7f9fd] py-20 dark:bg-[#080f20] sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          title="The People Behind Miniwix"
          description="Built with curiosity, engineering, and a shared vision for practical technology."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2 md:gap-8">
          {TEAM.map((person, i) => (
            <TeamCard key={person.id} person={person} priority={i === 0} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Founders;
