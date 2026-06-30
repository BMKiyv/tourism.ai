import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    group: 'Система',
  },
  access: {
    create: () => true,
    read: () => true,
    update: () => true,
    delete: () => true,
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      defaultValue: "user",
      options: [
        { label: "Admin", value: "admin" },
        { label: "User", value: "user" },
      ],
      access: {
        update: ({ req: { user } }) => user?.role === "admin",
      },
    },
  ],
};
