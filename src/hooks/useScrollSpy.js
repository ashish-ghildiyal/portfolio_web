import { useState, useEffect } from "react";

/**
 * Watches the scroll position of `scrollRef` and returns
 * the id of whichever section is currently in view.
 *
 * @param {React.RefObject} scrollRef  - ref attached to the scrollable container
 * @param {React.RefObject} sectionRefs - ref object whose keys are section ids
 * @param {Array}           navItems    - array of { id } objects
 * @param {number}          offset      - px subtracted from offsetTop (accounts for sticky headers)
 */
export function useScrollSpy(scrollRef, sectionRefs, navItems, offset = 80) {
  const [activeSection, setActiveSection] = useState(navItems[0]?.id ?? "");

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handler = () => {
      const scrollPos = el.scrollTop;
      for (const item of navItems) {
        const section = sectionRefs.current[item.id];
        if (section) {
          const top    = section.offsetTop - offset;
          const bottom = top + section.offsetHeight;
          if (scrollPos >= top && scrollPos < bottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    el.addEventListener("scroll", handler);
    return () => el.removeEventListener("scroll", handler);
  }, [scrollRef, sectionRefs, navItems, offset]);

  return activeSection;
}