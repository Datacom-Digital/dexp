"use client"

import { useContext, useEffect } from "react"
import { NavContext } from "@/app/providers"

export const HideNav = () => {
  const { show, hide } = useContext(NavContext)
  useEffect(() => {
    hide()
    return () => show()
  }, [hide, show])

  return null
}
