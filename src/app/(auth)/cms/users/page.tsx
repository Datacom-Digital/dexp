import { z } from "zod"
import { getAllUsers } from "./actions"

import UserForm, { UserSchema } from "./user-form"
import { Prose } from "@/components/ui/prose"
import { auth } from "@/server/auth/auth"
import Unauthorised from "@/app/error"
import { PuckMenu } from "@/app/(auth)/puck-menu"

export type User = z.infer<typeof UserSchema>

export default async function Users() {
  const session = await auth()

  if (session?.user.role !== "admin") {
    return <Unauthorised />
  }

  const users = await getAllUsers()

  return (
    <>
      <PuckMenu title="Users" />
      <Prose className="mx-auto">
        <UserForm users={users} />
      </Prose>
    </>
  )
}
