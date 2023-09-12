"use client"

import { useLoaded } from "/lib/hooks"
import { cn } from "/lib/utils"
import { PropsWithChildren } from "react"

export const ShowOnHover = ({ children }: PropsWithChildren) => {
  const transitionOnLoad = useLoaded()

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
