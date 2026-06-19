import { SectionShell } from "../../components/SectionShell/SectionShell";
import type { ExecutiveCoverSection } from "./types";

interface ExecutiveCoverProps {
  section: ExecutiveCoverSection;
}

export function ExecutiveCover({ section }: ExecutiveCoverProps) {
  return (
    <SectionShell sectionId={section.id} tone="hero">
      <p className="section-eyebrow">{section.eyebrow}</p>
      <div className="executive-cover">
        <div className="executive-cover__main">
          <h1>{section.title}</h1>
          <p className="section-thesis">{section.thesis}</p>
        </div>
        <aside className="executive-cover__meta" aria-label="Presentation context">
          <span>Audience</span>
          <strong>{section.audience}</strong>
          <span>Period</span>
          <strong>{section.period}</strong>
        </aside>
      </div>
      <p className="section-context">{section.context}</p>
    </SectionShell>
  );
}
