import { z } from "zod"
import { getAllUsers } from "./actions"

import UserForm, { UserSchema } from "./user-form"
import { Prose } from "@/components/ui/prose"

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
