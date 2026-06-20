import type { PresentationConfig } from "../types";
import {
  demoCategoryKpis,
  demoDigitalKpis,
  demoExecutivePerformanceHeroKpis,
  demoPeriod,
  demoQ3FocusKpis,
} from "./data";

export const internetBoutiqueDemoPresentation: PresentationConfig = {
  id: "internet-boutique-demo",
  title: "BORK Интернет Бутик Q2 2026",
  audience: "Коммерческое и digital-руководство",
  period: demoPeriod.range,
  thesis:
    "Квартал роста в премиальном digital-канале: выше выручка, качественнее трафик и сильнее вклад персональных сценариев.",
  sections: [
    {
      id: "executive-performance-hero",
      type: "executive-performance-hero",
      navLabel: "Итог периода",
      eyebrow: demoPeriod.label,
      title: "Интернет бутик Результаты Q2",
      thesis:
        "Квартал роста в премиальном digital-канале: выше выручка, качественнее трафик и сильнее вклад персональных сценариев.",
      periodLabel: "Период результата",
      period: demoPeriod.range,
      managementImplication:
        "Следующий шаг — масштабировать персональные сценарии, удержать качество сервиса и усилить премиальные комплекты.",
      summaryKpis: [
        {
          value: "2,74 млрд ₽",
          label: "GMV Q2",
        },
        {
          value: "+28%",
          label: "к Q1 2026",
        },
        {
          value: "34,8 тыс.",
          label: "заказов",
        },
      ],
      ctaLabel: "Смотреть показатели",
      ctaTargetId: "executive-cover",
      kpis: demoExecutivePerformanceHeroKpis,
    },
    {
      id: "executive-cover",
      type: "executive-cover",
      navLabel: "Выручка",
      eyebrow: "02 / Commercial Result",
      title: "Выручка выше плана на 9,6%",
      thesis:
        "Июнь стал лучшим месяцем квартала: рост поддержали запуск летних подборок, персональные консультации и возврат аудитории после CRM-сценариев.",
      context:
        "Факт по месяцам: апрель — 812 млн ₽, май — 903 млн ₽, июнь — 1 025 млн ₽. План: 760 / 840 / 900 млн ₽. Средний чек — 78,7 тыс. ₽, конверсия — 2,9%, NPS доставки — 74.",
      audienceLabel: "GMV, млн ₽",
      audience: "2 740",
      periodLabel: "Динамика",
      period: "+9,6% к плану",
      chart: {
        toplineLabel: "GMV, млн ₽",
        toplineValue: "2 740",
        toplineDelta: "+9,6% к плану",
        factLegendLabel: "Факт",
        planLegendLabel: "План",
        yAxisLabel: "млн ₽",
        insight: "Факт стабильно идет выше плана, а июнь дает главный вклад в квартальное превышение.",
        months: [
          {
            label: "Апрель",
            fact: { value: "812", amount: 812 },
            plan: { value: "760", amount: 760 },
            change: "+52 млн ₽",
            note: "старт выше базы",
          },
          {
            label: "Май",
            fact: { value: "903", amount: 903 },
            plan: { value: "840", amount: 840 },
            change: "+63 млн ₽",
            note: "эффект подборок",
          },
          {
            label: "Июнь",
            fact: { value: "1 025", amount: 1025 },
            plan: { value: "900", amount: 900 },
            change: "+125 млн ₽",
            note: "лучший месяц Q2",
          },
        ],
        miniMetrics: [
          {
            value: "78,7 тыс. ₽",
            label: "Средний чек",
          },
          {
            value: "2,9%",
            label: "Конверсия",
          },
          {
            value: "74",
            label: "NPS доставки",
          },
        ],
      },
    },
    {
      id: "kpi-strip",
      type: "kpi-strip",
      navLabel: "Категории",
      title: "Категории с максимальным вкладом",
      thesis:
        "Рост обеспечили кухонные системы, уход за домом и аксессуары с высокой долей комплектных покупок.",
      comparison: "03 / Категорийный вклад",
      items: demoCategoryKpis,
    },
    {
      id: "digital-efficiency",
      type: "kpi-strip",
      navLabel: "Цифровой канал",
      title: "Digital-канал стал точнее",
      thesis:
        "Трафик вырос умеренно, но качество сессий и персонализация дали заметный прирост коммерческого результата.",
      comparison: "04 / Цифровая эффективность",
      items: demoDigitalKpis,
    },
    {
      id: "q3-focus",
      type: "kpi-strip",
      navLabel: "Q3",
      title: "Q2 подтвердил потенциал Интернет Бутика",
      thesis:
        "Следующий шаг — масштабировать персональные сценарии, удержать качество сервиса и усилить премиальные комплекты.",
      comparison: "05 / Фокус Q3",
      items: demoQ3FocusKpis,
    },
  ],
};
