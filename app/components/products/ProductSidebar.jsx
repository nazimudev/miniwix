"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

/**
 * items: [{ id, label, count }]  (first item is "all")
 * Desktop: always-visible list. Mobile: collapsible.
 */
const ProductSidebar = ({ items, activeId, activeLabel, onSelect }) => {
  const [open, setOpen] = useState(false);

  const handleSelect = (id) => {
    onSelect(id);
    setOpen(false);
  };

  return (
    <nav aria-label="Product categories" className="lg:sticky lg:top-24">
      <h2 className="mb-3 hidden text-sm font-semibold text-[#080f20] dark:text-white lg:block">
        Categories
      </h2>

      {/* Mobile toggle */}
      <button
        type="button"
        aria-expanded={open}
        aria-controls="category-list"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 rounded-lg border border-[#080f20]/10 bg-white px-3.5 py-2.5 text-sm font-medium text-[#080f20] transition-colors hover:border-[#080f20]/30 focus-visible:outline-2 focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:bg-[#0b1225] dark:text-white lg:hidden"
      >
        <span>
          Categories
          <span className="ml-2 font-normal text-[#6B7280] dark:text-slate-400">
            {activeLabel}
          </span>
        </span>
        <ChevronDown
          className={`h-4 w-4 text-[#6B7280] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          aria-hidden="true"
        />
      </button>

      <ul
        id="category-list"
        className={`${open ? "mt-2 block" : "hidden"} space-y-1 rounded-lg border border-[#080f20]/10 bg-white p-1.5 dark:border-white/10 dark:bg-[#0b1225] lg:block lg:border-0 lg:bg-transparent lg:p-0 lg:dark:bg-transparent`}
      >
        {items.map(({ id, label, count }) => {
          const active = activeId === id;
          return (
            <li key={id}>
              <button
                type="button"
                onClick={() => handleSelect(id)}
                aria-current={active ? "true" : undefined}
                className={`relative flex w-full items-center justify-between gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors focus-visible:outline-2 focus-visible:outline-[#FF4D4D] ${
                  active
                    ? "bg-[#080f20]/6 font-semibold text-[#080f20] dark:bg-white/10 dark:text-white"
                    : "text-[#6B7280] hover:bg-[#080f20]/4 hover:text-[#080f20] dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-white"
                }`}
              >
                {active && (
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-1/2 h-4 w-0.5 -translate-y-1/2 rounded-full bg-[#FF4D4D]"
                  />
                )}
                <span>{label}</span>
                <span className="text-xs tabular-nums text-[#6B7280] dark:text-slate-500">
                  {count}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ProductSidebar;
