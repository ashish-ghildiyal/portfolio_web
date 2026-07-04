import "../styles/skills.css";
import SectionTitle              from "./SectionTitle";
import SkillGroup                from "./SkillGroup";
import { AREA_SKILLS, OTHER_SKILLS } from "../data/skills";

export default function Skills({ sectionRef }) {
  return (
    <section ref={sectionRef} id="skills" className="section-gray">
      <div className="card-box">
        <SectionTitle accent="MY" main="SKILLS" />
        <div className="skills-grid">
          <SkillGroup title="Area of Expertise" skills={AREA_SKILLS} color="#e74c3c" />
          <SkillGroup title="Other Skills"       skills={OTHER_SKILLS} color="#2a6496" />
        </div>
      </div>
    </section>
  );
}