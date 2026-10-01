"use client";

import React from "react";

/** Anchor that smooth-scrolls to an element id. Works as a normal #link without JS. */
const ScrollButton = ({ targetId, className = "", children }) => {
  const handleClick = (e) => {
    const el = document.getElementById(targetId);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    el.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  return (
    <a href={`#${targetId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};

export default ScrollButton;
