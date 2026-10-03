"use client";

import Link from "next/link";
import { Menu, X, ArrowUpRight, Sun } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import Image from "next/image";
import Logo from "./Logo";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Service", href: "/service" },
  { name: "Products", href: "/products" },
  { name: "Team", href: "/team" },
  { name: "Projects", href: "/projects" },
  { name: "Contact", href: "/contact"}
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 left-0 right-0 z-50 dark:bg-[#040d27] bg-white/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Logo />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="
              text-[14px] 
              font-medium 
              text-gray-600 
              transition 
              hover:text-black
              dark:text-gray-300
              dark:hover:text-white"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden items-center gap-4 md:flex">
          {/* Theme */}
          <ThemeToggle />

          {/* Cart */}
          <Link
            href="#contact"
            className="
              mt-1
              flex
              items-center
              justify-center
              gap-2
              rounded-full
              bg-(--color-dark-btn)
              px-3
              py-2
              text-sm
              font-semibold
              text-white
              transition
              hover:bg-[#FF4D4D]
              hover:text-white
            "
          >
            {`Let's Talk`}
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-md p-2 text-gray-700 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 6l12 12" />
              <path d="M18 6 6 18" />
            </svg>
          ) : (
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16" />
              <path d="M4 12h16" />
              <path d="M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-gray-200 bg-white md:hidden dark:border-gray-800 dark:bg-[#0B0D0F]">
          <div className="mx-auto max-w-7xl px-5 py-4">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="
                    border-b 
                    border-gray-100 
                    py-3 text-sm 
                    font-medium 
                    text-gray-700 
                    hover:text-black
                    dark:border-gray-800
                    dark:text-gray-300
                    dark:hover:text-white
                  "
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-5 pt-4">
              <ThemeToggle />

              <Link
                href="#contact"
                className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-[#0B0D0F] px-3 py-2 text-sm font-semibold text-white transition hover:bg-[#FF4D4D]"
              >
                {`Let's Talk`}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
