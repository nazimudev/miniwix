import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Facebook, ArrowUpRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-(--color-border) bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/images/logo/miniwix_logo.png"
                alt="Miniwix"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <p className="mt-4 max-w-md text-sm leading-6 text-(--color-muted)">
              Software, SaaS, AI and developer products built to help developers
              turn ideas into working products faster.
            </p>

            {/* Social */}
            <div className="mt-6 flex items-center gap-2">
              <Link
                href="#"
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-(--color-border) transition-all duration-300 hover:border-(--color-text) hover:bg-(--color-text)"
              >
                <Image
                  src="/images/social/GitHub.svg"
                  alt="GitHub"
                  width={16}
                  height={16}
                  className="opacity-70 transition-all duration-300 group-hover:opacity-100"
                />
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-(--color-border) transition-all duration-300 hover:border-(--color-text) hover:bg-(--color-text)"
              >
                <Image
                  src="/images/social/LinkedIn.svg"
                  alt="LinkedIn"
                  width={16}
                  height={16}
                  className="opacity-70 transition-all duration-300"
                />
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-sm border border-(--color-border) transition-all duration-300 hover:border-(--color-text) hover:bg-(--color-text)"
              >
                <Image
                  src="/images/social/Facebook.svg"
                  alt="Facebook"
                  width={16}
                  height={16}
                  className="opacity-70 transition-all duration-300"
                />
              </Link>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-(--color-text)">
              Products
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/products"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  All Products
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  Templates
                </Link>
              </li>

              <li>
                <Link
                  href="/products"
                  className="text-sm text-(--color-muted)] transition-colors hover:text-(--color-text)"
                >
                  Starter Kits
                </Link>
              </li>

              <li>
                <Link
                  href="/projects"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-(--color-text)">
              Company
            </h3>

            <ul className="mt-5 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-(--color-muted) transition-colors hover:text-(--color-text)"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-3 border-t border-(--color-border) pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-(--color-muted)">
            © {new Date().getFullYear()} Miniwix. All rights reserved.
          </p>

          <Link
            href="#"
            className="group flex items-center gap-1 text-xs font-medium text-(--color-muted) transition-colors hover:text-(--color-text)"
          >
            Back to top
            <ArrowUpRight
              size={13}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
