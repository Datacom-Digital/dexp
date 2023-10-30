import "dotenv"
dotenv.config({ path: ".env.local" })

import { mkdir } from "fs/promises"
import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"
;(async () => {
  if (process.env.CI) {
    return
  }

  await mkdir(".db", { recursive: true })

  const db = createClient({
    url: "file:.db/dexp.db",
  })

  await db.execute(`PRAGMA journal_mode=WAL;`)

  const client = drizzle(db)

  await migrate(client, { migrationsFolder: "./src/server/db/migrations" })

  console.log("Database migrations completed")
})()
