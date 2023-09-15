"use client"

import { useContext, useEffect } from "react"
import { ThemeContext } from "@/app/providers"

export const HideNav = () => {
  const {
    nav: { show, hide },
  } = useContext(ThemeContext)
  useEffect(() => {
    hide()
    return () => show()
  }, [hide, show])

  return null
}
