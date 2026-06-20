import { sectionRegistry } from "../sections/registry";
import type { PresentationSection } from "../sections/types";

export function renderPresentationSections(sections: PresentationSection[]) {
  return sections.map((section) => {
    switch (section.type) {
      case "executive-cover": {
        const SectionComponent = sectionRegistry["executive-cover"];

        return <SectionComponent key={section.id} section={section} />;
      }
      case "executive-performance-hero": {
        const SectionComponent = sectionRegistry["executive-performance-hero"];

        return <SectionComponent key={section.id} section={section} />;
      }
      case "kpi-strip": {
        const SectionComponent = sectionRegistry["kpi-strip"];

        return <SectionComponent key={section.id} section={section} />;
      }
      default:
        const unknownSection = section as { id: string; type: string };

        return (
          <section className="section-shell" key={unknownSection.id}>
            <div className="section-shell__inner">
              Неизвестный тип секции: {unknownSection.type}
            </div>
          </section>
        );
    }
  });
}
