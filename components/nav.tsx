import Link from "next/link"
import { CNProps, cn } from "@/lib/utils"
import { ComponentProps } from "react"
import { ModeToggle } from "./mode-toggle"

const NavLink = ({ className, ...rest }: ComponentProps<typeof Link>) => (
  <Link
    className={cn(
      "text-nav-foreground bg-nav hover:bg-nav-accent px-3 py-1",
      className,
    )}
    {...rest}
  />
)

export const Nav = ({ className }: CNProps) => {
  return (
    <div className={cn("flex w-full justify-between", className)}>
      <nav>
        <NavLink href="/">Slides</NavLink>
        <NavLink href="/forcem">Episodes</NavLink>
      </nav>
      <ModeToggle />
    </div>
  )
}
