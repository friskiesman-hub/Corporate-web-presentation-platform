import type { ComponentType } from "react";
import { ExecutiveCover } from "./ExecutiveCover/ExecutiveCover";
import type { ExecutiveCoverSection } from "./ExecutiveCover/types";
import { ExecutivePerformanceHero } from "./ExecutivePerformanceHero/ExecutivePerformanceHero";
import type { ExecutivePerformanceHeroSection } from "./ExecutivePerformanceHero/types";
import { KpiStrip } from "./KpiStrip/KpiStrip";
import type { KpiStripSection } from "./KpiStrip/types";
import type { PresentationSection } from "./types";

type SectionComponent<TSection extends PresentationSection> = ComponentType<{
  section: TSection;
}>;

interface SectionRegistry {
  "executive-cover": SectionComponent<ExecutiveCoverSection>;
  "executive-performance-hero": SectionComponent<ExecutivePerformanceHeroSection>;
  "kpi-strip": SectionComponent<KpiStripSection>;
}

export const sectionRegistry = {
  "executive-cover": ExecutiveCover,
  "executive-performance-hero": ExecutivePerformanceHero,
  "kpi-strip": KpiStrip,
} satisfies SectionRegistry;
