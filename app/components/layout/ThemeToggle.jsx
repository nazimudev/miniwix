/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        aria-label="Toggle theme"
        className="flex h-10 w-10 items-center justify-center rounded-full"
      />
    );
  }

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
      flex h-10 w-10 items-center justify-center
      rounded-full
      bg-(--color-dark-btn)
      border border-gray-200
      text-gray-700
      transition
    "
    >
      {theme === "dark" ? (
        <Sun size={18} strokeWidth={2.2} />
      ) : (
        <Moon color="#FCF9EA" size={18} strokeWidth={2} />
      )}
    </button>
  );
}
