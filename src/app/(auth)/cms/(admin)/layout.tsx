import { PropsWithChildren } from "react"
import Unauthorised from "./error"
import { auth } from "@/server/auth/auth"

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth()

  if (session?.user.role !== "admin") {
    return <Unauthorised />
  }

  return <>{children}</>
}
