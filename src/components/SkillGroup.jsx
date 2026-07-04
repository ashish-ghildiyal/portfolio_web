/**
 * SkillGroup
 * Renders a labeled column of skill bullet points.
 *
 * Props:
 *   title  {string}    – Column heading (e.g. "Area of Expertise")
 *   skills {string[]}  – Array of skill strings
 *   color  {string}    – Dot and title accent color
 */
export default function SkillGroup({ title, skills, color }) {
  return (
    <div>
      <div className="skill-group-title" style={{ color }}>
        {title}
      </div>
      {skills.map((skill) => (
        <div key={skill} className="skill-item">
          <div className="skill-dot" style={{ background: color }} />
          {skill}
        </div>
      ))}
    </div>
  );
}