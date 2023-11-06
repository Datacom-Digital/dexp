import dotenv from "dotenv"
dotenv.config({ path: ".env.local" })

import { createWriteStream } from "fs"
import { drizzle } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

const pages = sqliteTable("pages", {
  key: text("key").notNull().primaryKey(),
  data: text("data"),
})

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

  const results = await db
    .select({
      data: pages.data,
    })
    .from(pages)

  const regex = /"className":"([^"]*)"/gim

  var outFile = createWriteStream("tailwind.classes.txt")

  for (const { data } of results) {
    if (data) {
      for (const match of data.matchAll(regex)) {
        outFile.write(match[1])
        outFile.write("\n")
      }
    }
  }

  outFile.write("\n")
  outFile.end()

  client.close()

  console.log("Database migrations completed")
})()
