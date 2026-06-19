# CURRENT_STATE.md

Checkpoint for safely continuing the BORK corporate web-presentation platform in a new Codex UI chat.

## Current project goal

Build an experimental platform for generating premium corporate web-presentations in the BORK brand direction.

The goal is not one fixed presentation. The platform should support reusable sections, typed business data, executive storytelling, responsive layout, future motion, and data-driven infographics for topics such as Internet Boutique, sales, e-commerce, performance marketing, CRM, consultants, categories, delivery, payment, conversion, and order execution.

The previous stable BORK Internet Boutique Q2 2026 presentation remains only a visual reference and stable demo. It is not an architecture constraint.

## Last commit

```text
81ec4b1 docs: add current state checkpoint
```

## Skeleton commit

```text
d052c1f feat: initialize presentation platform skeleton
```

## Current stack

- Vite
- React
- TypeScript
- Plain CSS

No Tailwind CSS, Framer Motion, GSAP, chart library, ESLint, Prettier, Next.js, or 21st.dev-generated component is installed at this checkpoint.

## Current package manager

The project currently uses `pnpm`.

Relevant files:

```text
package.json
pnpm-lock.yaml
```

Commands documented for the current skeleton:

```bash
pnpm install
pnpm dev
pnpm build
```

Note: in the current Codex runtime, `npm` was not available in PATH. Build verification was completed through the available Node runtime using the package script.

## Current project structure

```text
.
  AGENTS.md
  DEPLOY.md
  PROJECT_CONTEXT.md
  QA_CHECKLIST.md
  README_START_HERE.md
  index.html
  package.json
  pnpm-lock.yaml
  tsconfig.json
  tsconfig.node.json
  vite.config.ts
  docs/
    BRAND_DNA.md
    CURRENT_STATE.md
    REFERENCE_USAGE.md
    TOOLING.md
  .agents/
    skills/
      corporate-web-presentation/
        SKILL.md
      premium-ui-review/
        SKILL.md
      responsive-presentation-qa/
        SKILL.md
  src/
    app/
      App.tsx
    components/
      PresentationNav/
        PresentationNav.tsx
      SectionShell/
        SectionShell.tsx
    lib/
      formatters.ts
      presentationRenderer.tsx
    presentations/
      internet-boutique-demo/
        data.ts
        presentation.config.ts
    sections/
      ExecutiveCover/
        ExecutiveCover.tsx
        types.ts
      KpiStrip/
        KpiStrip.tsx
        types.ts
    styles/
      globals.css
    tokens/
      breakpoints.ts
      colors.ts
      spacing.ts
      typography.ts
    main.tsx
    vite-env.d.ts
```

## Foundation files

Foundation and instruction files currently present:

```text
AGENTS.md
PROJECT_CONTEXT.md
QA_CHECKLIST.md
DEPLOY.md
README_START_HERE.md
docs/BRAND_DNA.md
docs/REFERENCE_USAGE.md
docs/TOOLING.md
docs/CURRENT_STATE.md
.agents/skills/corporate-web-presentation/SKILL.md
.agents/skills/premium-ui-review/SKILL.md
.agents/skills/responsive-presentation-qa/SKILL.md
```

Do not change these files unless the user explicitly asks for documentation, instruction, QA, deploy, or skill updates.

## Source files created

```text
src/app/App.tsx
src/components/PresentationNav/PresentationNav.tsx
src/components/SectionShell/SectionShell.tsx
src/lib/formatters.ts
src/lib/presentationRenderer.tsx
src/main.tsx
src/presentations/internet-boutique-demo/data.ts
src/presentations/internet-boutique-demo/presentation.config.ts
src/sections/ExecutiveCover/ExecutiveCover.tsx
src/sections/ExecutiveCover/types.ts
src/sections/KpiStrip/KpiStrip.tsx
src/sections/KpiStrip/types.ts
src/styles/globals.css
src/tokens/breakpoints.ts
src/tokens/colors.ts
src/tokens/spacing.ts
src/tokens/typography.ts
src/vite-env.d.ts
```

## Dependencies added

Runtime dependencies:

```text
react
react-dom
```

Dev dependencies:

