import type { PresentationSection } from "../../sections/types";

interface PresentationNavProps {
  title: string;
  sections: PresentationSection[];
}

export function PresentationNav({ title, sections }: PresentationNavProps) {
  return (
    <nav className="presentation-nav" aria-label="Presentation sections">
      <a className="presentation-nav__brand" href="#root" aria-label={title}>
        BORK Platform
      </a>
      <div className="presentation-nav__links">
        {sections.map((section, index) => (
          <a href={`#${section.id}`} key={section.id}>
            <span>{String(index + 1).padStart(2, "0")}</span>
            {section.type}
          </a>
        ))}
      </div>
    </nav>
  );
}
