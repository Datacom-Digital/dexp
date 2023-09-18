"use client"

import { PropsWithChildren, createContext, useState } from "react"

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
          setMode: (theme: "light" | "dark" | "system") => {
            if (theme === "system") {
              localStorage?.removeItem("theme")

              if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                document.documentElement.classList.add("dark")
              }
            }

            if (theme === "light") {
              localStorage?.setItem("theme", "light")
              document.documentElement.classList.remove("dark")
            }

            if (theme === "dark") {
              localStorage?.setItem("theme", "dark")
              document.documentElement.classList.add("dark")
            }
          },
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
