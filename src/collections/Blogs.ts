import type { CollectionConfig } from 'payload';

export const Blogs: CollectionConfig = {
  slug: "blogs",
  admin: {
    useAsTitle: "name",
    group: 'Контент',
  },
  fields: [
    { name: "name", type: "text", required: true, localized: true },
    { name: "slug", type: "text", required: true, unique: true },
    { name: "date", type: "date" },
    { name: "author", type: "text" },
    { name: "img", type: "upload", relationTo: "media" },
    { name: "anounce", type: "textarea", localized: true },
    { name: "rich", type: "richText", localized: true },
    { name: "is_popular", type: "checkbox" },
    { name: "webflow_item_id", type: "text", admin: { readOnly: true } },
  ],
};
