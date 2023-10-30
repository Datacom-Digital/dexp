import { addUser, changeRole, getAllUsers } from "./actions"
import { User, roles } from "./user"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Prose } from "@/components/ui/prose"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default async function Users() {
  const users = await getAllUsers()

  return (
    <Prose className="mx-auto">
      <h1>Users</h1>
      <form action={addUser}>
        <div className="grid grid-cols-[auto_auto_auto_minmax(0,1fr)] items-baseline gap-1">
          {users.map((user) => (
            <User key={user.id} {...user} />
          ))}

          <Input type="email" name="email" />
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="user" />
            </SelectTrigger>
            <SelectContent>
              {roles.map((role) => (
                <SelectItem key={role} value={role}>
                  {role}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Button type="submit">Add</Button>
        </div>
      </form>
    </Prose>
  )
}
