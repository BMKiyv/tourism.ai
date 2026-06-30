import type { CollectionConfig } from 'payload';
import path from "path";

export const Media: CollectionConfig = {
  slug: "media",
  admin: {
    group: 'Система',
  },
  upload: {
    staticDir: path.resolve(process.cwd(), "public/media"),
  },
  fields: [
    {
      name: "alt",
      type: "text",
      required: true,
    },
  ],
};
