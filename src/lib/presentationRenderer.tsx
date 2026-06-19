import { ExecutiveCover } from "../sections/ExecutiveCover/ExecutiveCover";
import { KpiStrip } from "../sections/KpiStrip/KpiStrip";
import type { PresentationSection } from "../presentations/internet-boutique-demo/presentation.config";

export function renderPresentationSections(sections: PresentationSection[]) {
  return sections.map((section) => {
    switch (section.type) {
      case "executive-cover":
        return <ExecutiveCover key={section.id} section={section} />;
      case "kpi-strip":
        return <KpiStrip key={section.id} section={section} />;
      default:
        return null;
    }
  });
}
