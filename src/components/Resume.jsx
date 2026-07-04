import "../styles/resume.css";
import { PROFILE } from "../data/profile";

export default function Resume({ sectionRef }) {
  return (
    <section ref={sectionRef} id="resume" className="section-dark">
      <h4 style={{ color: "#fff", fontSize: 20, fontWeight: 700, marginBottom: 24, letterSpacing: 1 }}>
        WANT TO KNOW MORE ABOUT ME?
      </h4>
      <a
        href={PROFILE.resumeFile}
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        ⬇ Download Resume
      </a>
    </section>
  );
}