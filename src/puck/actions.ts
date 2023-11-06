"use server"

//import "server-only"

import { Data } from "@measured/puck"

import { cache } from "react"
import { eq } from "drizzle-orm"
import { Route } from "next"

import { drizzleClient as db, drizzleClient } from "@/server/db/client"
import { assets, pages, users } from "@/server/db/schema"
import {
  Asset,
  DeleteAssetSchema,
  ChangeRoleSchema,
  DeleteUserSchema,
  AddUserSchema,
} from "@/puck/types"
import { adapter } from "@/server/auth/next-auth-adapter"
import { ourUploadthing } from "@/puck/uploadthing/api"
import { wait } from "@/lib/utils"

/*
 * Page actions
 */

const sortPages = (a: { key: string }, b: { key: string }) => {
  if (a.key < b.key) {
    return -1
  }
  if (a.key > b.key) {
    return 1
  }
  return 0
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
export const publishPageData = async ({
  key,
  data,
}: {
  key: string
  data: Data
}): Promise<void> => {
  const dataJSON = JSON.stringify(data)
  await db
    .insert(pages)
    .values({ key, data: dataJSON })
    .onConflictDoUpdate({ target: pages.key, set: { data: dataJSON } })
}

// TODO: zod
export const deletePage = async (key: string) => {
  await db.delete(pages).where(eq(pages.key, key))
}

/*
 * Asset actions
 */

export const getAllAssets = async () => {
  const allAssets = await drizzleClient
    .select({
      key: assets.key,
      name: assets.name,
      url: assets.url,
      size: assets.size,
    })
    .from(assets)
    .execute()
  return allAssets || []
}

export const deleteAsset = async (data: Pick<Asset, "key">) => {
  const { key } = DeleteAssetSchema.parse(data)
  try {
    await ourUploadthing.deleteFiles(key)
    await drizzleClient.delete(assets).where(eq(assets.key, key))
    return key
  } catch (_error) {
    console.error("Delete asset failed")
    return null
  }
}

/*
 * User actions
 */

// TODO auth?

export const getAllUsers = async () => {
  const allUsers = await drizzleClient
    .select({ id: users.id, email: users.email, role: users.role })
    .from(users)
    .execute()
  return allUsers || []
}

export const changeRole = async (data: unknown) => {
  const { role, id } = ChangeRoleSchema.parse(data)
  try {
    await drizzleClient.update(users).set({ role }).where(eq(users.id, id))
    return { role, id }
  } catch (_error) {
    console.error("Change role failed")
    return null
  }
}

export const deleteUser = async (data: unknown) => {
  const { id } = DeleteUserSchema.parse(data)
  try {
    await adapter.deleteUser(id)
    return id
  } catch (_error) {
    console.error("Delete user failed")
    return null
  }
}

export const addUser = async (data: unknown) => {
  const { email, role } = AddUserSchema.parse(data)

  try {
    const { id } = await adapter.createUser({
      email,
      role,
      emailVerified: null,
    })
    return { id, email, role }
  } catch (_error) {
    console.error("Create user failed")
    return null
  }
}
