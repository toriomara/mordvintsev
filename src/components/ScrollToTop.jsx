"use client";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { FaArrowUp } from "react-icons/fa";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 2000) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          variant="outline"
          size="icon"
          className="group sticky w-10 h-10 border bg-background bottom-6 right-4 xs:bottom-8 xs:right-6 xl:right-8 rounded-full shadow-lg dark:shadow-green-600 transition duration-300 ease-in-out mb-6 ml-8"
          onClick={goToTop}
        >
          <FaArrowUp className="group-hover:text-blue-600 text-gray-500 dark:group-hover:text-green-600" />
        </Button>
      )}
    </>
  );
};
