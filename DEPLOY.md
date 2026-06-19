# DEPLOY.md

Deployment notes для новой платформы корпоративных web-презентаций.

## 1. Текущий статус

На старте проекта deployment flow может быть не определен.

До выбора технологии и hosting model не считать деплой обязательным этапом.

Возможные варианты будущего деплоя:

- GitHub Pages для статического прототипа;
- Vercel для Vite/React/Next.js;
- Netlify;
- internal hosting;
- static export.

## 2. Принцип безопасности

Не деплоить эксперименты как stable version без явного решения пользователя.

Разделять:

- prototype preview;
- internal review build;
- stable demo;
- production/published version.

## 3. Before deploy

Проверить:

- [ ] выбрана правильная ветка;
- [ ] изменения одобрены;
- [ ] QA_CHECKLIST.md выполнен;
- [ ] нет секретов;
- [ ] нет случайных assets;
- [ ] stable reference не изменен случайно;
- [ ] mobile/iPhone проверка выполнена или явно отложена.

## 4. Deploy flow placeholder

Заполнить после выбора стека.

```text
Hosting: TBD
Build command: TBD
Output directory: TBD
Preview URL: TBD
Production URL: TBD
Rollback method: TBD
```

## 5. Rollback principle

Для каждого опубликованного состояния должна быть известна точка возврата:

- commit;
- tag;
- previous deployment;
- stable branch.
