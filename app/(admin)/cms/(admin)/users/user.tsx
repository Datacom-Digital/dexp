"use client"

import { changeRole, deleteUser } from "./actions"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export const roles = ["user", "admin"] as const
export type Role = keyof typeof roles

export const User = async ({
  id,
  role,
  email,
}: {
  id: string
  role: string
  email: string
}) => {
  return (
    <>
      <div>{email}</div>
      <Select onValueChange={(value) => changeRole(id, value)}>
        <SelectTrigger>
          <SelectValue placeholder={role} />
        </SelectTrigger>
        <SelectContent>
          {roles.map((role) => (
            <SelectItem key={role} value={role}>
              {role}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={() => deleteUser(id)}>Delete</Button>
      <div></div>
    </>
  )
}
