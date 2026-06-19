# Reference Audit

Synthesis of findings from the stable Q2 2026 BORK Internet Boutique demo.

This audit treats the archived source as visual and behavioral evidence only. It is not an implementation plan for the new platform.

## Source Priority

1. Live demo, if available: primary source for real motion, interaction timing, responsive behavior, and perceived premium quality.
2. Archived source: analysis-only evidence for composition, color, assets, typography, responsive decisions, and motion mechanics.
3. Screen recordings: preferred evidence for loader, section transitions, scroll behavior, and pacing.
4. Screenshots: supporting evidence for key visual states, not the main reference source.
5. Observation notes: final interpretation layer for the new platform direction.

## Executive Summary

The stable Q2 2026 demo proves that a BORK business review can feel more premium and more memorable than a conventional PowerPoint/PDF when it combines executive copy, full-bleed boutique imagery, restrained data views, and cinematic transitions.

Its strongest quality is atmosphere: warm graphite, stone, wood, ivory, amber accents, real interior photography, low-noise typography, and quiet motion create a luxury retail environment around business metrics.

The demo is also clearly hand-built around one story: five sections, bespoke charts, fixed progress dots, a custom loader, and imperative navigation. That craft is useful as reference, but the implementation should not become the new platform architecture.

For the new platform, the transferable lesson is not "make another 5-screen HTML presentation." The lesson is to preserve the premium editorial mood while moving toward reusable sections, typed data contracts, responsive primitives, and more flexible data-driven storytelling.

## Creative Freedom Clause

The old Q2 2026 demo is a quality bar, not a visual template.

Boutique interiors are one valid atmospheric tool, not the default background system for the new platform. They are valuable because they reveal the BORK point of view on space, materials, light, precision, and premium restraint.

The new platform must support diverse creative directions while preserving brand DNA. Future presentations may use spatial/boutique architecture, product and product detail, events and hospitality, service and delivery scenarios, Cybertruck delivery, watercolor/editorial illustration, abstract material graphics, typography-first layouts, data-first layouts, motion-first storytelling, and hybrid cinematic systems.

Success is not visual similarity to the old demo. Success is premium quality, business clarity, strong executive storytelling, desktop excellence, and iPhone Pro Max excellence.

## Transferable Brand DNA

- Use brand-relevant visual worlds when they support the story, not generic decorative backgrounds. Possible visual worlds include spatial / boutique architecture, product / product detail, event / hospitality, service / delivery / Cybertruck, watercolor / illustrated, abstract material, typography-first, data-first, and motion-first directions.
- Keep the palette warm and material: graphite, charcoal, stone, warm ivory, muted beige, wood, bronze undertones, and a precise amber/orange accent.
- Let amber/orange behave as a signal color for emphasis, progress, and selected data. It should stay controlled, not become cheap gold or promo energy.
- Preserve the editorial restraint: large thesis typography, short executive explanations, restrained uppercase labels, strong numbers, and generous spacing.
- Use brand pattern and logo as quiet spatial anchors. The pattern works best as a masked, low-opacity material layer; it should not become visual noise.
- Prefer cinematic depth through photography, overlays, masks, and light direction rather than SaaS gradients or decorative glow.
- Data visualization should feel designed, not dashboard-generated: compact charts, clear deltas, comparison context, and one dominant message per section.

## Transferable Mobile Lessons

- The archived source handles mobile as a distinct design surface, not only a squeezed desktop: progress navigation moves to the bottom, section content narrows, KPI grids collapse, and charts simplify at small widths.
- iPhone Pro Max portrait needs explicit treatment for dense data. The demo turns KPI strips into stacked blocks at narrow widths and lets charts break into simpler vertical structures.
- iPhone landscape needs its own compression rules. The demo reduces logo size, typography scale, chart height, navigation gaps, bar chart height, and bottom spacing for low-height landscape viewports.
- `visualViewport` and a custom `--app-height` variable are useful lessons for Safari viewport instability, especially around browser chrome and orientation changes.
- `viewport-fit=cover` and safe bottom navigation behavior matter for presentation UX on iPhone-class devices.
- Scroll snap can create a premium slide-like rhythm, but strict snapping is risky on mobile. The demo softens mobile behavior from mandatory to proximity.
- Fixed navigation and page counters must never cover business meaning. The new platform should treat navigation as adaptive per presentation type, not copy this exact dot/page-count/timeline system.

