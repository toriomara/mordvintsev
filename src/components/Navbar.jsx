"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ModeToggle } from "./ModeToggle";
import { SearchInput } from "./SearchInput";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/constants";

export const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 backdrop-blur bg-background/50 border-b border-custom z-10">
      <nav className="wrapper-header mx-auto flex items-center justify-between max-w-screen-xl">
        <div className="flex items-center gap-6">
          <Link className="text-2xl md:text-3xl font-semibold" href="/">
            LOGO
          </Link>
          <SearchInput />
          <ModeToggle />
        </div>
        <div className="mobile-menu block md:hidden">
          <button className="flex items-center px-2 py-2">
            <MobileMenu links={navLinks} />
          </button>
        </div>
        <div className="menu hidden md:block md:w-auto" id="navbar">
          <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.path}
                className={`${
                  pathname === link.path
                    ? "px-4 py-2 text-white bg-secondary-600 rounded-md"
                    : "block py-2 pl-3 pr-4 sm:text-sl rounded md:p-0 hover:text-secondary-600"
                }`}
              >
                {link.title}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};
