import type { MetricDirection, MetricUnit } from "../../lib/metrics";
import type { BaseSection } from "../types";

export interface ExecutivePerformanceHeroKpi {
  label: string;
  value: number;
  unit: MetricUnit;
  displayValue?: string;
  delta: number;
  displayDelta?: string;
  direction: MetricDirection;
  visualShare: number;
  basis: string;
  signal: string;
}

export interface ExecutivePerformanceHeroSummaryKpi {
  value: string;
  label: string;
}

export interface ExecutivePerformanceHeroSection
  extends BaseSection<"executive-performance-hero"> {
  eyebrow: string;
  title: string;
  thesis: string;
  periodLabel: string;
  period: string;
  managementImplication: string;
  summaryKpis?: ExecutivePerformanceHeroSummaryKpi[];
  ctaLabel?: string;
  ctaTargetId?: string;
  kpis: ExecutivePerformanceHeroKpi[];
}
