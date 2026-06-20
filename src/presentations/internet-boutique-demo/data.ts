import type { ExecutivePerformanceHeroKpi } from "../../sections/ExecutivePerformanceHero/types";
import type { KpiItem } from "../../sections/KpiStrip/types";

export const demoPeriod = {
  label: "Q2 2026 / Интернет Бутик",
  range: "Q2 2026",
  comparison: "Q2 2026 / ключевые показатели",
};

export const demoKpis: KpiItem[] = [
  {
    label: "GMV Q2",
    value: 2740000000,
    unit: "rub",
    displayValue: "2,74 млрд ₽",
    delta: 28,
    displayDelta: "+28% к Q1 2026",
    direction: "up",
    basis: "квартальный объем продаж Интернет Бутика",
  },
  {
    label: "Выше плана",
    value: 9.6,
    unit: "%",
    delta: 9.6,
    displayDelta: "лучший месяц — июнь",
    direction: "up",
    basis: "факт Q2 относительно коммерческого плана",
  },
  {
    label: "Заказы",
    value: 34800,
    unit: "count",
    displayValue: "34,8 тыс.",
    delta: 2.9,
    displayDelta: "CR 2,9%",
    direction: "up",
    basis: "выполненные заказы при 1,18 млн сессий",
  },
];

export const demoCategoryKpis: KpiItem[] = [
  {
    label: "Кухня",
    value: 34,
    unit: "%",
    delta: 14,
    displayDelta: "+14% к среднему чеку",
    direction: "up",
    basis: "максимальный вклад в GMV за счет комплектных покупок",
  },
  {
    label: "Красота",
    value: 21,
    unit: "%",
    delta: 31,
    displayDelta: "31% заказов с аксессуаром",
    direction: "up",
    basis: "вторая по вкладу категория с высоким потенциалом допродаж",
  },
  {
    label: "Климат",
    value: 18,
    unit: "%",
    delta: 1.42,
    displayDelta: "1,42 товара в заказе",
    direction: "up",
    basis: "рост поддержан сезонным спросом и подборками",
  },
];

export const demoDigitalKpis: KpiItem[] = [
  {
    label: "CRM и повторные сценарии",
    value: 41,
    unit: "%",
    delta: 0,
    displayDelta: "доля выручки Q2",
    direction: "up",
    basis: "выручки Q2 пришло из CRM и повторных сценариев",
  },
  {
    label: "Сессии",
    value: 1180000,
    unit: "count",
    displayValue: "1,18 млн",
    delta: 2.9,
    displayDelta: "CR 2,9%",
    direction: "up",
    basis: "умеренный рост трафика дал более качественный результат",
  },
  {
    label: "Корзины",
    value: 52100,
    unit: "count",
    displayValue: "52,1 тыс.",
    delta: -11,
    displayDelta: "CAC -11%",
    direction: "up",
    basis: "персонализация улучшила экономику привлечения",
  },
];

export const demoQ3FocusKpis: KpiItem[] = [
  {
    label: "Цель GMV Q3",
    value: 18,
    unit: "%",
    delta: 18,
    displayDelta: "к Q2 2026",
    direction: "up",
    basis: "масштабировать рост без потери премиального качества сервиса",
  },
  {
    label: "CRM-вклад",
    value: 45,
    unit: "%",
    delta: 4,
    displayDelta: "+4 п.п. к Q2",
    direction: "up",
    basis: "развить персональные и повторные сценарии",
  },
  {
    label: "Целевой чек",
    value: 82000,
    unit: "rub",
    displayValue: "82 тыс. ₽",
    delta: 3.3,
    displayDelta: "+3,3 тыс. ₽",
    direction: "up",
    basis: "усилить премиальные комплекты и аксессуары",
  },
];

export const demoExecutivePerformanceHeroKpis: ExecutivePerformanceHeroKpi[] = [
  {
    label: "GMV Q2",
    value: 2740000000,
    unit: "rub",
    displayValue: "2,74 млрд ₽",
    delta: 28,
    displayDelta: "+28% к Q1",
    direction: "up",
    visualShare: 89,
    basis: "квартальный объем продаж Интернет Бутика",
    signal: "Квартал роста в премиальном digital-канале подтвержден коммерческим результатом.",
  },
  {
    label: "Выше плана",
    value: 9.6,
    unit: "%",
    delta: 9.6,
    displayDelta: "июнь — 1 025 млн ₽",
    direction: "up",
    visualShare: 78,
    basis: "факт Q2 относительно коммерческого плана",
    signal: "Июнь стал лучшим месяцем квартала после летних подборок, консультаций и CRM-сценариев.",
  },
  {
    label: "CRM и повторные сценарии",
    value: 41,
    unit: "%",
    delta: 11,
    displayDelta: "CAC -11%",
    direction: "up",
    visualShare: 66,
    basis: "доля выручки Q2 из CRM и повторных сценариев",
    signal: "Digital-канал стал точнее: умеренный рост трафика дал более сильный коммерческий эффект.",
  },
  {
    label: "Заказы",
    value: 34800,
    unit: "count",
    displayValue: "34,8 тыс.",
    delta: 2.9,
    displayDelta: "CR 2,9%",
    direction: "up",
    visualShare: 58,
    basis: "выполненные заказы при 1,18 млн сессий",
    signal: "Качество сессий и персонализация поддержали рост заказов без превращения канала в массовый маркетплейс.",
  },
];
