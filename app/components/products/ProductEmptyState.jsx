import React from "react";
import { SearchX } from "lucide-react";

const ProductEmptyState = ({ onClear }) => (
  <div className="flex flex-col items-center rounded-2xl border border-dashed border-[#080f20]/15 px-6 py-16 text-center dark:border-white/15">
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#FF4D4D]/10 text-[#FF4D4D]">
      <SearchX className="h-6 w-6" strokeWidth={1.75} aria-hidden="true" />
    </span>
    <h3 className="mt-5 text-lg font-semibold text-[#080f20] dark:text-white">
      No products found
    </h3>
    <p className="mt-1.5 max-w-sm text-sm text-[#6B7280] dark:text-slate-400">
      Try adjusting your search or selecting a different category.
    </p>
    <button
      type="button"
      onClick={onClear}
      className="mt-6 rounded-lg bg-[#080f20] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D4D] dark:bg-white dark:text-[#080f20] dark:hover:bg-[#FF4D4D] dark:hover:text-white"
    >
      Clear filters
    </button>
  </div>
);

export default ProductEmptyState;
