import { PropsWithChildren } from "react"
import { redirect } from "next/navigation"
import Providers from "@/app/(admin)/cms/providers"
import { auth } from "@/server/auth/auth"

export default async function AdminLayout({ children }: PropsWithChildren) {
  const session = await auth()

  if (!session?.user) {
    return redirect("api/auth/signin")
  }

  return <Providers>{children}</Providers>
}
