import type { KpiItem } from "../../sections/KpiStrip/types";

export const demoPeriod = {
  label: "Internet Boutique performance",
  range: "Prototype data period",
  comparison: "Compared with previous period",
};

export const demoKpis: KpiItem[] = [
  {
    label: "Revenue momentum",
    value: 18.4,
    unit: "%",
    delta: 3.2,
    direction: "up",
    basis: "net revenue, completed orders",
  },
  {
    label: "Conversion quality",
    value: 6.8,
    unit: "%",
    delta: 0.7,
    direction: "up",
    basis: "orders / qualified sessions",
  },
  {
    label: "Consultant-assisted share",
    value: 42,
    unit: "%",
    delta: -1.4,
    direction: "down",
    basis: "assisted orders / completed orders",
  },
];
