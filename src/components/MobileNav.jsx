import "../styles/sidebar.css";
import { NAV_ITEMS } from "../data/navItems";
import { PROFILE }   from "../data/profile";

/**
 * MobileNav renders:
 *  - a sticky top bar with a hamburger button
 *  - a slide-down drawer with all nav links
 */
export default function MobileNav({ isOpen, onToggle, activeSection, onNavClick }) {
  return (
    <>
      {/* Top bar */}
      <div className="mobile-bar">
        <span className="mobile-bar-name">{PROFILE.name}</span>
        <button
          id="hamburger"
          className="hamburger"
          onClick={onToggle}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Drawer */}
      <div
        id="mobile-nav"
        className={`mobile-drawer${isOpen ? " open" : ""}`}
        role="navigation"
        aria-label="Mobile navigation"
      >
        {NAV_ITEMS.map((item) => (
          <button
            key={item.id}
            className={`mobile-nav-btn${activeSection === item.id ? " active" : ""}`}
            onClick={() => onNavClick(item.id)}
          >
            <span>{item.icon}</span>
            {item.label}
          </button>
        ))}
      </div>
    </>
  );
}