## Transferable Motion Lessons

- The loader is atmospheric and brand-coded: animated pattern, live clock, thin progress line, and a controlled dismissal sequence. It creates ritual, but should be rethought before reuse because loaders can also delay access to business meaning.
- The best motion is hierarchical: background image settles, pattern appears softly, title/copy cascade in, chart layers reveal after the thesis.
- Text cascade works because it is slow, understated, and tied to thesis reveal. It should inspire a motion principle, not become a mandatory character-splitting component.
- Chart animation is meaningful when it reveals comparison and scale: bar growth, category list reveal, metric count-up, and funnel width changes explain change rather than decorate the page.
- Motion uses premium easing and mostly avoids bounce/elastic behavior. This is worth preserving.
- `prefers-reduced-motion` handling is a good baseline requirement for the new platform.
- Wheel, keyboard, touch, and scroll-based section control create presentation confidence on desktop, but the imperative event model should not be copied as platform architecture.

## Assets Worth Preserving

- BORK logo mark in `index.html`: reference for placement, scale, and restraint. Direct reuse requires separate approval and should move through a future brand asset decision, not ad hoc copying.
- `bork-pattern-mono.svg`: strong candidate for reference and possible approved reuse as a low-opacity material layer.
- `bork-ginza-pattern-loader.svg`: useful for studying branded motion and pattern energy. Reuse only with separate approval because it is tied to the old loader.
- Boutique imagery (`bork-boutique-*.jpg/png/web.png`): high-value atmosphere reference for material, light, and spatial mood. Direct runtime reuse in the new platform requires separate approval.
- Fonts (`AkzidenzGroteskPro-*.otf`, `Bork-Display-*.otf`): internal reference package only. They must not be extracted, redistributed, or imported into the new platform runtime without separate approval.
- Existing handcrafted chart forms: useful as design references for premium data blocks, but should be rebuilt as reusable components with typed data when adopted.

## What Must Not Be Copied

- Fixed 5-slide structure.
- Old section order or slide count as a platform constraint.
- Old navigation.
- Old loader.
- Old layout.
- Old CSS classes.
- Old JavaScript logic.
- Old CSS/JS logic.
- Plain HTML/CSS/JS as a required stack.
- Any archived source or asset import into `src/` without separate confirmation.
- Section-specific hardcoding as the new generation model.
- Inline data values inside markup/styles as the future data contract.
- Old QA assumptions based on exactly five sections.
- The old implementation's imperative wheel/touch/keyboard navigation as the default platform engine.

## Opportunities For The New Platform

- Convert the strongest visual lessons into reusable brand tokens: warm material palette, typography scale, accent behavior, overlay recipes, pattern opacity rules, and motion easing.
- Build data-driven section patterns instead of page-specific layouts: ExecutivePerformanceHero, Commercial Result, Category Mix, Digital Efficiency, Decision Summary, Funnel, Scenario Matrix, Risk/Opportunity Map.
- Separate business narrative from presentation layout through typed content schemas. Every section should have thesis, evidence, data basis, and management implication.
- Replace handcrafted charts with reusable infographic primitives that can render from data: comparison bars, KPI strips, category share, funnel, annotated metric, timeline, and recommendation block.
- Make mobile behavior part of each section contract. A section is not complete until desktop, iPhone portrait, and iPhone landscape behaviors are defined.
- Use motion as a reusable storytelling layer: thesis reveal, evidence reveal, chart reveal, section transition, reduced-motion fallback.
- Allow the new platform to be more creative than the old demo: more flexible section count, stronger data narration, richer but controlled motion, alternative navigation models, and better auditability.
- Keep the old demo as a premium bar for mood, while aiming for a system that can generate multiple executive stories.

## Open Questions

- Is a live URL available, and does it match the archived source exactly?
- Are there screen recordings of the loader and section transitions for motion QA?
- Which assets are officially approved for direct reuse, and which are reference-only?
- Are the bundled fonts licensed for use in the new platform, or only preserved as part of the internal archive?
- Should the future platform keep scroll-snap presentation behavior, or support multiple navigation modes?
- Which mobile Safari issues were observed in the stable demo on real iPhone Pro Max devices?
- Which business metrics in the demo were mock values, and what data basis should future generated presentations require?
- Should future reference audits include rendered screenshots from the archived source for traceability, or remain notes-only until a live demo is reviewed?
