import type { MetricDirection, MetricUnit } from "../../lib/metrics";
import type { BaseSection } from "../types";

export interface KpiItem {
  label: string;
  value: number;
  unit: MetricUnit;
  displayValue?: string;
  delta: number;
  displayDelta?: string;
  direction: MetricDirection;
  basis: string;
}

export interface KpiStripSection extends BaseSection<"kpi-strip"> {
  title: string;
  thesis: string;
  comparison: string;
  items: KpiItem[];
}
