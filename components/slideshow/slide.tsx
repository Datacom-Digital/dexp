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
        "h-screen w-full snap-start border-4 border-green-600 opacity-0 transition-all duration-0 ease-in odd:bg-stone-800 even:bg-stone-600",
        className,
        isVisible && "opacity-100 duration-300",
      )}
    >
      {children}
    </section>
  )
}
