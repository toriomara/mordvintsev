// Можно удалить. Весь функционал в одноимённой ф-ии в ui

import { useState, useEffect } from "react";
import { IoMoonSharp, IoSunnySharp } from "react-icons/io5";
import { Button } from "./ui/button";

export const ModeToggle = () => {
  const [theme, setTheme] = useState(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

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
  }, [theme]);

  const handleModeToggle = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <i onClick={handleModeToggle} className="hover:cursor-pointer">
        <Button variant="none" size="icon">
          {theme === "dark" ? (
            <IoSunnySharp className="fill-black hover:fill-slate-600 dark:fill-slate-200 dark:hover:fill-white"
            size={24} />
          ) : (
            <IoMoonSharp width={24} className="fill-neutral-700" />
          )}
        </Button>
      </i>
    </div>
  );
};
