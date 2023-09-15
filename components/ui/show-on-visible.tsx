"use client"

import { RefObject, useEffect, useRef, useState } from "react"
import { CNProps, cn } from "@/lib/utils"

function useIsVisible(
  ref: RefObject<HTMLElement>,
  { margin: rootMargin, ratio = 0 }: { margin?: string; ratio?: number },
) {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
      },
      { threshold: [ratio], rootMargin },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref, rootMargin, ratio])

  return isVisible
}

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
        className,
        fadeOut && "transition-all",
        isVisible && "opacity-100",
        isVisible && fadeIn && "transition-all",
      )}
    >
      {children}
    </span>
  )
}
