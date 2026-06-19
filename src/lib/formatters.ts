import type { MetricUnit } from "./metrics";

export function formatMetricValue(value: number, unit: MetricUnit) {
  if (unit === "%") {
    return `${value.toLocaleString("en-US", { maximumFractionDigits: 1 })}%`;
  }

  if (unit === "rub") {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 0,
      notation: "compact",
      style: "currency",
      currency: "RUB",
    }).format(value);
  }

  return value.toLocaleString("en-US");
}

export function formatDelta(value: number, unit: MetricUnit) {
  const sign = value > 0 ? "+" : "";

  if (unit === "%") {
    return `${sign}${value.toLocaleString("en-US", { maximumFractionDigits: 1 })} pp`;
  }

  return `${sign}${value.toLocaleString("en-US", { maximumFractionDigits: 1 })}`;
}
