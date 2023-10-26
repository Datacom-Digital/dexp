import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import type { Config } from "drizzle-kit"

export default {
  schema: "./server/db/schema/index.ts",
  out: "./server/db/migrations",
  driver: "libsql",
  dbCredentials: {
    url: "file://.db/dexp.db",
  },
} satisfies Config
