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

    let pointerFrame = 0;
    const syncPointer = (event: PointerEvent) => {
      if (event.pointerType === "touch") return;

      const surface = (event.target as Element | null)?.closest<HTMLElement>(".premium-hover-surface");

      if (!surface) return;

      window.cancelAnimationFrame(pointerFrame);
      pointerFrame = window.requestAnimationFrame(() => {
        const rect = surface.getBoundingClientRect();
        surface.style.setProperty("--premium-hover-x", `${(event.clientX - rect.left).toFixed(2)}px`);
        surface.style.setProperty("--premium-hover-y", `${(event.clientY - rect.top).toFixed(2)}px`);
      });
    };

    syncViewportHeight();
    window.addEventListener("resize", syncViewportHeight, { passive: true });
    window.addEventListener("orientationchange", syncViewportHeight, { passive: true });
    window.addEventListener("pointermove", syncPointer, { passive: true });
    window.visualViewport?.addEventListener("resize", syncViewportHeight, { passive: true });

    return () => {
      window.cancelAnimationFrame(pointerFrame);
      window.removeEventListener("resize", syncViewportHeight);
      window.removeEventListener("orientationchange", syncViewportHeight);
      window.removeEventListener("pointermove", syncPointer);
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
