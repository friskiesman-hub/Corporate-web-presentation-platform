import { SectionShell } from "../../components/SectionShell/SectionShell";
import { TextCascade } from "../../components/TextCascade/TextCascade";
import type { ExecutiveCoverSection } from "./types";
import {
  CartesianGrid,
  Line,
  LineChart,
  ReferenceLine,
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
            className="revenue-chart report-chart motion-typography"
            aria-label="Динамика GMV по месяцам"
          >
            <header className="revenue-chart__topline">
              <div className="revenue-chart__header-copy">
                <strong className="revenue-chart__header-title">План / факт GMV</strong>
                <span>Факт против плана, млн ₽</span>
                <div className="revenue-chart__legend revenue-chart__legend--header" aria-hidden="true">
                  <span>
                    <i className="revenue-chart__legend-mark revenue-chart__legend-mark--fact" />
                    {chart.factLegendLabel}
                  </span>
                  <span>
                    <i className="revenue-chart__legend-mark revenue-chart__legend-mark--plan" />
                    {chart.planLegendLabel}
                  </span>
                  <span>
                    <i className="revenue-chart__legend-mark revenue-chart__legend-mark--target" />
                    Ориентир 1 000
                  </span>
                </div>
                <p>{chart.insight}</p>
              </div>
              <div className="revenue-chart__topline-metric">
                <span>Q2 GMV</span>
                <strong>
                  {chart.toplineValue}
                  <span>млн ₽</span>
                </strong>
                <em>{chart.toplineDelta}</em>
              </div>
            </header>
            <div className="revenue-chart__plot">
              <div className="revenue-chart__canvas">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={chartData} margin={{ top: 18, right: 18, left: 2, bottom: 10 }}>
                    <CartesianGrid stroke="rgba(56, 47, 45, 0.12)" strokeDasharray="3 8" />
                    <ReferenceLine
                      y={1000}
                      stroke="var(--color-accent-main)"
                      strokeDasharray="6 6"
                      strokeWidth={2}
                      label={{
                        position: "left",
                        content: ({ viewBox }) => (
                          <ReferenceStarLabel
                            viewBox={(viewBox as { x?: number; y?: number } | null) ?? null}
                          />
                        ),
                      }}
                    />
                    <XAxis
                      dataKey="date"
                      tickLine={false}
                      axisLine={false}
                      tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
                      tickMargin={8}
                    />
                    <YAxis
                      tickLine={false}
                      axisLine={false}
                      domain={[700, 1100]}
                      ticks={[700, 900, 1100]}
                      tick={{ fill: "var(--chart-muted)", fontSize: 12 }}
                      tickFormatter={formatRevenueValue}
                      width={54}
                      label={{
                        value: chart.yAxisLabel,
                        angle: -90,
                        position: "insideLeft",
                        fill: "var(--chart-muted)",
                        fontSize: 12,
                        dx: -18,
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
                      stroke="var(--chart-plan)"
                      strokeDasharray="6 6"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "var(--chart-plan)", stroke: "rgba(244,239,235,0.86)", strokeWidth: 2 }}
                      activeDot={{ r: 5 }}
                      connectNulls
                    />
                    <Line
                      type="monotone"
                      dataKey="total"
                      stroke="var(--chart-primary)"
                      strokeWidth={2}
                      dot={{ r: 3, fill: "var(--chart-primary)", stroke: "rgba(244,239,235,0.92)", strokeWidth: 2 }}
                      activeDot={{ r: 6 }}
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
                <span>
                  <i className="revenue-chart__legend-mark revenue-chart__legend-mark--target" />
                  Ориентир 1 000
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

function ReferenceStarLabel({
  viewBox,
}: {
  viewBox?: { x?: number; y?: number } | null;
}) {
  const x = viewBox?.x;
  const y = viewBox?.y;

  if (typeof x !== "number" || typeof y !== "number") return null;

  return (
    <g transform={`translate(${x - 19},${y - 5})`}>
      <path
        d="M5 0L6.35 3.05L9.65 3.42L7.18 5.65L7.85 8.92L5 7.24L2.15 8.92L2.82 5.65L0.35 3.42L3.65 3.05L5 0Z"
        fill="var(--color-accent-main)"
        stroke="var(--color-accent-main)"
        strokeWidth="1.2"
      />
    </g>
  );
}
