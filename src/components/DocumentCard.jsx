import PdfIcon from "./PdfIcon";

/**
 * DocumentCard
 * A clickable card that opens/downloads a PDF in a new tab.
 *
 * Props:
 *   label {string}  – Display name shown below the icon
 *   file  {string}  – File path relative to the `images/` folder
 */
export default function DocumentCard({ label, file }) {
  return (
    <a
      href={`${import.meta.env.BASE_URL}file`}
      target="_blank"
      rel="noopener noreferrer"
      className="doc-card"
      aria-label={`Open ${label}`}
    >
      <PdfIcon />
      <span style={{ color: "#444", lineHeight: 1.4 }}>{label}</span>
    </a>
  );
}