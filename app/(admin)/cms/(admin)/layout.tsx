import { PropsWithChildren } from "react"
import Providers from "@/app/(admin)/cms/providers"
import { auth } from "@/server/auth/auth"
import Unauthorised from "@/app/(admin)/cms/(admin)/error"

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth()

  if (session?.user.role !== "admin") {
    return <Unauthorised />
  }

  return <Providers>{children}</Providers>
}
