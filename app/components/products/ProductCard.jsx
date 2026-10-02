"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Package } from "lucide-react";

const ProductCard = ({ product, priority = false }) => {
  // If a preview image is missing, show a neutral placeholder instead of a broken image.
  const [failed, setFailed] = useState(false);

  return (
    <Link
      href={`/products/${product.slug}`}
      aria-label={`${product.name}, $${product.price}`}
      className="group block rounded-2xl border border-[#080f20]/10 bg-white p-2.5 transition duration-300 hover:-translate-y-0.5 hover:border-[#FF4D4D]/50 hover:shadow-lg hover:shadow-[#080f20]/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FF4D4D] dark:border-white/10 dark:bg-[#0b1225] dark:hover:shadow-none"
    >
      <div className="relative aspect-16/10 overflow-hidden rounded-xl bg-[#080f20]">
        {failed ? (
          <div className="flex h-full flex-col items-center justify-center gap-2 text-slate-500">
            <Package className="h-8 w-8" strokeWidth={1.5} aria-hidden="true" />
            <span className="text-xs">Preview coming soon</span>
          </div>
        ) : (
          <Image
            src={product.image}
            alt={`${product.name} preview`}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 380px, (min-width: 640px) 45vw, 100vw"
            onError={() => setFailed(true)}
            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
          />
        )}
      </div>

      <div className="px-2 pb-2 pt-4">
        <h3 className="text-base font-semibold text-[#080f20] dark:text-white">
          {product.name}
        </h3>
        <p className="mt-0.5 text-sm font-medium tabular-nums text-[#080f20] dark:text-slate-200">
          ${product.price}
        </p>

        <div className="mt-4 flex items-center justify-between gap-3">
          <ul className="flex flex-wrap gap-1.5">
            {product.technologies.slice(0, 3).map((t) => (
              <li
                key={t}
                className="rounded-md border border-[#080f20]/10 bg-[#f7f9fd] px-2 py-0.5 text-xs text-[#080f20] dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {t}
              </li>
            ))}
          </ul>
          <ArrowRight
            className="h-4 w-4 shrink-0 text-[#080f20] transition duration-300 group-hover:translate-x-1 group-hover:text-[#FF4D4D] dark:text-white dark:group-hover:text-[#FF4D4D]"
            aria-hidden="true"
          />
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
