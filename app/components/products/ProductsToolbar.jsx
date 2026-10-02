import React from "react";
import { Search, X, ChevronDown } from "lucide-react";
import { FILTER_OPTIONS } from "./data/products";

const control =
  "h-10 rounded-lg border border-[#080f20]/10 bg-white text-sm text-[#080f20] outline-none transition placeholder:text-[#6B7280]/70 hover:border-[#080f20]/30 focus:border-[#FF4D4D] focus:ring-2 focus:ring-[#FF4D4D]/20 dark:border-white/10 dark:bg-[#0b1225] dark:text-white dark:placeholder:text-slate-500 dark:hover:border-white/30";

const ProductsToolbar = ({ query, onQueryChange, filter, onFilterChange }) => (
  <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
    <div className="relative sm:w-64">
      <label htmlFor="product-search" className="sr-only">
        Search products
      </label>
      <Search
        className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]"
        aria-hidden="true"
      />
      <input
        id="product-search"
        type="search"
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
        placeholder="Search products..."
        autoComplete="off"
        className={`${control} w-full pl-9 pr-9 [&::-webkit-search-cancel-button]:appearance-none`}
      />
      {query && (
        <button
          type="button"
          onClick={() => onQueryChange("")}
          aria-label="Clear search"
          className="absolute right-2 top-1/2 flex h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md text-[#6B7280] transition-colors hover:text-[#FF4D4D] focus-visible:outline-2 focus-visible:outline-[#FF4D4D]"
        >
          <X className="h-4 w-4" aria-hidden="true" />
        </button>
      )}
    </div>

    <div className="relative sm:w-48">
      <label htmlFor="product-category" className="sr-only">
        Filter by category
      </label>
      <select
        id="product-category"
        value={filter}
        onChange={(e) => onFilterChange(e.target.value)}
        className={`${control} w-full appearance-none px-3 pr-9`}
      >
        {FILTER_OPTIONS.map((o) => (
          <option key={o.id} value={o.id}>
            {o.label}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#6B7280]"
        aria-hidden="true"
      />
    </div>
  </div>
);

export default ProductsToolbar;
