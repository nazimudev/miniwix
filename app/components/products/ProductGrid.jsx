import React from "react";
import ProductCard from "./ProductCard";

const ProductGrid = ({ products }) => (
  <ul className="grid gap-5 sm:grid-cols-2">
    {products.map((p, i) => (
      <li key={p.slug}>
        <ProductCard product={p} priority={i < 2} />
      </li>
    ))}
  </ul>
);

export default ProductGrid;
