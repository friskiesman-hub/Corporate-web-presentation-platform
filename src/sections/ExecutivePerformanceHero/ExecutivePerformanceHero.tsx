import { SectionShell } from "../../components/SectionShell/SectionShell";
import { TextCascade } from "../../components/TextCascade/TextCascade";
import type { ExecutivePerformanceHeroSection } from "./types";

interface ExecutivePerformanceHeroProps {
  section: ExecutivePerformanceHeroSection;
}

export function ExecutivePerformanceHero({
  section,
}: ExecutivePerformanceHeroProps) {
  const summaryKpis = section.summaryKpis ?? [];

  return (
    <SectionShell sectionId={section.id} tone="hero">
      <div className="executive-performance-hero" aria-labelledby={`${section.id}-title`}>
        <p className="section-eyebrow executive-performance-hero__eyebrow motion-typography">
          {section.eyebrow}
        </p>
        <div className="executive-performance-hero__headline motion-typography">
          <h1 id={`${section.id}-title`}>
            <TextCascade text={section.title} />
          </h1>
          <p className="section-thesis">{section.thesis}</p>
        </div>

        {summaryKpis.length > 0 ? (
          <div className="executive-performance-hero__summary motion-typography" aria-label="Ключевые показатели Q2 2026">
            {summaryKpis.map((item) => (
              <article key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </article>
            ))}
          </div>
        ) : null}

        {section.ctaLabel ? (
          <a className="executive-performance-hero__cta motion-typography" href={`#${section.ctaTargetId ?? ""}`}>
            {section.ctaLabel}
          </a>
        ) : null}
      </div>
    </SectionShell>
  );
}
