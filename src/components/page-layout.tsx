"use client"

import { PropsWithChildren, useContext } from "react"
import { Nav } from "@/components/nav/nav"
import { cn } from "@/lib/utils"
import { ThemeContext } from "@/app/providers"

export const PageLayout = ({ children }: PropsWithChildren) => {
  const {
    nav: { isHidden },
  } = useContext(ThemeContext)

  return (
    <div>
      <Nav
        className={cn(
          "h-12 opacity-100 transition-all duration-300 ease-in",
          isHidden &&
            "fixed z-10 delay-700 hover:opacity-100 hover:delay-0 [@media(any-hover:hover)]:opacity-0",
        )}
      />
      {children}
    </div>
  )
}
