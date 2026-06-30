import type { CollectionConfig } from 'payload';

export const Vacancies: CollectionConfig = {
  slug: "vacancies",
  admin: { 
    useAsTitle: "name",
    group: 'Контент',
  },
  fields: [
    { name: "name", type: "text", required: true, localized: true },
    { name: "slug", type: "text", required: true },
    { name: "link", type: "text" },
  ],
};
