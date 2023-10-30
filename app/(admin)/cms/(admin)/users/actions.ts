"use server"

import { eq } from "drizzle-orm"
import { AddUserSchema, ChangeRoleSchema, DeleteUserSchema } from "./page"
import { drizzleClient } from "@/server/db/client"
import { users } from "@/server/db/schema"
import { adapter } from "@/server/auth/next-auth-adapter"

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
