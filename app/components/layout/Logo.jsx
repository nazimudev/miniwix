/* eslint-disable react-hooks/set-state-in-effect */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

const Logo = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Image
        src="/images/logo/logo-light.png"
        alt="Miniwix"
        width={128}
        height={32}
        priority
        className="h-8 w-auto"
      />
    );
  }

  return (
    <Image
      src={
        theme === "dark"
          ? "/images/logo/logo-dark.png"
          : "/images/logo/logo-light.png"
      }
      alt="Miniwix"
      width={128}
      height={32}
      priority
      className="h-8 w-auto"
    />
  );
};

export default Logo;
