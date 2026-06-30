import { postgresAdapter } from "@payloadcms/db-postgres";
import {
  HTMLConverterFeature,
  lexicalEditor,
} from "@payloadcms/richtext-lexical";
import { buildConfig } from "payload";
import path from "path";
import { fileURLToPath } from "url";

import { Users } from "./collections/Users";
import { Blogs } from "./collections/Blogs";
import { Departments } from "./collections/Departments";
import { Orders } from "./collections/Orders";
import { Vacancies } from "./collections/Vacancies";
import { Team } from "./collections/Team";
import { Media } from "./collections/Media";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

console.log(
  "PAYLOAD_CONFIG: Initializing with DATABASE_URI:",
  process.env.DATABASE_URI ? "PRESENT" : "MISSING",
);

export default buildConfig({
  admin: {
    user: "users",
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  localization: {
    locales: [
      {
        label: "Українська",
        code: "uk",
      },
      {
        label: "English",
        code: "en",
      },
    ],
    defaultLocale: "uk",
    fallback: true,
  },
  collections: [Users, Blogs, Departments, Orders, Vacancies, Team, Media],
  editor: lexicalEditor({
    features: ({ defaultFeatures }) => [
      ...defaultFeatures,
      HTMLConverterFeature({}),
    ],
  }),
  secret: process.env.PAYLOAD_SECRET || "f3f3e2e2-1234-4567-8901-abcdef123456",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
    migrationDir: path.resolve(dirname, "migrations"),
  }),
});
