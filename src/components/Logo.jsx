"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";

export const Logo = () => {
  const { theme } = useTheme();

  const darkTheme =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const srcLogo =
    theme === "dark" || (theme === "system" && darkTheme)
      ? "logo-white.svg"
      : "logo.svg";

  useEffect(() => {
    srcLogo;
  }, []);

  // if (typeof window !== "undefined") {
  //   console.log(window.innerWidth);
  // }

  console.log(darkTheme);
  
  return (
    <Link className="max-w-max" href="/">
      <Image src={srcLogo} width={200} height={20} alt="Лого" />
    </Link>
  );
};
