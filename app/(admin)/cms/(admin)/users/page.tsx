import { z } from "zod"
import { getAllUsers } from "./actions"

import UserForm from "./user-form"
import { Prose } from "@/components/ui/prose"

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.enum(["user", "admin"]),
})

export const AddUserSchema = UserSchema.pick({ email: true, role: true })
export const ChangeRoleSchema = UserSchema.pick({ id: true, role: true })
export const DeleteUserSchema = UserSchema.pick({ id: true })

export const roles = ["user", "admin"] as const
export type User = z.infer<typeof UserSchema>

export default async function Users() {
  const users = await getAllUsers()

  return (
    <Prose className="mx-auto">
      <h1>Users</h1>
      <UserForm users={users} />
    </Prose>
  )
}
