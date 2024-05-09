"use client";

// import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useCallback, useEffect } from "react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { BsSun, BsMoon } from "react-icons/bs";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  const handleModeToggle = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [setTheme, theme]);

  useEffect(() => {
    function toggleModeByKeys(evt) {
      if (evt.shiftKey && evt.keyCode === 68) {
        handleModeToggle();
      }
    }
    document.addEventListener("keydown", toggleModeByKeys);
    return () => {
      document.removeEventListener("keydown", toggleModeByKeys);
    };
  }, [handleModeToggle, theme]);

  return (
    <TooltipProvider>
      <Tooltip>
        <DropdownMenu>
          <DropdownMenuTrigger className="md:flex" asChild>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <BsSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <BsMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Смена темы</span>
              </Button>
            </TooltipTrigger>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem
              className={`${theme === "light" ? "text-primary" : ""}`}
              onClick={() => setTheme("light")}
            >
              Светлая
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`${theme === "dark" ? "text-primary" : ""}`}
              onClick={() => setTheme("dark")}
            >
              Тёмная
            </DropdownMenuItem>
            <DropdownMenuItem
              className={`${theme === "system" ? "text-primary" : ""}`}
              onClick={() => setTheme("system")}
            >
              Системная
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <TooltipContent>
          <p>Сменить тему</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
