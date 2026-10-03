import React from "react";

/** categories: string[]; counts: { [category]: number } */
const ProjectFilters = ({ categories, counts, active, onSelect }) => (
  <div
    role="group"
    aria-label="Filter projects by category"
    className="flex flex-wrap gap-2"
  >
    {categories.map((c) => {
      const isActive = active === c;
      return (
        <button
          key={c}
          type="button"
          onClick={() => onSelect(c)}
          aria-pressed={isActive}
          className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-[#FF4D4D] ${
            isActive
              ? "border-[#080f20] bg-[#080f20] text-white dark:border-white dark:bg-white dark:text-[#080f20]"
              : "border-[#080f20]/10 bg-white text-[#080f20] hover:border-[#FF4D4D]/50 hover:text-[#FF4D4D] dark:border-white/10 dark:bg-[#0b1225] dark:text-slate-200 dark:hover:text-[#FF4D4D]"
          }`}
        >
          {c}
          <span
            className={`text-xs tabular-nums ${
              isActive
                ? "text-white/60 dark:text-[#080f20]/60"
                : "text-[#6B7280] dark:text-slate-500"
            }`}
          >
            {counts[c] ?? 0}
          </span>
        </button>
      );
    })}
  </div>
);

export default ProjectFilters;
