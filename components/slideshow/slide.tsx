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
        "h-screen w-full snap-start border-4 border-green-700 transition-all duration-0 ease-in supports-[height:100dvh]:h-[100dvh] supports-[height:100dvh]:opacity-0",
        className,
        isVisible && "duration-300 supports-[height:100dvh]:opacity-100",
      )}
    >
      {children}
    </section>
  )
}
