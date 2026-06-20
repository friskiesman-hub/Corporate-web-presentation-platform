import type { BaseSection } from "../types";

export interface ExecutiveCoverBarGroup {
  label: string;
  fact: {
    value: string;
    amount: number;
  };
  plan: {
    value: string;
    amount: number;
  };
  change: string;
  note: string;
}

export interface ExecutiveCoverMiniMetric {
  value: string;
  label: string;
}

export interface ExecutiveCoverChart {
  toplineLabel: string;
  toplineValue: string;
  toplineDelta: string;
  factLegendLabel: string;
  planLegendLabel: string;
  yAxisLabel: string;
  insight: string;
  months: ExecutiveCoverBarGroup[];
  miniMetrics: ExecutiveCoverMiniMetric[];
}

export interface ExecutiveCoverSection extends BaseSection<"executive-cover"> {
  eyebrow: string;
  title: string;
  thesis: string;
  context: string;
  audienceLabel?: string;
  audience: string;
  periodLabel?: string;
  period: string;
  chart?: ExecutiveCoverChart;
}
