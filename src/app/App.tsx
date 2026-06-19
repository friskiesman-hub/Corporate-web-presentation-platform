import { PresentationNav } from "../components/PresentationNav/PresentationNav";
import { renderPresentationSections } from "../lib/presentationRenderer";
import { internetBoutiqueDemoPresentation } from "../presentations/internet-boutique-demo/presentation.config";

export function App() {
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
