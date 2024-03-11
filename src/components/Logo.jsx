"use client";

import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import dynamic from "next/dynamic";

import LogoWhite from "../../public/logo-white.svg";
import LogoBlack from "../../public/logo.svg";

export const Logo = () => {
  const { theme } = useTheme();

  // const WhiteLogo = dynamic(() => import("./../../public/logo-white.svg"), { ssr: false });
  // const BlackLogo = dynamic(() => import("./../../public/logo.svg"), { ssr: false });

  const darkTheme =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches;

  const srcLogo =
    theme === "dark" || (theme === "system" && darkTheme)
    ? "logo-white.svg"
    : "logo.svg"
    // ? LogoWhite
    // : LogoBlack
  // ? WhiteLogo
  // : BlackLogo;

  useEffect(() => {
    srcLogo;
  }, []);

  // if (typeof window !== "undefined") {
  //   console.log(window.innerWidth);
  // }

  console.log(srcLogo);

  return (
    <Link className="max-w-max" href="/">
      <Image className="hidden dark:block" src={LogoWhite} width={195} height={19} alt="Лого" />
      <Image className="block dark:hidden" src={LogoBlack} width={195} height={19} alt="Лого" />
      {/* <Image src={srcLogo} width={200} height={20} alt="Лого" /> */}
    </Link>
  );
};
