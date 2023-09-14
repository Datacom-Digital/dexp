import Link from "next/link"
import { ComponentProps } from "react"
import { ModeToggle } from "./mode-toggle"
import { CNProps, cn } from "@/lib/utils"

const NavLink = ({ className, ...rest }: ComponentProps<typeof Link>) => (
  <Link
    className={cn(
      "rounded bg-nav px-3 py-1 text-nav-foreground hover:bg-nav-accent",
      className,
    )}
    {...rest}
  />
)

export const Nav = ({ className }: CNProps) => {
  return (
    <div
      className={cn(
        "z-10 grid h-10 w-full grid-flow-col items-center justify-between bg-background",
        className,
      )}
    >
      <nav className="flex gap-1 pl-1">
        <NavLink href="/">Slides</NavLink>
        <NavLink href="/forcem">Episodes</NavLink>
      </nav>
      <ModeToggle />
    </div>
  )
}
