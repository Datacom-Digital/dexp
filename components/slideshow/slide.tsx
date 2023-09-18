"use client"

import { useRef } from "react"
import { useIsVisible } from "@/lib/hooks"
import { CNProps, cn } from "@/lib/utils"

export const Slide = ({ children, className }: CNProps) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(ref, { ratio: 1 })
  return (
    <section
      ref={ref}
      className={cn(
        "h-screen w-full snap-start opacity-0 transition-all duration-0 ease-in-out",
        className,
        isVisible && "opacity-100 duration-300",
      )}
    >
      {children}
    </section>
  )
}
