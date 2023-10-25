import "dotenv"
import { createClient } from "@libsql/client"
import { drizzle } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"
;(async () => {
  if (process.env.CI) {
    return
  }

  const db = createClient({
    url: "file:dexp.db",
  })

  await db.execute(`PRAGMA journal_mode=WAL;`)

  const client = drizzle(db)

  await migrate(client, { migrationsFolder: "./server/db/migrations" })

  console.log("Database migrations completed")
})()
