import { useEffect, useRef, useState, type ReactNode } from "react";

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
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        rootMargin: "-28% 0px -28% 0px",
        threshold: 0.12,
      },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section-shell section-shell--${tone}${isInView ? " is-in-view" : ""}`}
      id={sectionId}
      ref={sectionRef}
    >
      <div className="section-shell__inner">{children}</div>
    </section>
  );
}
