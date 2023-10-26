import "server-only"
import { sqliteTable, text } from "drizzle-orm/sqlite-core"

export const pages = sqliteTable("pages", {
  key: text("text").notNull().primaryKey(),
  data: text("data"),
})
