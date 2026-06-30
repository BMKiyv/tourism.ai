import type { CollectionConfig } from 'payload';

export const Departments: CollectionConfig = {
  slug: "departments",
  admin: { 
    useAsTitle: "name",
    group: 'Структура',
  },
  fields: [
    { name: "name", type: "text", required: true, localized: true },
    { name: "slug", type: "text", required: true },
    { name: "description", type: "textarea", localized: true },
    { name: "parent", type: "relationship", relationTo: "departments" },
    { name: "index", type: "number" },
  ],
};
