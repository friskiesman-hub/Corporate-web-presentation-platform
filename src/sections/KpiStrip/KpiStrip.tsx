import { SectionShell } from "../../components/SectionShell/SectionShell";
import { TextCascade } from "../../components/TextCascade/TextCascade";
import { formatDelta, formatMetricValue } from "../../lib/formatters";
import type { KpiStripSection } from "./types";
import type { CSSProperties } from "react";

interface KpiStripProps {
  section: KpiStripSection;
}

export function KpiStrip({ section }: KpiStripProps) {
  if (section.id === "kpi-strip") {
    return <CategoryMixSection section={section} />;
  }

  if (section.id === "digital-efficiency") {
    return <DigitalEfficiencySection section={section} />;
  }

  if (section.id === "q3-focus") {
    return <Q3FocusSection section={section} />;
  }

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

function CategoryMixSection({ section }: KpiStripProps) {
  return (
    <SectionShell sectionId={section.id}>
      <div className="reference-section-layout reference-section-layout--materials">
        <div className="reference-copy">
          <p className="section-eyebrow motion-typography">{section.comparison}</p>
          <h2 className="motion-typography">
            <TextCascade text={section.title} />
          </h2>
          <p className="section-thesis motion-typography">{section.thesis}</p>
        </div>
        <div className="reference-chart reference-chart--category report-chart motion-typography" aria-label="Структура продаж по категориям Q2 2026">
          <div className="reference-chart__topline reference-chart__topline--dark">
            <span>Доля GMV</span>
            <strong>100%</strong>
          </div>
          <div className="reference-category-grid">
            <div className="reference-donut" aria-hidden="true" />
            <div className="reference-category-list">
              {[
                ["Кухня", "34%"],
                ["Красота", "21%"],
                ["Климат", "18%"],
                ["Кофе", "15%"],
                ["Аксессуары", "12%"],
              ].map(([label, share]) => (
                <article style={{ "--share": share } as CSSProperties} key={label}>
                  <span>{label}</span>
                  <i><b /></i>
                  <em>{share}</em>
                </article>
              ))}
            </div>
          </div>
          <div className="reference-mini-metrics reference-mini-metrics--dark">
            <article><strong>1,42</strong><span>товара в заказе</span></article>
            <article><strong>31%</strong><span>заказов с аксессуаром</span></article>
            <article><strong>+14%</strong><span>к среднему чеку категории</span></article>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function DigitalEfficiencySection({ section }: KpiStripProps) {
  return (
    <SectionShell sectionId={section.id}>
      <div className="reference-section-layout reference-section-layout--innovation">
        <div className="reference-metric-zone">
          <p className="section-eyebrow motion-typography">{section.comparison}</p>
          <div className="reference-metric-block motion-typography">
            <span>41</span><em>%</em>
          </div>
          <p className="reference-metric-caption motion-typography">выручки Q2 пришло из CRM и повторных сценариев</p>
        </div>
        <div className="reference-copy reference-copy--innovation">
          <h2 className="motion-typography">
            <TextCascade text={section.title} />
          </h2>
          <p className="section-thesis motion-typography">{section.thesis}</p>
          <div className="reference-funnel motion-typography" aria-label="Воронка Интернет Бутика Q2 2026">
            <article style={{ "--w": "100%" } as CSSProperties}><span>1,18 млн</span><b>сессий</b></article>
            <article style={{ "--w": "66%" } as CSSProperties}><span>184 тыс.</span><b>карточек с deep view</b></article>
            <article style={{ "--w": "38%" } as CSSProperties}><span>52,1 тыс.</span><b>корзин</b></article>
            <article style={{ "--w": "24%" } as CSSProperties}><span>34,8 тыс.</span><b>заказов</b></article>
          </div>
          <div className="reference-award-row motion-typography" aria-label="Digital показатели">
            <span>CR 2,9%</span>
            <span>CAC -11%</span>
            <span>Repeat 39%</span>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function Q3FocusSection({ section }: KpiStripProps) {
  return (
    <SectionShell sectionId={section.id}>
      <div className="reference-final-content">
        <p className="section-eyebrow motion-typography">{section.comparison}</p>
        <h2 className="motion-typography">
          <TextCascade text={section.title} />
        </h2>
        <p className="section-thesis motion-typography">{section.thesis}</p>
        <div className="reference-focus-grid motion-typography" aria-label="Фокусы Q3 2026">
          <article className="premium-hover-surface premium-hover-surface--dark"><strong>+18%</strong><span>цель GMV Q3</span></article>
          <article className="premium-hover-surface premium-hover-surface--dark"><strong>45%</strong><span>CRM-вклад</span></article>
          <article className="premium-hover-surface premium-hover-surface--dark"><strong>82 тыс. ₽</strong><span>целевой чек</span></article>
        </div>
        <a className="reference-premium-button motion-typography premium-hover-surface premium-hover-surface--accent" href="#executive-performance-hero">
          Вернуться в начало
        </a>
      </div>
    </SectionShell>
  );
}
