# Analytics — React + Vite (FSD)

Интерактивный блок «Аналитика» реализован на React (Vite, TypeScript) с TailwindCSS v4 и Recharts. Макет повторён максимально близко: сайдбар, заголовок с поиском и фильтрами, KPI‑карточки, большой график, «Склад», списки топ‑товаров/клиентов и аккордеон по регионам. Все элементы «живые»: вкладки переключаются, элементы списка выделяются, сайдбар сворачивается.

## Быстрый старт
- Установка зависимостей:
  ```bash
  npm i
  ```
- Запуск в dev‑режиме:
  ```bash
  npm run dev
  ```
- Сборка production:
  ```bash
  npm run build && npm run preview
  ```

## Стек
- React 19, TypeScript, Vite
- TailwindCSS v4 (`@tailwindcss/postcss`), PostCSS, Autoprefixer
- Recharts — графики
- Zustand — состояние фильтров/выделений
- Lucide — иконки

## Архитектура (FSD)
```
src/
  app/                # (зарезервировано)
  pages/
    analytics/
      ui/
        analytics-page.tsx  # Страница
  widgets/
    layout/           # Сайдбар/хедер/лейаут
    analytics/        # Виджеты: график, KPI, склад, списки, регионы
  features/
    filters/
      ui/top-filters.tsx    # Фильтры (город/канал/дата)
  entities/
    analytics/
      model/store.ts        # Zustand‑стор + мок‑данные
  shared/
    ui/ (card, tabs, progress)
    index.css               # Tailwind + базовые стили
```

## Где что:
- Главный лейаут: `src/widgets/layout/layout.tsx`
- Страница: `src/pages/analytics/ui/analytics-page.tsx`
- Виджеты: `src/widgets/analytics/*`
- Фильтры: `src/features/filters/ui/top-filters.tsx`
- Стор и мок‑данные: `src/entities/analytics/model/store.ts`

## Tailwind v4
Проект использует плагин `@tailwindcss/postcss`. Кастомные токены не используются — применены стандартные цвета Tailwind (`gray-100`, `gray-200`, `blue-600`, `emerald-600` и т. п.) для совместимости и «пиксельной» близости к макету.

## Пиксель‑перфект и интерактив
- Отступы, тени, радиусы, сетки и шрифты настроены под макет.
- Работают: вкладки, раскрытия аккордеона, выделение элементов списков, сворачивание сайдбара.
- Фильтры меняют состояние стора (мок‑режим), данные графика и списков смоделированы.

## Скрипты
- `npm run dev` — dev‑сервер
- `npm run build` — production‑сборка
- `npm run preview` — локальный превью собранного билда
