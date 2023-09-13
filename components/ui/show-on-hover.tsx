"use client"

import { PropsWithChildren } from "react"
import { useMounted } from "@/lib/hooks"
import { cn } from "@/lib/utils"

export const ShowOnHover = ({ children }: PropsWithChildren) => {
  const transitionOnLoad = useMounted()

  return (
    <div
      className={cn(
        "transition-all duration-300 hover:opacity-100",
        transitionOnLoad && "opacity-0",
      )}
    >
      {children}
    </div>
  )
}
