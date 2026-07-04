import "../styles/about.css";
import SectionTitle from "./SectionTitle";
import { EDUCATION } from "../data/profile";

export default function Education({ sectionRef }) {
  return (
    <section ref={sectionRef} id="education" className="section-gray">
      <div className="card-box">
        <SectionTitle accent="EDUCATIONAL" main="DETAILS" />
        {EDUCATION.map((item, i) => (
          <div key={i} className="edu-item">
            <span style={{ color: "#e74c3c", fontSize: 18 }}>🎓</span>
            <span style={{ fontSize: 14 }}>
              {item.degree} — {item.location}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}