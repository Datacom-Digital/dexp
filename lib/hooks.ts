import { useState, useEffect, RefObject } from "react"

export const useMounted = () => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])
  return mounted
}

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

/*
export function useIsVisible(ref: RefObject<HTMLElement>, rootMargin?: "64px", ratio: number = 1) {
  const [isVisible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.intersectionRatio >= ratio)
      },
      { threshold: [ratio], rootMargin: "64px" },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }
    return () => {
      observer.disconnect()
    }
  }, [ref, ratio])

  return isVisible
}
*/
