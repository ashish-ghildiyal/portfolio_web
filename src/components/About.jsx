import "../styles/about.css";
import { PROFILE, ABOUT_INFO } from "../data/profile"

/** Renders a single label + value (or links) row in the About table. */
function InfoRow({ label, value, links }) {
  return (
    <div className="info-row">
      <span className="info-label">{label}:</span>
      {value && <span className="info-value">{value}</span>}
      {links && (
        <span className="info-value" style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
          {links.map((link, i) => (
            <span key={link.href}>
              <a href={link.href} style={{ color: "#e74c3c", textDecoration: "none", wordBreak: "break-all" }}>
                {link.text}
              </a>
              {i < links.length - 1 && <span style={{ color: "#999" }}>, </span>}
            </span>
          ))}
        </span>
      )}
    </div>
  );
}

export default function About({ sectionRef }) {
  return (
    <section ref={sectionRef} id="about-me" className="section-white">
      {/* Section heading */}
      <div style={{ borderLeft: "4px solid #e74c3c", paddingLeft: 14, marginBottom: 4 }}>
        <h2 style={{ fontSize: 22, fontWeight: 700, color: "#1c1c1c" }}>
          <span style={{ color: "#e74c3c" }}>About </span>Me
        </h2>
      </div>

      <div className="about-grid">
        {/* Info column */}
        <div>
          <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, color: "#1c1c1c" }}>
            {PROFILE.name}
          </h3>
          {ABOUT_INFO.map((row) => (
            <InfoRow key={row.label} {...row} />
          ))}
        </div>

        {/* Video column */}
        <div className="video-placeholder">
          <div>
            {/* <div style={{ fontSize: 36, marginBottom: 8 }}>🎬</div> */}
            {/* <div>Video Resume</div> */}
            <video controls width="100%" height="200">
             <source src={PROFILE.videoFile} type="video/mp4" />
            </video>
            {/* <div style={{ fontSize: 11, color: "#444", marginTop: 4 }}>{PROFILE.videoFile}</div> */}
          </div>
        </div>
      </div>
    </section>
  );
}