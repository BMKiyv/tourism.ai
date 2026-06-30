import type { CollectionConfig } from 'payload';

export const Team: CollectionConfig = {
  slug: "team",
  admin: {
    useAsTitle: "name",
    group: 'Структура',
  },
  fields: [
    { name: "name", type: "text", required: true },
    { name: "surname", type: "text", required: true },
    { name: "position", type: "text", required: true, localized: true },
    { name: "email", type: "text" },
    { name: "phone", type: "text" },
    { name: "facebook", type: "text" },
    { name: "image", type: "upload", relationTo: "media" },
    { name: "bio_link", type: "text" },
    { name: "bio_rich", type: "richText", localized: true },
    { name: "index", type: "number" },
  ],
};
