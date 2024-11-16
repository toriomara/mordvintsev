"use client";

import Link from "next/link";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "@/constants";
import { ModeToggle } from "./ui/mode-toggle";
import { Logo } from "./Logo";
import { useActivePath } from "@/hooks/usePathHelper";
import { Button } from "./ui/button";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const checkActivePath = useActivePath();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 bg-[#f4f6fb] dark:bg-[#111822] backdrop-blur border-b z-10">
      <nav className="wrapper-header mx-auto flex items-center justify-between max-w-screen-xl">
        <div className="flex items-center gap-10">
          <Logo />
          <div className="menu hidden lg:flex md:w-auto" id="navbar">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 items-center text-sm lg:text-base font-semibold">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.path}
                  className={`${
                    checkActivePath(link.path)
                      ? "text-blue-700 dark:text-white"
                      : "text-gray-700 dark:text-gray-400 hover:text-black dark:hover:text-white"
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
            <Button variant="ghost" size="icon" className="mr-2 text-lg">
              <a href="tel:+79608670139">
                <FaPhoneAlt className="self-center text-blue-700 dark:text-green-600" />
              </a>
            </Button>
            <Link href="/search">
              <Button
                className="px-4 bg-background border"
                variant="secondary"
                onClick={() => setOpen(true)}
              >
                <MagnifyingGlassIcon
                  width={16}
                  className="fill-gray-500 mr-2"
                />
                <span className="text-gray-400">Ctrl + G</span>
              </Button>
            </Link>
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
