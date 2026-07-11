import "../styles/sidebar.css";
import { NAV_ITEMS } from "../data/navItems";
import { PROFILE }   from "../data/profile";

export default function Sidebar({ activeSection, onNavClick }) {
  return (
    <>
      {/* ── Desktop Sidebar ── */}
      <aside className="sidebar">
        <div className="sidebar-avatar">
          <img src={PROFILE.profile_pic} alt={PROFILE.name} />
          {/* <img src={`${PROFILE.profile_pic}`} alt="jignesh"/> */}
          </div>
        <div className="sidebar-name">{PROFILE.name}</div>
        {/* <div className="sidebar-sub">{PROFILE.subtitle}</div> */}

        <nav>
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              className={`nav-btn${activeSection === item.id ? " active" : ""}`}
              onClick={() => onNavClick(item.id)}
            >
              <span>{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">{PROFILE.footer}</div>
      </aside>
    </>
  );
}