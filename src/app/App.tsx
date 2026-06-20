import { useEffect } from "react";
import { PresentationNav } from "../components/PresentationNav/PresentationNav";
import { renderPresentationSections } from "../lib/presentationRenderer";
import { internetBoutiqueDemoPresentation } from "../presentations/internet-boutique-demo/presentation.config";

export function App() {
  useEffect(() => {
    const syncViewportHeight = () => {
      const viewportHeight = Math.round(window.visualViewport?.height || window.innerHeight);
      document.documentElement.style.setProperty("--app-height", `${viewportHeight}px`);
    };

    syncViewportHeight();
    window.addEventListener("resize", syncViewportHeight, { passive: true });
    window.addEventListener("orientationchange", syncViewportHeight, { passive: true });
    window.visualViewport?.addEventListener("resize", syncViewportHeight, { passive: true });

    return () => {
      window.removeEventListener("resize", syncViewportHeight);
      window.removeEventListener("orientationchange", syncViewportHeight);
      window.visualViewport?.removeEventListener("resize", syncViewportHeight);
    };
  }, []);

  return (
    <main className="presentation-app">
      <PresentationNav
        title={internetBoutiqueDemoPresentation.title}
        sections={internetBoutiqueDemoPresentation.sections}
      />
      <div className="presentation-flow">
        {renderPresentationSections(internetBoutiqueDemoPresentation.sections)}
      </div>
    </main>
  );
}
