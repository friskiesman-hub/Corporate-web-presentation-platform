# QA_CHECKLIST.md

Чек-лист качества для платформы премиальных корпоративных web-презентаций.

Используй после изменений в структуре, UI, motion, data visualization, responsive layout, navigation, assets, generation workflow или deployment.

## 1. Project state

Перед проверкой:

- [ ] задача выполнялась в правильной ветке / workspace;
- [ ] stable reference не был случайно изменен;
- [ ] изменены только релевантные файлы;
- [ ] не добавлены случайные assets;
- [ ] нет секретов, ключей и приватных файлов;
- [ ] изменения соответствуют выбранному режиму работы.

## 2. Storytelling QA

Для каждой презентации:

- [ ] понятна аудитория;
- [ ] понятна цель обсуждения;
- [ ] есть core thesis;
- [ ] структура секций ведет к управленческому выводу;
- [ ] каждый экран имеет один главный смысл;
- [ ] данные поддерживают тезис, а не просто занимают место;
- [ ] факты, гипотезы и рекомендации разделены;
- [ ] финальный вывод связан с данными.

## 3. Brand DNA QA

Проверить:

- [ ] ощущение премиальности сохранено;
- [ ] цветовая палитра не ушла в generic SaaS;
- [ ] лого используется корректно;
- [ ] паттерн / герб / brand elements не выглядят декоративным мусором;
- [ ] нет marketplace aesthetics;
- [ ] нет дешевого gold luxury;
- [ ] нет cyberpunk blue glow без специального решения;
- [ ] визуальный язык соответствует senior business context.

## 4. Creative freedom QA

Проверить, что проект не зажат старой презентацией:

- [ ] количество экранов определяется историей, а не старым шаблоном;
- [ ] layout может отличаться от старой демо-версии;
- [ ] navigation может быть новой;
- [ ] анимации могут быть смелее, если они работают на смысл;
- [ ] новые infographic patterns допустимы;
- [ ] старая презентация используется как reference, не как constraint.

## 5. Visual quality QA

Каждый экран:

- [ ] выглядит дорого;
- [ ] имеет сильную типографику;
- [ ] имеет ясную визуальную иерархию;
- [ ] не перегружен карточками;
- [ ] не выглядит как dashboard template;
- [ ] не выглядит как AI-generated generic UI;
- [ ] главный тезис считывается за 3 секунды;
- [ ] есть достаточно воздуха;
- [ ] accents используются точно.

## 6. Data visualization QA

Для каждой инфографики:

- [ ] сначала есть insight, потом chart;
- [ ] выбран правильный тип визуализации;
- [ ] подписи читаемы;
- [ ] delta и comparison понятны;
- [ ] период и база понятны;
- [ ] нет misleading scale;
- [ ] mobile-версия читаема;
- [ ] график не превращен в украшение.

Для метрик:

- [ ] указан период;
- [ ] понятен numerator;
- [ ] понятен denominator;
- [ ] понятны exclusions;
- [ ] ясно, расчет по create date, complete date или другой логике;
- [ ] comparison point указан.

## 7. Motion QA

- [ ] motion поддерживает смысл;
- [ ] переходы плавные;
- [ ] нет bounce / elastic effects без причины;
- [ ] нет постоянного отвлекающего движения;
- [ ] анимация не мешает читать данные;
- [ ] на mobile нет visible jank;
- [ ] reduced motion учитывается, если реализован;
- [ ] сложная анимация не ломает performance.

## 8. Desktop QA

Проверить минимум:

- [ ] desktop Chrome;
- [ ] desktop Safari.

Проверки:

- [ ] приложение/презентация загружается;
- [ ] assets загружаются;
- [ ] navigation работает;
- [ ] keyboard / wheel / scroll behavior стабилен, если используется;
- [ ] charts readable;
- [ ] no horizontal overflow;
- [ ] no clipped critical content;
- [ ] final section / action работает.

## 9. iPhone Pro Max QA

Target: iPhone Pro Max family начиная с iPhone 14 Pro Max.

Portrait:

- [ ] нет horizontal overflow;
- [ ] headline читается;
- [ ] KPI / cards не перекрываются;
- [ ] charts адаптированы;
- [ ] navigation не закрывает смысл;
- [ ] tap targets удобны;
- [ ] spacing выглядит намеренно;
- [ ] презентация не выглядит сжатой desktop-версией.

Landscape:

- [ ] critical content не обрезается;
- [ ] navigation usable;
- [ ] charts remain readable;
- [ ] motion smooth;
- [ ] no horizontal overflow;
- [ ] layout feels intentional.

Safari `aA` scale:

- [ ] изменение масштаба не ломает layout;
- [ ] после reload нет layout collapse;
- [ ] fixed elements остаются корректными.

## 10. 21st.dev-generated components QA

Для каждого компонента, созданного или вдохновленного 21st.dev Magic MCP:

- [ ] компонент не принят слепо;
- [ ] generic SaaS style удален;
- [ ] лишние gradients/glow удалены;
- [ ] spacing и typography приведены к brand system;
- [ ] responsive behavior проверен;
- [ ] dependencies оправданы;
- [ ] компонент reusable;
- [ ] объяснено, что принято и что отклонено.

## 11. Platform QA

Для reusable components:

- [ ] компонент не завязан на одну конкретную презентацию;
- [ ] content можно заменить без переписывания layout;
- [ ] есть понятный props/data contract;
- [ ] компонент поддерживает desktop/mobile;
- [ ] component naming consistent;
- [ ] tokens используются вместо случайных цветов/spacing.

Для content schema:

- [ ] данные отделены от layout;
- [ ] секции можно переиспользовать;
- [ ] отсутствующие данные обработаны;
- [ ] есть пример mock data.

## 12. Performance QA

- [ ] нет чрезмерных изображений;
- [ ] motion не вызывает jank;
- [ ] bundle size не вырос без причины;
- [ ] lazy loading рассмотрен для тяжелых assets;
- [ ] mobile performance приемлемый.

## 13. Final acceptance

Изменение можно принять, если:

- [ ] оно усиливает platform direction;
- [ ] оно не разрушает brand DNA;
- [ ] оно работает на desktop;
- [ ] оно спроектировано для iPhone Pro Max;
- [ ] оно не выглядит generic;
- [ ] оно улучшает storytelling или reusable system;
- [ ] есть понятные verification steps;
- [ ] известны риски и ограничения.
