import { Card } from "@/components/ui/card";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductList = () => {
  return (
    <Card size="sm" className="rounded-sm border-(--color-border) bg-white p-0 shadow-none">
      <div className="p-5">
        {/* Product Image */}
        <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-md border border-(--color-border) bg-(--color-light)">
          <Image
            src="/images/products/laravel.svg"
            alt="Laravel SaaS Starter Kit"
            width={42}
            height={42}
            className="h-10 w-10 object-contain"
          />
        </div>

        {/* Product Info */}
        <div>
          <h2 className="text-lg font-semibold tracking-tight text-(--color-text)">
            Laravel SaaS Starter Kit
          </h2>

          <p className="mt-2 line-clamp-3 text-sm leading-6 text-(--color-muted)">
            A modern Laravel starter kit designed to help developers quickly
            build scalable SaaS applications with authentication, API
            integration, and essential features.
          </p>
        </div>

        {/* Tags */}
        <div className="mt-5 flex flex-wrap gap-2">
          <span className="rounded-sm border border-(--color-border) px-2.5 py-1 text-xs font-medium text-(--color-muted)">
            Laravel
          </span>

          <span className="rounded-sm border border-(--color-border) px-2.5 py-1 text-xs font-medium text-(--color-muted)">
            PHP
          </span>

          <span className="rounded-sm border border-(--color-border) px-2.5 py-1 text-xs font-medium text-(--color-muted)">
            API
          </span>

          <span className="rounded-sm border border-(--color-border) px-2.5 py-1 text-xs font-medium text-(--color-muted)">
            SaaS
          </span>
        </div>

        {/* Bottom */}
        <div className="mt-6 flex items-center justify-between border-t border-(--color-border) pt-4">
          {/* Price */}
          <div>
            <span className="text-xs text-(--color-muted)">
              Starting at
            </span>

            <p className="mt-0.5 text-lg font-bold text-(--color-text)">
              $49
            </p>
          </div>

          {/* View Details */}
          <Link
            href="/products/laravel-saas-starter-kit"
            className="group flex items-center gap-1.5 text-sm font-semibold text-(--color-text) transition-colors hover:text-(--color-red)"
          >
            View Details
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </Card>
  );
};

export default ProductList;
