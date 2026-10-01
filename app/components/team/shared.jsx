import React from "react";
import Image from "next/image";
import { MEMBERS } from "./teamData";

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

export const SectionHeading = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => (
  <div
    className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}
  >
    {eyebrow && (
      <p className="mb-3 text-xs font-semibold tracking-[0.18em] text-[#FF4D4D]">
        {eyebrow}
      </p>
    )}
    <h2 className="text-3xl font-bold tracking-tight text-[#080f20] dark:text-white sm:text-4xl">
      {title}
    </h2>
    {description && (
      <p className="mt-4 text-base leading-relaxed text-[#6B7280] dark:text-slate-400">
        {description}
      </p>
    )}
  </div>
);

/** Two overlapping round photos. `ringClass` should match the section background. */
export const AvatarPair = ({
  size = 48,
  ringClass = "ring-[#f7f9fd] dark:ring-[#080f20]",
}) => (
  <div className="flex -space-x-3">
    {MEMBERS.map((m) => (
      <span
        key={m.id}
        className={`relative inline-block overflow-hidden rounded-full ring-4 ${ringClass}`}
        style={{ width: size, height: size }}
      >
        <Image
          src={m.image}
          alt={m.alt}
          fill
          sizes={`${size}px`}
          className="object-cover object-top"
        />
      </span>
    ))}
  </div>
);
