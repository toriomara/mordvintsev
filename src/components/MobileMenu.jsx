import * as React from "react";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "./ui/mode-toggle";
import { SearchBlock } from "./SearchBlock";
import { SocialIcons } from "./SocialIcons";
import { PhoneBlock } from "./PhoneBlock";
import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

export function MobileMenu({ links }) {
  const isDesktop = useMediaQuery("(max-width: 1024px)");

  return (
    isDesktop && (
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <FaBars size={20} />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="grid h-full w-lvw w-full xs:w-4/5 mx-auto xs:px-8 bottom-0 top-0 right-0">
          <DrawerHeader className="flex justify-between">
            <ModeToggle />
            <DrawerClose asChild>
              <Button variant="ghost" size="icon">
                <IoClose size={24} />
              </Button>
            </DrawerClose>
          </DrawerHeader>
          <div className="grid gap-3 content-start justify-center p-4">
            <DrawerTitle className="text-center">Поиск</DrawerTitle>
            <SearchBlock />
          </div>
          <div className="p-4">
            <div className="mt-3 h-[120px]">
              <nav className="flex flex-col items-center">
                {links.map((link, index) => (
                  <div key={index} className="py-2">
                    <NavLink link={link} />
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <DrawerFooter className="flex-row justify-between">
            <SocialIcons layout={"flex"} />
            <PhoneBlock />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  );
}
