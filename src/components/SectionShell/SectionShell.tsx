import type { ReactNode } from "react";

interface SectionShellProps {
  children: ReactNode;
  sectionId: string;
  tone?: "default" | "hero";
}

export function SectionShell({
  children,
  sectionId,
  tone = "default",
}: SectionShellProps) {
  return (
    <section className={`section-shell section-shell--${tone}`} id={sectionId}>
      <div className="section-shell__inner">{children}</div>
    </section>
  );
}
