import { SectionShell } from "../../components/SectionShell/SectionShell";
import { formatDelta, formatMetricValue } from "../../lib/formatters";
import type { KpiStripSection } from "./types";

interface KpiStripProps {
  section: KpiStripSection;
}

export function KpiStrip({ section }: KpiStripProps) {
  return (
    <SectionShell sectionId={section.id}>
      <p className="section-eyebrow">{section.comparison}</p>
      <div className="section-heading">
        <h2>{section.title}</h2>
        <p className="section-thesis">{section.thesis}</p>
      </div>
      <div className="kpi-grid" aria-label="Key performance indicators">
        {section.items.map((item) => (
          <article className="kpi-card" key={item.label}>
            <span className="kpi-card__label">{item.label}</span>
            <strong className="kpi-card__value">
              {formatMetricValue(item.value, item.unit)}
            </strong>
            <span className={`kpi-card__delta kpi-card__delta--${item.direction}`}>
              {formatDelta(item.delta, item.unit)}
            </span>
            <p>{item.basis}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
