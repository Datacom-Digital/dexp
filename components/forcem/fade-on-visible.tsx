"use client"

import { useRef } from "react"
import { CNProps, cn } from "@/lib/utils"
import { useIsVisible } from "@/lib/hooks"

export const FadeOnVisible = ({
  children,
}: CNProps<{
  margin?: string
  ratio?: number
}>) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(ref, { margin: "-72px" })
  return (
    <span
      ref={ref}
      className={cn(
        "opacity-20 transition-all duration-300 ease-in-out",
        isVisible && "opacity-100",
      )}
    >
      {children}
    </span>
  )
}
