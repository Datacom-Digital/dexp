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
        "h-screen w-full snap-start border-4 border-green-700 transition-all duration-0 ease-in supports-[height:100svh]:h-[100svh] supports-[height:100lvh]:border-red-700 supports-[height:100svh]:opacity-30",
        className,
        isVisible && "duration-300 supports-[height:100svh]:opacity-100",
      )}
    >
      {children}
    </section>
  )
}
