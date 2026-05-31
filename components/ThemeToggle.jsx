"use client";

import { assets } from "@/assets/assets";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function ThemeToggle({ theme, setTheme }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="cursor-pointer"
    >
      <Image
        src={theme === "dark" ? assets.sun_icon : assets.moon_icon}
        alt="dark mode"
        className="w-6"
      />
    </button>
  );
}