```text
@types/react
@types/react-dom
@vitejs/plugin-react
typescript
vite
```

No other dependencies should be added without explicit approval.

## Checks passed

The skeleton build passed.

Verified package script behavior:

```text
scripts.build = "tsc && vite build"
```

Observed successful build output:

```text
vite v5.4.21 building for production...
39 modules transformed.
dist/index.html
dist/assets/index-*.css
dist/assets/index-*.js
built successfully
```

`dist/` and `node_modules/` are ignored by `.gitignore` and should not be committed.

## Stable foundation

These pieces are the stable foundation for the next step:

- Vite + React + TypeScript baseline.
- `presentation.config.ts` as the typed presentation entry point.
- `sections` array as the source of section order; no fixed slide count.
- `presentationRenderer.tsx` dispatching sections by `section.type`.
- Reusable section contracts through local `types.ts` files.
- `SectionShell` as the first responsive layout primitive.
- `PresentationNav` generated from config sections.
- Brand tokens separated under `src/tokens/`.
- Plain CSS reset and responsive rules in `src/styles/globals.css`.

## Experimental areas

These areas are intentionally not final:

- Visual polish and art direction of sections.
- Motion system.
- Navigation concept.
- Chart and infographic abstraction.
- Data schema depth.
- Presentation generation workflow.
- 21st.dev Magic MCP usage.
- Deployment flow.
- Real BORK brand assets integration.
- Mobile QA on a real iPhone device.

## Do not do without explicit confirmation

- Do not install Tailwind CSS, Framer Motion, GSAP, Recharts, D3, Visx, Next.js, ESLint, Prettier, or any new dependency.
- Do not copy the old Q2 2026 presentation architecture.
- Do not constrain the platform to exactly 5 sections or slides.
- Do not create production deployment flow.
- Do not change `AGENTS.md`, `PROJECT_CONTEXT.md`, `QA_CHECKLIST.md`, `DEPLOY.md`, `docs/*.md`, or `.agents/skills/*/SKILL.md` unless the user explicitly asks.
- Do not commit `dist/`, `node_modules/`, `.DS_Store`, `.env`, or generated package-manager cache folders.
- Do not use `git add .`.
- Do not treat the current visuals as final premium design.

## Recommended next step

Next recommended step: run a platform architecture review of the current skeleton and define the next small implementation milestone.

The likely next implementation milestone is one of:

1. Add one more reusable section pattern, such as `DecisionSummary` or `ChannelPerformance`, still without chart libraries.
2. Introduce a shared presentation type module if section unions start to outgrow the demo config.
3. Do responsive QA for desktop and iPhone Pro Max viewport using the current skeleton.
4. Create a small data contract review before adding infographics.

Prefer option 2 before adding many sections, because `PresentationSection` currently lives in the demo config and may need to move to a shared `src/lib` or `src/presentations` type module once more presentations appear.

## Starter prompt for new Codex UI chat

```text
Режим: Platform evolution / Safe continuation.

Продолжи работу в репозитории Corporate-web-presentation-platform.

Сначала прочитай:
- AGENTS.md
- PROJECT_CONTEXT.md
- QA_CHECKLIST.md
- docs/BRAND_DNA.md
- docs/REFERENCE_USAGE.md
- docs/TOOLING.md
- docs/CURRENT_STATE.md
- .agents/skills/corporate-web-presentation/SKILL.md

Контекст:
Technical skeleton уже создан и закоммичен в commit d052c1f:
feat: initialize presentation platform skeleton.

Текущий стек:
Vite + React + TypeScript + plain CSS, package manager pnpm.

Ограничения:
1. Не копируй архитектуру старой Q2 2026 презентации.
2. Не фиксируй количество секций как 5.
3. Не устанавливай новые зависимости без отдельного подтверждения.
4. Не добавляй Tailwind, Framer Motion, GSAP, chart libraries, ESLint, Prettier или 21st.dev-generated components без отдельного запроса.
5. Не меняй foundation-документы без явной задачи.
6. Не используй git add ..

Задача:
Проведи короткий review текущего skeleton и предложи следующий маленький безопасный milestone для развития platform architecture.
Пока не меняй файлы.
```
