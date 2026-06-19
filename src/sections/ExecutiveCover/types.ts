import type { BaseSection } from "../types";

export interface ExecutiveCoverSection extends BaseSection<"executive-cover"> {
  eyebrow: string;
  title: string;
  thesis: string;
  context: string;
  audience: string;
  period: string;
}
