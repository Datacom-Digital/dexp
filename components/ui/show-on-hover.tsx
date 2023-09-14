"use client"

import { PropsWithChildren } from "react"
import { useMounted } from "@/lib/hooks"
import { cn } from "@/lib/utils"

export const ShowOnHover = ({ children }: PropsWithChildren) => {
  const mounted = useMounted()

  return (
    <span
      className={cn(
        "opacity-100 transition-all duration-300 hover:opacity-100 hover:delay-0",
        mounted && "opacity-0 delay-300",
      )}
    >
      {children}
    </span>
  )
}
