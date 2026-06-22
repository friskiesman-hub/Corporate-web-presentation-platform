import { SectionShell } from "../../components/SectionShell/SectionShell";
import { TextCascade } from "../../components/TextCascade/TextCascade";
import type { ExecutiveCoverSection } from "./types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

interface ExecutiveCoverProps {
  section: ExecutiveCoverSection;
}

interface RevenueChartDataPoint {
  date: string;
  total: number;
  plan: number;
  change: number;
  displayTotal: string;
  displayPlan: string;
  displayChange: string;
  note: string;
}

export function ExecutiveCover({ section }: ExecutiveCoverProps) {
  const chart = section.chart;

  const chartData: RevenueChartDataPoint[] =
    chart?.months.map((month) => ({
      date: month.label,
      total: month.fact.amount,
      plan: month.plan.amount,
      change: month.fact.amount - month.plan.amount,
      displayTotal: month.fact.value,
      displayPlan: month.plan.value,
      displayChange: month.change,
      note: month.note,
    })) ?? [];

  return (
    <SectionShell sectionId={section.id} tone="hero">
      <div className="executive-cover">
        <div className="executive-cover__main motion-typography">
          <p className="section-eyebrow">{section.eyebrow}</p>
          <h1>
            <TextCascade text={section.title} />
          </h1>
          <p className="section-thesis">{section.thesis}</p>
        </div>
        {chart ? (
          <article
            className="revenue-chart report-chart motion-typography premium-hover-surface premium-hover-surface--light"
            aria-label="Динамика GMV по месяцам"
          >
            <header className="revenue-chart__topline">
              <div>
                <span>{chart.toplineLabel}</span>
                <p>{chart.insight}</p>
              </div>
              <div>
                <strong>{chart.toplineValue}</strong>
                <em>{chart.toplineDelta}</em>
              </div>
            </header>
            <div className="revenue-chart__plot">
              <div className="revenue-chart__canvas">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 18, right: 18, left: 2, bottom: 10 }}>
                    <CartesianGrid stroke="rgba(56, 47, 45, 0.12)" strokeDasharray="3 8" vertical={false} />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "rgba(56, 47, 45, 0.68)", fontSize: 13 }}
                      tickMargin={16}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      domain={getRevenueDomain(chartData)}
                      tick={{ fill: "rgba(56, 47, 45, 0.52)", fontSize: 12 }}
                      tickFormatter={formatRevenueValue}
                      width={56}
                      label={{
                        value: chart.yAxisLabel,
                        angle: -90,
                        position: "insideLeft",
                        fill: "rgba(56, 47, 45, 0.52)",
                        fontSize: 12,
                        dx: -10,
                      }}
                    />
                    <Tooltip
                      cursor={{ stroke: "rgba(56, 47, 45, 0.28)", strokeDasharray: "4 8" }}
                      content={({ active, payload, label }) => {
                        if (!active || !payload?.length) return null;
                        const row = payload[0].payload as RevenueChartDataPoint;

                        return (
                          <div className="revenue-chart__tooltip">
                            <p>{label}</p>
                            <strong>Факт {row.displayTotal} млн ₽</strong>
                            <span>План {row.displayPlan} млн ₽</span>
                            <em>{row.displayChange} / {row.note}</em>
                          </div>
                        );
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="plan"
                      stroke="rgba(56, 47, 45, 0.55)"
                      strokeDasharray="8 9"
                      strokeWidth={2.5}
                      dot={{ r: 3, fill: "var(--color-text-dark)", strokeWidth: 0 }}
                      activeDot={{ r: 5, fill: "var(--color-text-dark)", strokeWidth: 0 }}
                      connectNulls
                    />
                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="var(--color-accent-main)"
                      strokeWidth={4}
                      dot={{ r: 4, fill: "var(--color-accent-main)", stroke: "var(--color-bg-ivory)", strokeWidth: 3 }}
                      activeDot={{ r: 7, fill: "var(--color-accent-main)", stroke: "var(--color-bg-ivory)", strokeWidth: 4 }}
                      connectNulls
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="revenue-chart__legend" aria-hidden="true">
                <span>
                  <i className="revenue-chart__legend-mark revenue-chart__legend-mark--fact" />
                  {chart.factLegendLabel}
                </span>
                <span>
                  <i className="revenue-chart__legend-mark revenue-chart__legend-mark--plan" />
                  {chart.planLegendLabel}
                </span>
              </div>
            </div>
            <footer className="revenue-chart__mini-metrics">
              {chart.miniMetrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </footer>
          </article>
        ) : (
          <aside className="executive-cover__meta motion-typography" aria-label="Контекст презентации">
            <span>{section.audienceLabel ?? "Аудитория"}</span>
            <strong>{section.audience}</strong>
            <span>{section.periodLabel ?? "Период"}</span>
            <strong>{section.period}</strong>
          </aside>
        )}
      </div>
    </SectionShell>
  );
}

function formatRevenueValue(value: number) {
  return Math.round(value).toLocaleString("ru-RU");
}

function getRevenueDomain(data: RevenueChartDataPoint[]): [number, number] {
  const values = data.flatMap((item) => [item.total, item.plan]);

  if (values.length === 0) return [0, 100];

  const minValue = Math.min(...values);
  const maxValue = Math.max(...values);
  const range = maxValue - minValue || 1;
  const padding = Math.max(range * 0.14, 36);

  return [
    Math.max(0, Math.floor((minValue - padding) / 20) * 20),
    Math.ceil((maxValue + padding) / 20) * 20,
  ];
}
