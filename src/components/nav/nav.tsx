import Link from "next/link"
import { Route } from "next"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { CNProps } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "@/components/theme/mode-toggle"
import { ThemeEditorMenu } from "@/components/theme/theme-editor-menu"

const menu: Array<{ href: Route | URL; label: string }> = [
  { href: "/", label: "D" },
  { href: "/slides", label: "Slides" },
  { href: "/dashboard", label: "Cards" },
  { href: "/forcem", label: "Forcem" },
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
        <NavigationMenuItem>
          <Link
            href="https://github.com/Datacom-Digital/dexp"
            legacyBehavior
            passHref
          >
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <GitHubLogoIcon />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <ModeToggle />
        <ThemeEditorMenu />
      </NavigationMenuList>
    </NavigationMenu>
  )
}
