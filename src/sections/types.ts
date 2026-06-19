import type { ExecutiveCoverSection } from "./ExecutiveCover/types";
import type { KpiStripSection } from "./KpiStrip/types";

export interface BaseSection<TType extends string = string> {
  id: string;
  type: TType;
  title?: string;
  thesis?: string;
  navLabel?: string;
}

export type PresentationSection = ExecutiveCoverSection | KpiStripSection;
