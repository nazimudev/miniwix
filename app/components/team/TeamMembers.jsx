import React from "react";
import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import { Container, SectionHeading } from "./shared";
import { MEMBERS } from "./teamData";
import { IconBrandGithub, IconBrandLinkedin } from "@tabler/icons-react";

const linkMeta = {
  github: { icon: IconBrandGithub, label: "GitHub" },
  linkedin: { icon: IconBrandLinkedin, label: "LinkedIn" },
  email: { icon: Mail, label: "Email" },
};

// Second card sits lower on tablet/desktop for an editorial stagger.
const offsets = ["", "md:mt-12"];

const MemberCard = ({ member, index }) => {
  const links = member.links.filter((l) => l.href);

  return (
    <article
      className={`group overflow-hidden rounded-3xl border border-[#080f20]/10 bg-[#f7f9fd] transition duration-300 hover:-translate-y-1 hover:border-[#FF4D4D]/50 hover:shadow-xl hover:shadow-[#080f20]/5 dark:border-white/10 dark:bg-[#080f20] dark:hover:shadow-none ${offsets[index] ?? ""}`}
    >
      <div className="relative aspect-4/5 w-full overflow-hidden">
        <Image
          src={member.image}
          alt={member.alt}
          fill
          priority={index === 0}
          sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, 100vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#040d27]/90 via-[#040d27]/40 to-transparent"
        />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white">
          <span className="inline-block rounded-full bg-[#FF4D4D] px-3 py-1 text-xs font-semibold">
            {member.role}
          </span>
          <h3 className="mt-3 text-2xl font-semibold">{member.name}</h3>
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm leading-relaxed text-[#6B7280] dark:text-slate-400">
          {member.bio}
        </p>

        {links.length > 0 && (
          <div className="mt-5 flex gap-2 border-t border-[#080f20]/10 pt-5 dark:border-white/10">
            {links.map(({ type, href }) => {
              const { icon: Icon, label } = linkMeta[type];
              return (
                <a
                  key={type}
                  href={type === "email" ? `mailto:${href}` : href}
                  target={type === "email" ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  aria-label={`${member.name} on ${label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#080f20]/10 text-[#6B7280] transition-colors hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:text-slate-400"
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

const TeamMembers = () => {
  return (
    <section className="bg-white py-20 dark:bg-[#0b1225] sm:py-24">
      <Container>
        <SectionHeading
          align="center"
          title="Meet the People Behind MINIWIX"
          description="MINIWIX is built on a shared vision of creating practical technology and meaningful digital experiences."
        />

        <div className="mx-auto mt-12 grid max-w-4xl gap-6 pb-0 md:grid-cols-2 md:gap-8 md:pb-12">
          {MEMBERS.map((m, i) => (
            <MemberCard key={m.id} member={m} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TeamMembers;
