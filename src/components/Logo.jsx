"use client";

import Image from "next/image";
import Link from "next/link";
import LogoWhite from "../../public/logo-white.svg";
import LogoBlack from "../../public/logo.svg";

export const Logo = () => {

  return (
    <Link className="max-w-max" href="/">
      <Image
        className="hidden dark:block"
        src={LogoWhite}
        width={195}
        height={19}
        alt="Лого"
      />
      <Image
        className="block dark:hidden"
        src={LogoBlack}
        width={195}
        height={19}
        alt="Лого"
      />
    </Link>
  );
};
