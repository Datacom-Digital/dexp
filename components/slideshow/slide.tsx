"use client"

import { useRef } from "react"
import { ShowOnVisible } from "@/components/ui/show-on-visible"
import { useIsVisible } from "@/lib/hooks"
import { CNProps, cn } from "@/lib/utils"

export const Slide = ({ children, className }: CNProps) => {
  const ref = useRef<HTMLElement>(null)
  const isVisible = useIsVisible(ref, {})
  return (
    <ShowOnVisible fadeIn ratio={1}>
      <section
        className={cn(
          "grid h-screen w-full snap-start place-items-center transition-all ease-in-out lg:opacity-0",
          isVisible && "opacity-100 duration-300",
          className,
        )}
      >
        {children}
      </section>
    </ShowOnVisible>
  )
}
