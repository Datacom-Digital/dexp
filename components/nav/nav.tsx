import Link from "next/link"
import { Route } from "next"
import { CNProps } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/mode-toggle"
import { ThemeEditorMenu } from "@/components/theme-editor"

const menu: Array<{ href: Route | URL; label: string }> = [
  { href: "/", label: "D" },
  { href: "/slides", label: "Slides" },
  { href: "/dashboard", label: "Cards" },
  { href: "/forcem", label: "Episodes" },
]

export const Nav = ({ className }: CNProps) => {
  return (
    <NavigationMenu className={className}>
      <NavigationMenuList>
        {menu.map(({ label, href }) => (
          <NavigationMenuItem key={label}>
            <Link href={href} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {label}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
      <NavigationMenuList>
        <ModeToggle />
        <ThemeEditorMenu />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
