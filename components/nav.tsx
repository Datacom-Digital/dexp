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
