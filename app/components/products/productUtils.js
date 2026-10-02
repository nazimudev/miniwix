import { CATEGORIES, FILTER_OPTIONS } from "./data/products";

const categoryLabel = (id) => CATEGORIES.find((c) => c.id === id)?.label ?? "";

/**
 * Search: every word typed must appear somewhere in the product's
 * name, description, technologies, or category label (case-insensitive).
 */
export const matchesSearch = (product, query) => {
  const tokens = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
  if (tokens.length === 0) return true;
  const haystack = [
    product.name,
    product.description,
    categoryLabel(product.category),
    ...product.technologies,
  ]
    .join(" ")
    .toLowerCase();
  return tokens.every((t) => haystack.includes(t));
};

/** Filter: "all", a category id, or a technology option. */
export const matchesFilter = (product, filterId) => {
  if (filterId === "all") return true;
  const option = FILTER_OPTIONS.find((o) => o.id === filterId);
  if (option?.tech) {
    return product.technologies.some(
      (t) => t.toLowerCase() === option.tech.toLowerCase(),
    );
  }
  return product.category === filterId;
};
