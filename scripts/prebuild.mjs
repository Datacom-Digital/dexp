import { createWriteStream } from "fs"
import dotenv from "dotenv"
import { drizzle } from "drizzle-orm/libsql"
import { migrate } from "drizzle-orm/libsql/migrator"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

switch (process.env.VERCEL_ENVIRONMENT) {
  case "development":
    dotenv.config({ path: "./.vercel/.env.development.local" })
    break
  case "preview":
    dotenv.config({ path: "./.vercel/.env.preview.local" })
    break
  case "production":
    dotenv.config({ path: "./.vercel/.env.production.local" })
    break
  default:
    dotenv.config({ path: ".env.local" })
}

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
  console.log(
    `Migrating database env=${process.env.VERCEL_ENVIRONMENT} scope=${process.env.VERCEL_SCOPE} domain=${process.env.DOMAIN} url=${process.env.TURSO_URL}`,
  )

  const client = await getClient()

  if (!client) {
    console.log("No Database Connection Configured")
    return
  }

  const db = drizzle(client)

  await migrate(db, { migrationsFolder: "./src/db/migrations" })

  const results = await db
    .select({
      data: pages.data,
    })
    .from(pages)

  client.close()

  console.log("Extracting tailwind classes")

  const regex = /"className":"([^"]*)"/gm

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

  console.log("Prebuild script complete")
})()
