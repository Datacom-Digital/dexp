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
import { ThemeEditor } from "@/components/theme/theme-editor"

const menu: Array<{ href: Route | URL; label: string }> = [
  { href: "/", label: "D" },
  { href: "/slides", label: "Slides" },
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
        <ThemeEditor />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
