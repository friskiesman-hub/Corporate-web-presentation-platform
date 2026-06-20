import { useEffect, useState } from "react";
import type { PresentationSection } from "../../sections/types";

interface PresentationNavProps {
  title: string;
  sections: PresentationSection[];
}

export function PresentationNav({ title, sections }: PresentationNavProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const progress =
    sections.length > 0 ? `${((activeIndex + 1) / sections.length) * 100}%` : "0%";

  useEffect(() => {
    document.body.classList.toggle("light-ui", sections[activeIndex]?.id === "executive-cover");

    return () => document.body.classList.remove("light-ui");
  }, [activeIndex, sections]);

  useEffect(() => {
    const observers = sections
      .map((section, index) => {
        const node = document.getElementById(section.id);

        if (!node) return undefined;

        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) setActiveIndex(index);
          },
          {
            rootMargin: "-42% 0px -42% 0px",
            threshold: 0,
          },
        );

        observer.observe(node);

        return observer;
      })
      .filter(Boolean);

    return () => observers.forEach((observer) => observer?.disconnect());
  }, [sections]);

  return (
    <nav className="presentation-nav" aria-label="Секции презентации">
      <a className="presentation-nav__brand" href="#root" aria-label={title}>
        <svg className="presentation-nav__logo" viewBox="0 0 100 18" aria-hidden="true">
          <path
            fill="currentColor"
            d="M78.175 17.244h2.07c.142 0 .235-.093.235-.236v-6.505c0-.143.093-.236.235-.236h6.11c.26 0 .42.068.514.143l7.707 6.79s.069.05.118.05h3.197c.236 0 .236-.21-.186-.589l-8.928-7.707 8.222-7.69c.329-.328.329-.514.093-.514h-3.197a.172.172 0 0 0-.118.05l-7.262 6.79c-.068.093-.26.143-.514.143h-5.756c-.142 0-.235-.093-.235-.236V.985c0-.142-.093-.235-.236-.235h-2.07c-.142 0-.235.093-.235.235v16.03c0 .142.093.229.236.229ZM26.76 7.12h2.07c.142 0 .235-.093.235-.236v-1.81c0-.891.849-1.784 1.692-1.784h12.64c.848 0 1.69.893 1.69 1.785v1.81c0 .142.094.235.236.235h2.07c.142 0 .235-.093.235-.236v-2.07c0-2.28-1.834-4.064-4.163-4.064H30.682c-2.323 0-4.157 1.784-4.157 4.065v2.07c0 .142.093.235.235.235ZM26.525 11.116v2.07c0 2.255 1.859 4.064 4.157 4.064h12.783c2.33 0 4.157-1.81 4.157-4.065v-2.07c0-.142-.093-.235-.235-.235h-2.07c-.142 0-.235.093-.235.236v1.81c0 .891-.843 1.784-1.692 1.784H30.75c-.849 0-1.691-.893-1.691-1.785v-1.81c0-.142-.093-.235-.236-.235h-2.07c-.142 0-.228.093-.228.236ZM72.673 6.202V4.816c0-2.28-1.81-4.065-4.158-4.065h-15.39c-.143 0-.236.093-.236.235v16.03c0 .142.093.235.235.235h2.07c.142 0 .235-.093.235-.235v-6.513c0-.142.093-.235.236-.235h5.502c.26 0 .42.068.514.143l7.472 6.79s.068.05.118.05h3.123c.235 0 .47-.186.025-.589l-7.33-6.394h3.432c2.324 0 4.152-1.784 4.152-4.064ZM55.665 7.727c-.143 0-.236-.093-.236-.236V3.526c0-.143.093-.236.236-.236h12.782c.849 0 1.691.893 1.691 1.785v.867c0 .892-.848 1.785-1.691 1.785H55.665ZM21.704 6.27V4.816c0-2.28-1.81-4.065-4.157-4.065H2.156c-.143 0-.242.093-.242.235v16.03c0 .142.093.235.236.235h15.397c2.33 0 4.157-1.741 4.157-4.021v-1.506c0-1.363-1.27-2.726-2.54-2.726 1.27 0 2.54-1.363 2.54-2.726Zm-2.54 6.649c0 .892-.843 1.784-1.692 1.784H4.69c-.143 0-.236-.092-.236-.235v-3.972c0-.142.093-.235.236-.235h12.782c.85 0 1.692.892 1.692 1.784v.874Zm0-6.977c0 .892-.843 1.785-1.692 1.785H4.69c-.143 0-.236-.093-.236-.236V3.526c0-.143.093-.236.236-.236h12.782c.85 0 1.692.893 1.692 1.785v.867Z"
          />
        </svg>
        <span>Платформа</span>
      </a>
      <div className="presentation-nav__links">
        {sections.map((section, index) => (
          <a
            aria-current={activeIndex === index ? "page" : undefined}
            aria-label={`Перейти к секции ${index + 1}: ${section.navLabel ?? section.type}`}
            href={`#${section.id}`}
            key={section.id}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            <em>{section.navLabel ?? section.type}</em>
          </a>
        ))}
      </div>
      <div className="presentation-nav__page-count" aria-live="polite">
        <span>{String(activeIndex + 1).padStart(2, "0")}</span> /{" "}
        {String(sections.length).padStart(2, "0")}
      </div>
      <div className="presentation-nav__timeline" aria-hidden="true">
        <span style={{ width: progress }} />
      </div>
    </nav>
  );
}
