import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { drizzle } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"

/* eslint-disable @typescript-eslint/no-var-requires */
const getClient = async () => {
  if (process.env.TURSO_URL && process.env.TURSO_TOKEN) {
    const { createClient } = await import("@libsql/client/web")
    return createClient({
      url: process.env.TURSO_URL,
      authToken: process.env.TURSO_TOKEN,
    })
  }
}

;(async () => {
  const client = await getClient()

  if (!client) {
    console.log("No Database Connection Configured")
    return
  }

  const db = drizzle(client)

  await migrate(db, { migrationsFolder: "./src/server/db/migrations" })

  client.close()

  console.log("Database migrations completed")
})()
