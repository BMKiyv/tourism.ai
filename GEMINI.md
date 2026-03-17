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
- [x] Масштабна міграція статичних та динамічних сторінок (більше 15 сторінок):
    - [x] Про ДАРТ, Структура, Команда, Біографії.
    - [x] Фінанси, Громадськості, Проєкти НПА, Публічні закупівлі, Статистика.
    - [x] Категоризація, Ліцензування, Накази, Вакансії, Антикорупція.
    - [x] Професійний розвиток, Підвідомчі організації.
- [x] Створення перевикористовуваних компонентів: `Tabs`, `ContactForm`, `DocumentLink`, `DocListItem`.
- [x] Налаштування динамічної колекції `team` у Payload.
- [x] Fix ESLint error in `Header.tsx` (`react-hooks/set-state-in-effect`).
- [x] Migrate `<img>` tags to `<Image />` in `Header.tsx` and `page.tsx`.
- [x] Restore `header-trigger` functionality in `Header.tsx`.
- [x] Integrated advanced Accessibility Widget from external source.
- [x] Removed legacy `AccessibilityTrigger` and cleaned up all page-level imports.

### In Progress (В процесі)
- [ ] Міграція англомовної версії сайту (`/en/*`).
- [ ] Вирішення питання переносу зображень, що були в колекціях Webflow (автоматизація завантаження).
- [ ] Налаштування поштового сервісу для розсилки посилань на відновлення пароля.

### To Do (Заплановано)
- [ ] Оптимізація роботи з медіа-файлами.
- [ ] Реалізація пошуку по всьому сайту.
- [ ] Налаштування захищених роутів для адмін-функцій на фронтенді.
- [ ] Implement robust accessibility testing (using `a11y-debugging` skill).
- [ ] Review all dynamic content pages for image optimization.
- [ ] Optimize LCP for the homepage video/hero section.
