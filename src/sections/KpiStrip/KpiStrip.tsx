import { SectionShell } from "../../components/SectionShell/SectionShell";
import { TextCascade } from "../../components/TextCascade/TextCascade";
import { formatDelta, formatMetricValue } from "../../lib/formatters";
import type { KpiStripSection } from "./types";

interface KpiStripProps {
  section: KpiStripSection;
}

export function KpiStrip({ section }: KpiStripProps) {
  return (
    <SectionShell sectionId={section.id}>
      <p className="section-eyebrow motion-typography">{section.comparison}</p>
      <div className="section-heading motion-typography">
        <h2>
          <TextCascade text={section.title} />
        </h2>
        <p className="section-thesis">{section.thesis}</p>
      </div>
      <div className="kpi-grid report-chart motion-typography" aria-label="Ключевые показатели">
        {section.items.map((item) => (
          <article className="kpi-card premium-hover-surface premium-hover-surface--dark" key={item.label}>
            <span className="kpi-card__label">{item.label}</span>
            <strong className="kpi-card__value">
              {item.displayValue ?? formatMetricValue(item.value, item.unit)}
            </strong>
            <span className={`kpi-card__delta kpi-card__delta--${item.direction}`}>
              {item.displayDelta ?? formatDelta(item.delta, item.unit)}
            </span>
            <p>{item.basis}</p>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}
