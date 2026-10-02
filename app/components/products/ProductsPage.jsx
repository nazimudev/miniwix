"use client";

import React, { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES, FILTER_OPTIONS } from "./data/products";
import { matchesSearch, matchesFilter } from "./productUtils";
import ProductsHeader from "./ProductsHeader";
import ProductsToolbar from "./ProductsToolbar";
import ProductSidebar from "./ProductSidebar";
import ProductGrid from "./ProductGrid";
import ProductEmptyState from "./ProductEmptyState";

/**
 * Owns the two pieces of state: the search text and ONE filter id.
 * The sidebar and the dropdown both read/write that same filter id,
 * so they can never disagree.
 */
const ProductsPage = () => {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const searched = useMemo(
    () => PRODUCTS.filter((p) => matchesSearch(p, query)),
    [query],
  );
  const results = useMemo(
    () => searched.filter((p) => matchesFilter(p, filter)),
    [searched, filter],
  );

  // Counts are computed from data (and respect the current search),
  // so the number beside a category equals what you'll see when you click it.
  const sidebarItems = useMemo(
    () => [
      { id: "all", label: "All Products", count: searched.length },
      ...CATEGORIES.map((c) => ({
        ...c,
        count: searched.filter((p) => p.category === c.id).length,
      })),
    ],
    [searched],
  );

  const activeLabel =
    sidebarItems.find((i) => i.id === filter)?.label ??
    FILTER_OPTIONS.find((o) => o.id === filter)?.label ??
    "All Products";

  const isFiltered = query.trim() !== "" || filter !== "all";
  const clearAll = () => {
    setQuery("");
    setFilter("all");
  };

  return (
    <section className="bg-[#f7f9fd] dark:bg-[#080f20]">
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <ProductsHeader />

        <div className="mt-8 grid gap-6 lg:grid-cols-[13rem_1fr] lg:gap-10">
          <aside>
            <ProductSidebar
              items={sidebarItems}
              activeId={filter}
              activeLabel={activeLabel}
              onSelect={setFilter}
            />
          </aside>

          <div className="min-w-0">
            <ProductsToolbar
              query={query}
              onQueryChange={setQuery}
              filter={filter}
              onFilterChange={setFilter}
            />

            <div className="mb-4 mt-5 flex items-center justify-between text-sm text-[#6B7280] dark:text-slate-400">
              <p aria-live="polite">
                Showing {results.length} of {PRODUCTS.length} products
              </p>
              {isFiltered && (
                <button
                  type="button"
                  onClick={clearAll}
                  className="font-medium text-[#080f20] underline-offset-4 transition-colors hover:text-[#FF4D4D] hover:underline focus-visible:outline-2 focus-visible:outline-[#FF4D4D] dark:text-white dark:hover:text-[#FF4D4D]"
                >
                  Clear filters
                </button>
              )}
            </div>

            {results.length > 0 ? (
              <ProductGrid products={results} />
            ) : (
              <ProductEmptyState onClear={clearAll} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsPage;
