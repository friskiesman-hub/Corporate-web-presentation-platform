import type { ComponentType } from "react";
import { ExecutiveCover } from "./ExecutiveCover/ExecutiveCover";
import type { ExecutiveCoverSection } from "./ExecutiveCover/types";
import { KpiStrip } from "./KpiStrip/KpiStrip";
import type { KpiStripSection } from "./KpiStrip/types";
import type { PresentationSection } from "./types";

type SectionComponent<TSection extends PresentationSection> = ComponentType<{
  section: TSection;
}>;

interface SectionRegistry {
  "executive-cover": SectionComponent<ExecutiveCoverSection>;
  "kpi-strip": SectionComponent<KpiStripSection>;
}

export const sectionRegistry = {
  "executive-cover": ExecutiveCover,
  "kpi-strip": KpiStrip,
} satisfies SectionRegistry;
