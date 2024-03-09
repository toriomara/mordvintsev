import * as React from "react";
import { NavLink } from "./NavLink";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { HamburgerMenuIcon, Cross1Icon } from "@radix-ui/react-icons";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "./ui/mode-toggle";

export function MobileMenu({ links }) {
  const isDesktop = useMediaQuery("(max-width: 1024px)");

  return (
    isDesktop && (
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="ghost" size="icon">
            <HamburgerMenuIcon />
          </Button>
        </DrawerTrigger>
        <DrawerContent className="grid h-full w-lvw xs:w-4/5 mx-auto px-10 bottom-0 top-0 right-0">
          <DrawerHeader className="grid auto-rows-min">
            <DrawerClose className="place-self-end" asChild>
              <Button className="px-2.5" variant="ghost">
                <Cross1Icon />
              </Button>
            </DrawerClose>
            <DrawerTitle>Menu</DrawerTitle>
            <DrawerDescription>
              Здесь будет расположен ряд полезных ссылок или переключателей ||
              Здесь будет расположен ряд полезных ссылок или переключателей ||
              Здесь будет расположен ряд полезных ссылок или переключателей ||
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0">
            <div className="mt-3 h-[120px]">
              <h3>Subheader</h3>
              <nav className="flex flex-col py-4 items-center">
                {links.map((link, index) => (
                  <div key={index} className="py-2">
                    <NavLink link={link} />
                  </div>
                ))}
              </nav>
            </div>
          </div>
          <DrawerFooter>
            <ModeToggle />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    )
  );
}
