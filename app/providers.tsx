"use client"

import { PropsWithChildren, createContext, useState } from "react"

export const ThemeContext = createContext({
  nav: {
    isHidden: false,
    hide: () => {},
    show: () => {},
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
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
