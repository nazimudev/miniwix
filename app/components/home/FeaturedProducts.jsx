import React from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import ProductList from "./product/ProductList";

const FeaturedProducts = () => {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-10 flex items-end justify-between gap-6">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-(--color-text) md:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-(--color-muted)">
              Ready-to-use code, templates and tools to help you build faster.
            </p>
          </div>

          {/* Right */}
          <Link
            href="/products"
            className="group hidden items-center gap-2 text-sm font-semibold text-(--color-text) sm:flex"
          >
            View All Products
            <ArrowRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Product Cards will go here */}
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
