"use client"
import Link from "next/link"
import { useContext } from "react"
import { CNProps, cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { NavContext } from "@/app/providers"

export const Nav = ({ className }: CNProps) => {
  const { isVisible } = useContext(NavContext)

  return (
    <NavigationMenu
      className={cn(
        "opacity-100 transition-all duration-300 ease-in",
        !isVisible && "opacity-0 hover:opacity-100 hover:delay-0",
        className,
      )}
    >
      <NavigationMenuList>
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Slides
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/forcem" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Episodes
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
      <ModeToggle />
    </NavigationMenu>
  )
}

/*

// "rounded bg-nav px-3 py-1 text-nav-foreground hover:bg-nav-accent"

const NavLink = ({ className, ...rest }: ComponentProps<typeof Link>) => (
  <Link className={cn(buttonVariants(), className)} {...rest} />
)
export const Nav = ({ className }: CNProps) => {
  return (
    <div
      className={cn(
        "z-10 grid h-10 w-full grid-flow-col items-center justify-between bg-background p-1",
        className,
      )}
    >
      <nav className="flex gap-1">
        <NavLink href="/">Slides</NavLink>
        <NavLink href="/forcem">Episodes</NavLink>
      </nav>
      <ModeToggle />
    </div>
  )
}*/
