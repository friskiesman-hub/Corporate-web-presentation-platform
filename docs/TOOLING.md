# TOOLING.md

Документ описывает роль инструментов в новом проекте.

## 1. Codex UI

Пользователь работает через Codex UI, а не через консольную версию Codex.

Поэтому все задачи должны быть сформулированы как понятные пошаговые промпты для UI.

Если Codex UI не может выполнить команду или действие напрямую, он должен:

- честно сообщить об ограничении;
- предложить действие, которое пользователь может выполнить в UI;
- не предполагать, что пользователь работает в CLI.

## 2. Codex project instructions

Основные правила проекта находятся в:

- `AGENTS.md`
- `PROJECT_CONTEXT.md`
- `QA_CHECKLIST.md`
- `docs/BRAND_DNA.md`
- `docs/REFERENCE_USAGE.md`

Перед серьезными изменениями Codex должен учитывать эти файлы.

## 3. Language and technical naming

- Codex отвечает пользователю на русском языке, если пользователь явно не попросил другой язык.
- Английский сохраняется только для точных технических идентификаторов: file names, folder names, component names, TypeScript types, functions, CSS classes, package names, Git commands, npm/pnpm scripts, config keys, MCP-серверов, Codex skills и официальных названий инструментов вроде `Vite`, `React`, `TypeScript`, `21st.dev Magic MCP`.
- Не используй английские смысловые слова в русских объяснениях, если есть точный и естественный русский эквивалент:
  - `section` -> `секция`, кроме имени типа или компонента;
  - `proof` -> `доказательство`;
  - `evidence` -> `подтверждение данными` или `доказательная база`;
  - `management implication` -> `управленческий вывод`;
  - `baseline` -> `база сравнения`;
  - `current value` -> `текущее значение`;
  - `safe implementation prompt` -> `безопасный промпт на реализацию`;
  - `visual polish` -> `визуальная доводка`;
  - `creative direction` -> `творческое направление`.
- Названия компонентов и типов остаются на английском: `ComparisonEvidence`, `PresentationSection`, `ExecutiveCover`, `KpiStrip`, `PresentationConfig`, `BaseSection`.
- В документации и промптах можно использовать английское имя сущности в backticks, а затем объяснять смысл по-русски.
- Code comments в новом или изменяемом коде должны быть bilingual, если комментарий содержательный: English first, Russian second. Комментарии должны быть короткими, полезными и не объяснять очевидный код.
- Commit subject должен быть на английском в Conventional Commits style.
- Не делай commit subject bilingual, потому что это зашумляет `git log --oneline`.
- Для маленьких routine commits достаточно English-only subject без body.
- Commit body должен быть bilingual, если изменение важное, архитектурное или может быть непонятно только из subject:
  - `EN:` concise technical summary;
  - `RU:` краткое объяснение смысла для пользователя/команды.
- Документация может быть Russian-first для project guidance, business context, brand logic и user workflow.
- Technical identifiers внутри документации сохраняй на английском, когда это повышает точность; обычные смысловые слова переводи на русский.
- Не используй русский язык в identifiers, file names, component names, scripts и config keys.

## 4. Codex skills

Skills используются для повторяемых рабочих процессов:

- `$corporate-web-presentation` — создание/проектирование презентаций;
- `$premium-ui-review` — арт-директорский review;
- `$responsive-presentation-qa` — проверка desktop/mobile/iPhone.

## 5. 21st.dev / Magic MCP

21st.dev Magic MCP используется как инструмент генерации отдельных UI-компонентов.

Использовать для:

- hero sections;
- KPI cards;
- timelines;
- comparison blocks;
- responsive sections;
- navigation ideas;
- animated UI patterns.

Не использовать как:

- финальный дизайн-директор;
- источник brand strategy;
- генератор всей презентации без контроля;
- повод добавить generic SaaS aesthetics.

Если 21st.dev Magic MCP недоступен в Codex UI, Codex должен сообщить об этом и предложить ручной вариант реализации.

## 6. Suggested first stack

Для первого технологического прототипа рекомендуется:

- Vite;
- React;
- TypeScript;
- Tailwind CSS;
- Framer Motion.

Chart library выбрать позже после первых прототипов infographic patterns.
