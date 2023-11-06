import { PropsWithChildren } from "react"

import { PuckProviders } from "@/puck/providers"

export async function PuckLayout({ children }: PropsWithChildren) {
  return <PuckProviders>{children}</PuckProviders>
}
