"use server"

import { eq } from "drizzle-orm"
import { drizzleClient } from "@/server/db/client"
import { users } from "@/server/db/schema"

export const getAllUsers = async () => {
  return (
    (await drizzleClient
      .select({ id: users.id, email: users.email, role: users.role })
      .from(users)
      .execute()) || []
  )
}

export const getRoles = () => {
  return users.role.columnType
}

export const changeRole = async (id: string, role: string) => {
  await drizzleClient.update(users).set({ role: role }).where(eq(users.id, id))
}

export const deleteUser = async (id: string) => {
  // no-op
  console.log("Delete user", id)
}

export const addUser = async (data: FormData) => {
  const email = data.get("email")
  const role = data.get("role")

  console.log("Add user", email, role)
}
