"use client"

import { PropsWithChildren, createContext, useState } from "react"

export const NavContext = createContext({
  isVisible: true,
  hide: () => {},
  show: () => {},
})

export default function Providers({ children }: PropsWithChildren) {
  const [isVisible, setVisible] = useState(true)
  return (
    <NavContext.Provider
      value={{
        isVisible,
        hide: () => setVisible(false),
        show: () => setVisible(true),
      }}
    >
      {children}
    </NavContext.Provider>
  )
}
