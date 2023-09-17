// Shared hooks

import { RefObject, useState, useEffect } from "react"

export function useIsVisible(
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
