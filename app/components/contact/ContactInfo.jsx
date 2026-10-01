import React from "react";
import { Mail, Globe, MapPin } from "lucide-react";
import { CONTACT, SOCIALS } from "./contactData";
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandLinkedin,
} from "@tabler/icons-react";

const socialIcons = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  facebook: IconBrandFacebook,
};

const rows = [
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: `mailto:${CONTACT.email}`,
  },
  {
    icon: Globe,
    label: "Website",
    value: CONTACT.website,
    href: CONTACT.websiteUrl,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: CONTACT.location,
  },
];

const ContactInfo = () => (
  <div>
    <ul className="space-y-5">
      {rows.map(({ icon: Icon, label, value, href, external }) => (
        <li key={label} className="flex items-start gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#080f20]/10 bg-white text-[#FF4D4D] dark:border-white/10 dark:bg-white/5">
            <Icon
              className="h-4.5 w-4.5"
              strokeWidth={1.75}
              aria-hidden="true"
            />
          </span>
          <div>
            <p className="text-sm font-semibold text-[#080f20] dark:text-white">
              {label}
            </p>
            {href ? (
              <a
                href={href}
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="text-sm text-[#6B7280] transition-colors hover:text-[#FF4D4D] dark:text-slate-400 dark:hover:text-[#FF4D4D]"
              >
                {value}
              </a>
            ) : (
              <p className="text-sm text-[#6B7280] dark:text-slate-400">
                {value}
              </p>
            )}
          </div>
        </li>
      ))}
    </ul>

    <hr className="my-8 border-[#080f20]/10 dark:border-white/10" />

    <div>
      <p className="text-sm font-semibold text-[#080f20] dark:text-white">
        Follow Us
      </p>
      <ul className="mt-3 flex gap-2">
        {SOCIALS.map(({ id, label, href }) => {
          const Icon = socialIcons[id];
          return (
            <li key={id}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`MINIWIX on ${label}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#080f20]/10 bg-white text-[#080f20] transition hover:-translate-y-0.5 hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:text-[#FF4D4D]"
              >
                <Icon
                  className="h-4.5 w-4.5"
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  </div>
);

export default ContactInfo;
