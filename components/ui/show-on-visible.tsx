"use client"

import { useRef } from "react"
import { useIsVisible } from "@/lib/hooks"
import { CNProps, cn } from "@/lib/utils"

export const ShowOnVisible = ({
  children,
  className,
  fadeIn,
  fadeOut,
  margin,
  ratio,
}: CNProps<{
  fadeIn?: boolean
  fadeOut?: boolean
  margin?: string
  ratio?: number
}>) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(ref, { margin, ratio })
  return (
    <span
      ref={ref}
      className={cn(
        "opacity-0 transition-none duration-300 ease-in-out",
        fadeOut && "transition-all",
        isVisible && "opacity-100",
        isVisible && fadeIn && "transition-all",
        className,
      )}
    >
      {children}
    </span>
  )
}
