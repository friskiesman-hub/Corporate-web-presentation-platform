import type { PresentationConfig } from "../types";
import { demoKpis, demoPeriod } from "./data";

export const internetBoutiqueDemoPresentation: PresentationConfig = {
  id: "internet-boutique-demo",
  title: "Internet Boutique Executive Review",
  audience: "Senior commercial and digital leadership",
  period: demoPeriod.range,
  thesis:
    "The first skeleton turns business data into configurable presentation sections without locking the platform to one slide count.",
  sections: [
    {
      id: "executive-cover",
      type: "executive-cover",
      eyebrow: demoPeriod.label,
      title: "A platform skeleton for premium business storytelling",
      thesis:
        "Presentation flow, section order and data are driven by typed config, not by a static page sequence.",
      context:
        "This demo intentionally avoids final visual polish and focuses on reusable architecture: tokens, responsive shells and section contracts.",
      audience: "Senior commercial and digital leadership",
      period: demoPeriod.range,
    },
    {
      id: "kpi-strip",
      type: "kpi-strip",
      title: "Early KPI proof points",
      thesis:
        "Metrics are kept as structured data so future sections can transform them into cards, charts or narrative blocks.",
      comparison: demoPeriod.comparison,
      items: demoKpis,
    },
  ],
};
