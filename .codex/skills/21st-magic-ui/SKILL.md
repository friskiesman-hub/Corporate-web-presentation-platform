---
name: 21st-magic-ui
description: Use when evaluating, prompting, or adapting 21st.dev Magic MCP output for this premium corporate web-presentation platform. Controls how Magic MCP may be used for UI inspiration, layout patterns, props contracts, and component ideas without letting it define brand direction or project architecture.
---

# 21st Magic UI Skill

## Purpose

Use 21st.dev Magic MCP only as a source of UI inspiration, component patterns, layout ideas, information architecture, responsive behavior, and props contracts for the Corporate Web Presentation Platform.

21st.dev is not a source of final brand direction, final visual language, project architecture, or dependency decisions.

## Required Project Context First

Before calling 21st.dev Magic MCP, inspect the current project context:

- `package.json`
- `src/sections/registry.tsx`
- `src/components/SectionShell/SectionShell.tsx`
- existing section components in `src/sections`
- `src/tokens`
- `src/styles/globals.css`
- mobile breakpoints and responsive CSS

Current project stack:

- React 18
- Vite
- TypeScript
- global CSS
- typed presentation config plus section registry
- `SectionShell`
- brand tokens: graphite, warm black, stone, ivory, amber, bronze
- mobile breakpoints: `932px` and `430px`

## Dependency Guardrails

Do not add any of the following without separate explicit user approval:

- Tailwind CSS
- shadcn
- `lucide-react`
- Recharts
- Radix
- Next.js-specific code
- any new dependency

If 21st.dev returns Tailwind/shadcn-style code, extract only:

- composition
- information architecture
- data contract
- responsive logic
- visual hierarchy idea

Do not copy the raw implementation into the project.

## Adaptation Rules

Any useful 21st.dev idea must be manually adapted to:

- `SectionShell`
- typed section config
- section registry
- existing global CSS
- `src/tokens`
- premium dark aesthetic
- restrained motion
- executive storytelling

Do not copy:

- generic SaaS cards
- green/red/blue dashboard semantics
- excessive badges
- playful icons
- emoji
- neon gradients
- random glow
- decorative effects without business meaning

## Required Report After 21st.dev Use

After every 21st.dev Magic MCP call, report:

- which Magic tool was called
- what prompt/theme was sent
- what ideas were returned
- what fits this project
- what does not fit this project
- what must be rewritten manually
- whether any new dependencies would be required
- one safe next step

## Inspiration / Research Mode

During inspiration or research mode, do not:

- edit files
- create files
- install dependencies
- create commits
- integrate generated components

Use Magic MCP output only for analysis and selection.

## Implementation Mode

Implementation is allowed only after separate explicit user approval.

When implementation is approved:

- use an experiment branch first
- keep work in an isolated component or section
- preserve the existing React/Vite/TypeScript/global CSS architecture
- avoid dependency additions unless separately approved
- validate desktop and iPhone Pro Max behavior
