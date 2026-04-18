# Project Context: tourism.gov.ua

Official website for the **State Agency for Tourism Development of Ukraine (DART)**.

## Technical Architecture

- **Framework:** Next.js 16 (App Router, TypeScript)
- **CMS:** Payload CMS 3.x (Self-hosted)
- **Database:** PostgreSQL (via `@payloadcms/db-postgres`)
- **Styling:** Tailwind CSS 4 + Legacy Webflow CSS (`/public/webflow/css`)
- **Language Support:** Multi-language (UA/EN) with URL-based routing (`/en` prefix).
- **Accessibility:** Targeted WCAG AA compliance (custom widget and semantics).

## Key Components

- `src/components/Header.tsx`: Dynamic navigation with menu shifting logic (`header-trigger`).
- `src/components/Footer.tsx`: Multi-language footer.
- `src/app/(frontend)/page.tsx`: Dynamic homepage with news from Payload.
- `src/payload.config.ts`: Main CMS configuration.

## Development Standards & Constraints

- **Accessibility First:** Always use semantic HTML. Ensure keyboard navigation works.
- **Image Optimization:** Always use `<Image />` from `next/image` instead of `<img>`.
- **State Management:** Avoid synchronous `setState` inside `useEffect` to prevent cascading renders. Prefer deriving state from props/path or adjusting state during render.
- **Styling:** Respect existing Webflow class naming conventions while using Tailwind for new components.
- **Performance:** Monitor LCP (Largest Contentful Paint) - ensure hero images have `priority` attribute.

## Project Progress & Roadmap

### Completed (Виконано)

- [x] Ініціалізація проекту (Next.js + Payload CMS + PostgreSQL).
- [x] Імпорт основних колекцій з Webflow (Blogs, Departments, Orders, Vacancies).
- [x] Налаштування локалізації (UK/EN).
- [x] Реалізація системи автентифікації користувачів.
- [x] Масштабна міграція статичних та динамічних сторінок (більше 15 сторінок).
- [x] Створення перевикористовуваних компонентів: `Tabs`, `ContactForm`, `DocumentLink`, `DocListItem`.
- [x] Налаштування динамічної колекції `team` у Payload.
- [x] Рефакторинг `Header.tsx`:
  - [x] Перехід на `<Image />` та семантичну верстку.
  - [x] Відкриття меню за кліком (замість hover) та click-outside закриття.
  - [x] Плавна анімація випадаючих списків.
  - [x] Автоматичне виділення активної сторінки (`w--current`).
  - [x] Реалізація перемикача мов (UA/EN) з ховер-ефектом та SEO-посиланнями.
  - [x] Адаптація для мобільних пристроїв та планшетів (слайдер підменю).
- [x] Integrated advanced Accessibility Widget.
- [x] Виправлення помилки гідратації в адмін-панелі (suppressHydrationWarning).

### In Progress (В процесі)

- [ ] Перевірка переспрямувань на відповідні сторінки в англійській версії хедера.
- [ ] Міграція англомовної версії сайту (`/en/*`).
- [x] Вирішення питання переносу зображень з Webflow.
- [x] Автоматизоване завантаження медіа-файлів для Blogs, Orders та Team.
- [x] Парсинг даних команди з HTML-файлу.

### To Do (Заплановано)

- [ ] Оптимізація роботи з медіа-файлами.
- [ ] Реалізація пошуку по всьому сайту.
- [ ] Налаштування захищених роутів.
- [ ] Оптимізація LCP для головної сторінки.
