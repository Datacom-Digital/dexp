"use client"

import { createContext, PropsWithChildren, useState } from "react"
import { setMode } from "@/components/theme/mode-toggle"

export const ThemeContext = createContext({
  nav: {
    isHidden: false,
    hide: () => {},
    show: () => {},
  },
  mode: {
    setMode: (_theme: "light" | "dark" | "system") => {},
  },
})

export default function Providers({ children }: PropsWithChildren) {
  const [isHidden, setHidden] = useState(false)

  return (
    <ThemeContext.Provider
      value={{
        nav: {
          isHidden: isHidden,
          hide: () => setHidden(true),
          show: () => setHidden(false),
        },
        mode: {
          setMode,
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
