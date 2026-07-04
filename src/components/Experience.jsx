import "../styles/experience.css";
import SectionTitle   from "./SectionTitle";
import JobCard        from "./JobCard";
import { WORK_HISTORY } from "../data/workHistory";

export default function Experience({ sectionRef }) {
  return (
    <section ref={sectionRef} id="professional" className="section-white">
      <div className="card-box-gray">
        <SectionTitle accent="PROFESSIONAL" main="WORK HISTORY" />

        <div style={{ marginTop: 8 }}>
          {WORK_HISTORY.map((job, idx) => (
            <div key={idx}>
              <JobCard {...job} />
              {idx < WORK_HISTORY.length - 1 && (
                <div className="job-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}