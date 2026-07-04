/**
 * JobCard
 * Renders a single work-history entry with icon, title, company, org,
 * date and optional bullet-point responsibilities.
 *
 * Props: { title, company, org, date, bullets[] }
 */
export default function JobCard({ title, company, org, date, bullets }) {
  return (
    <div className="job-item">
      <div className="job-header">
        {/* Icon */}
        <div className="job-icon" aria-hidden="true">💼</div>

        {/* Details */}
        <div style={{ flex: 1 }}>
          <div className="job-title">{title}</div>
          <div className="job-company">{company}</div>
          <div className="job-org">{org}</div>
          <div className="job-date">{date}</div>

          {bullets && bullets.length > 0 && (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {bullets.map((bullet, i) => (
                <li key={i} className="job-bullet">
                  <span style={{ color: "#e74c3c", flexShrink: 0, marginTop: 2 }}>•</span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}