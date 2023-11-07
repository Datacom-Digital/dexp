import { getAllUsers } from "@/puck/src/actions"
import { PuckMenu } from "@/puck/src/components/puck-menu"
import { Users } from "@/puck/src/components/users"

export async function UsersPage() {
  const users = await getAllUsers()

  return (
    <>
      <PuckMenu title="Users" path={"/puck/users"} />
      <Users users={users} />
    </>
  )
}
