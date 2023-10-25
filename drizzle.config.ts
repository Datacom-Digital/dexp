import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import type { Config } from "drizzle-kit"

export default {
  schema: "./lib/db/schema/index.ts",
  out: "./lib/db/migrations",
  driver: "libsql",
  dbCredentials: {
    url: "file://dexp.db",
  },
} satisfies Config
