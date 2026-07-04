import { useRef } from "react";

// Styles
import "./styles/global.css";

// Hooks
import { useBannerSlider } from "./hooks/useBannerSlider";
import { useTypingAnimation } from "./hooks/useTypingAnimation";
import { useScrollSpy }       from "./hooks/useScrollSpy";
import { useMobileMenu }      from "./hooks/useMobileMenu";

// Data
import { NAV_ITEMS } from "./data/navItems";

// Components
import Sidebar    from "./components/Sidebar";
import MobileNav  from "./components/MobileNav";
import Banner     from "./components/Banner";
import About      from "./components/About";
import Education  from "./components/Education";
import Documents  from "./components/Documents";
import Skills     from "./components/Skills";
import Experience from "./components/Experience";
import Resume     from "./components/Resume";


export default function Portfolio() {
  // Refs for scrollable container and each section
  const contentRef  = useRef(null);
  const sectionRefs = useRef({});

  // Custom hooks
  const { bannerIndex, setBannerIndex, currentLabel } = useBannerSlider(4000);
  const { typedText, isTyping }  = useTypingAnimation(currentLabel, 70);
  const activeSection            = useScrollSpy(contentRef, sectionRefs, NAV_ITEMS, 80);
  const { isOpen, toggle, close } = useMobileMenu();

  /** Smooth-scrolls to a section and closes the mobile drawer. */
  const scrollTo = (id) => {
    close();
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth" });
  };

  /** Helper: attaches a section ref by id. */
  const ref = (id) => (el) => { sectionRefs.current[id] = el; };

  return (
    <div className="portfolio-root">
      {/* ── Desktop Sidebar ── */}
      <Sidebar activeSection={activeSection} onNavClick={scrollTo} />

      {/* ── Mobile Top Bar + Drawer ── */}
      <MobileNav
        isOpen={isOpen}
        onToggle={toggle}
        activeSection={activeSection}
        onNavClick={scrollTo}
      />

      {/* ── Main Scrollable Content ── */}
      <main ref={contentRef} className="main-content">
        <Banner
          ref={ref("home")}
          bannerIndex={bannerIndex}
          setBannerIndex={setBannerIndex}
          typedText={typedText}
          isTyping={isTyping}
        />
        <About      sectionRef={ref("about-me")} />
        <Education  sectionRef={ref("education")} />
        <Documents  sectionRef={ref("documents")} />
        <Skills     sectionRef={ref("skills")} />
        <Experience sectionRef={ref("professional")} />
        <Resume     sectionRef={ref("resume")} />
      </main>
    </div>
  );
}