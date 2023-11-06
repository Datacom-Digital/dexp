"use client"

import { useEffect } from "react"

export function NotFoundThemeHack() {
  useEffect(() => {})
  /*useEffect(() => {
    const isDarkMode = () => {
      if (
        typeof localStorage !== "undefined" &&
        localStorage.theme === "dark"
      ) {
        return true
      }
      if (
        typeof localStorage !== "undefined" &&
        localStorage.theme === "light"
      ) {
        return false
      }
      return window?.matchMedia("(prefers-color-scheme: dark)").matches
    }

    if (isDarkMode()) {
      document.documentElement.classList.add("dark")
    }
  }, [])*/
  return null
}
