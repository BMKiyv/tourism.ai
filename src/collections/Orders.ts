import type { CollectionConfig } from 'payload';

export const Orders: CollectionConfig = {
  slug: "orders",
  admin: { 
    useAsTitle: "name",
    group: 'Документи',
  },
  fields: [
    { name: "name", type: "text", required: true, localized: true },
    { name: "slug", type: "text", required: true },
    { name: "number", type: "text" },
    { name: "date", type: "date" },
    { name: "link", type: "text" },
    { name: "url", type: "text" },
    { name: "logo", type: "upload", relationTo: "media" },
  ],
};
