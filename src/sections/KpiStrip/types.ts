export interface KpiItem {
  label: string;
  value: number;
  unit: "%" | "rub" | "count";
  delta: number;
  direction: "up" | "down" | "flat";
  basis: string;
}

export interface KpiStripSection {
  id: string;
  type: "kpi-strip";
  title: string;
  thesis: string;
  comparison: string;
  items: KpiItem[];
}
