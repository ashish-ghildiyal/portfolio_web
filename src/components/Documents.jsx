import "../styles/documents.css";
import SectionTitle  from "./SectionTitle";
import DocumentCard  from "./DocumentCard";
import { DOCUMENTS } from "../data/documents";

export default function Documents({ sectionRef }) {
  return (
    <section ref={sectionRef} id="documents" className="section-white">
      <div className="card-box-gray">
        <SectionTitle accent="MY" main="Documents" />
        <div className="docs-grid">
          {DOCUMENTS.map((doc) => (
            <DocumentCard key={doc.label} label={doc.label} file={doc.file} />
          ))}
        </div>
      </div>
    </section>
  );
}