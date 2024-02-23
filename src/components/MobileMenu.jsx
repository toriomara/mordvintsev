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
import { IoClose, IoMenuSharp } from "react-icons/io5";
import { useMediaQuery } from "@/hooks/use-media-query";
import { ModeToggle } from "./ModeToggle";

export function MobileMenu({ links }) {
  const isDesktop = useMediaQuery("(max-width: 768px)");
  // const [open, setOpen] = React.useState(true);

  // const handleClose = () => {
  //   setOpen(!open);
  // };

  return (
    isDesktop &&
    // open && 
    (
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button variant="none">
            <IoMenuSharp
              className="fill-black hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-white"
              size={24}
            />
          </Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="grid h-full w-4/5 mx-auto bottom-0 top-0 right-0">
            <DrawerHeader className="grid auto-rows-min">
              <DrawerClose className="place-self-end" asChild>
                <Button className="p-2" variant="outline">
                  <IoClose
                    className="fill-black hover:fill-slate-600 dark:fill-slate-200 ark:hover:fill-white"
                    size={24}
                  />
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
                      <NavLink link={link} 
                      // onClick={handleClose} 
                      />
                    </div>
                  ))}
                </nav>
              </div>
            </div>
            <DrawerFooter>
              <ModeToggle />
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
  );
}
