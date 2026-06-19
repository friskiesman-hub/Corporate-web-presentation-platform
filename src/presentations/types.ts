import type { PresentationSection } from "../sections/types";

export interface PresentationConfig<
  TSection extends PresentationSection = PresentationSection,
> {
  id: string;
  title: string;
  audience: string;
  period: string;
  thesis: string;
  sections: TSection[];
}
