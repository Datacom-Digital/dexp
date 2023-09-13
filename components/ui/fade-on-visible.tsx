"use client"

import { useRef } from "react"
import { useIsVisible } from "@/lib/hooks"
import { CNProps, cn } from "@/lib/utils"

export const FadeOnVisible = ({
  children,
  className,
  fadeIn,
  fadeOut,
}: CNProps<{ fadeIn?: boolean; fadeOut?: boolean }>) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(ref)
  return (
    <span
      ref={ref}
      className={cn(
        "opacity-0 transition-none duration-300 ease-in",
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
