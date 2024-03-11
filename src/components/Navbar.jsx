"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/constants";
import { ModeToggle } from "./ui/mode-toggle";
import { SearchBlock } from "./SearchBlock";
// import LogoWithNoSSR2 from "./LogoWithNoSSR";
import { Logo } from "./Logo";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 backdrop-blur bg-background/50 border-b border-custom z-10">
      <nav className="wrapper-header mx-auto flex items-center justify-between max-w-screen-xl">
        <div className="flex items-center gap-10">
          <Logo />
          {/* <LogoWithNoSSR2 /> */}
          <div className="menu hidden lg:flex md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center text-[14px] lg:text-[15px]">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    pathname === link.path
                      ? "text-black dark:text-white"
                      : "text-gray-400 dark:text-gray-400 hover:text-black dark:hover:text-white"
                  }`}
                >
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="hidden xs:flex">
            <SearchBlock />
          </div>
          <div className="block lg:hidden">
            <MobileMenu links={navLinks} />
          </div>
          <div className="hidden lg:flex">
            <ModeToggle />
          </div>
        </div>
      </nav>
    </header>
  );
};
