"use server"

import "server-only"

import { Data } from "@measured/puck"

import { cache } from "react"
import { eq } from "drizzle-orm"
import { Route } from "next"
import { drizzleClient as db } from "@/server/db/client"
import { pages } from "@/server/db/schema"

const sortPages = (a: { key: string }, b: { key: string }) => {
  if (a.key < b.key) {
    return -1
  }
  if (a.key > b.key) {
    return 1
  }
  return 0
}

// TODO: zod
export const getPageData = cache(async (url: string) => {
  const result = await db
    .select({
      data: pages.data,
    })
    .from(pages)
    .where(eq(pages.key, url))

  const data = result[0]?.data

  return data ? (JSON.parse(data) as Data) : undefined
})

// TODO: zod
export const publishPageData = async (
  key: string,
  data: Data,
): Promise<void> => {
  const dataJSON = JSON.stringify(data)
  await db
    .insert(pages)
    .values({ key, data: dataJSON })
    .onConflictDoUpdate({ target: pages.key, set: { data: dataJSON } })
}

export const getAllPaths = cache(async () => {
  const result = await db.select({ key: pages.key }).from(pages)
  const data = result.map((row) => ({
    puckPath: row["key"].split("/").slice(1),
  }))
  return data
})

export const getAllKeys = cache(async () => {
  const result = await db.select({ key: pages.key }).from(pages)
  const data = result.sort(sortPages).map(({ key }) => key as Route)
  return data
})

// TODO: zod
export const deletePage = async (key: string) => {
  await db.delete(pages).where(eq(pages.key, key))
}
