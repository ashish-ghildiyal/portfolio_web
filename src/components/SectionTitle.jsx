/**
 * SectionTitle
 * Renders a red-accented section heading used across all sections.
 *
 * Usage:
 *   <SectionTitle accent="MY" main="SKILLS" />
 *   → <span style red>MY </span>SKILLS
 */
export default function SectionTitle({ accent, main }) {
  return (
    <div className="section-tag">
      <span>{accent} </span>{main}
    </div>
  );
}