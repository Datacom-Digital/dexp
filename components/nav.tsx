import Link from "next/link"
import { ComponentProps } from "react"
import { ModeToggle } from "./mode-toggle"
import { CNProps, cn } from "@/lib/utils"

const NavLink = ({ className, ...rest }: ComponentProps<typeof Link>) => (
  <Link
    className={cn(
      "bg-nav px-3 py-1 text-nav-foreground hover:bg-nav-accent",
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
