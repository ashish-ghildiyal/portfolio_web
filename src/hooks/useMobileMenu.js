import { useState, useEffect } from "react";

/**
 * Manages open/close state for the mobile drawer menu.
 * Automatically closes when a click lands outside the nav or hamburger button.
 */
export function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleOutsideClick = (e) => {
      const clickedNav       = e.target.closest("#mobile-nav");
      const clickedHamburger = e.target.closest("#hamburger");
      if (!clickedNav && !clickedHamburger) setIsOpen(false);
    };

    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, [isOpen]);

  const toggle = () => setIsOpen((prev) => !prev);
  const close  = () => setIsOpen(false);

  return { isOpen, toggle, close };
}