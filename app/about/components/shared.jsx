import React from "react";

export const Container = ({ className = "", children }) => (
  <div className={`mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
    {children}
  </div>
);

/** Consistent section heading used across the About page. */
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

/** Small rounded icon tile, same treatment as the icon cards in the reference. */
export const IconTile = ({ icon: Icon, className = "" }) => (
  <span
    className={`inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#080f20]/10 bg-white text-[#FF4D4D] transition-colors dark:border-white/10 dark:bg-white/5 ${className}`}
  >
    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
  </span>
);
