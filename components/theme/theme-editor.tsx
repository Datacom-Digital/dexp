"use client"

import { useServerInsertedHTML } from "next/navigation"
import { Fragment, useState } from "react"
import { createStyleRegistry, StyleRegistry } from "styled-jsx"
import { Label } from "@radix-ui/react-dropdown-menu"
import { ClipboardCopyIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const defaultTheme = [
  { id: "background", light: "100 100.1% 100.1%", dark: "24 10% 10%" },
  { id: "foreground", light: "24 10% 10%", dark: "60 9% 98%" },

  { id: "card", light: "60 9% 98%", dark: "24 10% 10%" },
  { id: "card-foreground", light: "24 10% 10%", dark: "60 9% 98%" },

  { id: "popover", light: "60 9% 98%", dark: "24 10% 10%" },
  { id: "popover-foreground", light: "24 10% 10%", dark: "60 9% 98%" },

  { id: "primary", light: "229 100% 18%" },
  { id: "primary-foreground", light: "60 9% 98%" },

  { id: "secondary", light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  { id: "secondary-foreground", light: "24 9.8% 10%", dark: "60 9% 98%" },

  { id: "muted", light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  { id: "muted-foreground", light: "25 5.3% 44.7%", dark: "24 5.4% 63.9%" },

  { id: "accent", light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  { id: "accent-foreground", light: "24 9.8% 10%", dark: "60 9% 98%" },

  { id: "destructive", light: "0 84.2% 60.2%", dark: "0 62.8% 30.6%" },
  { id: "destructive-foreground", light: "60 9% 98%" },

  { id: "border", light: "20 5.9% 90%", dark: "12 6.5% 15.1%" },
  { id: "input", light: "229 100% 18%" },
  { id: "ring", light: "221 47% 37%" },

  { id: "radius", light: "0.5rem" },
]

const StyledJsxRegistry = ({ children }: { children: React.ReactNode }) => {
  // Only create stylesheet once with lazy initial state
  // x-ref: https://reactjs.org/docs/hooks-reference.html#lazy-initial-state
  const [jsxStyleRegistry] = useState(() => createStyleRegistry())

  useServerInsertedHTML(() => {
    const styles = jsxStyleRegistry.styles()
    jsxStyleRegistry.flush()
    return <>{styles}</>
  })

  return <StyleRegistry registry={jsxStyleRegistry}>{children}</StyleRegistry>
}

const Theme = ({ theme }: { theme: typeof defaultTheme }) => (
  <StyledJsxRegistry>
    <style jsx global>
      {`
        :root {
          ${theme.map((t) => `--${t.id}: ${t.light};`)}
        }
        .dark {
          ${theme.map((t) => `--${t.id}: ${t.dark};`)}
        }
      `}
    </style>
  </StyledJsxRegistry>
)

export const ThemeEditor = () => {
  const [theme, setTheme] = useState(defaultTheme)

  return (
    <DropdownMenu>
      <Theme theme={theme} />
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="grid grid-cols-[max-content,max-content,max-content] items-center  text-sm">
          <div></div>
          <Label className="w-min justify-self-center">light</Label>
          <Label className="w-min justify-self-center">dark</Label>
          {theme.map(({ id, light, dark }) => {
            return (
              <Fragment key={id}>
                <Label>{id}</Label>
                <Input
                  className="border-0 px-2 py-0"
                  id={`${id}-light`}
                  size={15}
                  value={light}
                  onChange={(event) =>
                    setTheme(
                      theme.map((t) => ({
                        ...t,
                        ...(t.id === id && {
                          light: event.currentTarget.value,
                        }),
                      })),
                    )
                  }
                />
                <Input
                  className="border-0 px-2 py-0"
                  id={`${id}-dark`}
                  value={dark}
                  size={15}
                  onChange={(event) =>
                    setTheme(
                      theme.map((t) => ({
                        ...t,
                        ...(t.id === id && {
                          dark: event.currentTarget.value,
                        }),
                      })),
                    )
                  }
                />
              </Fragment>
            )
          })}
          <Button
            variant={"secondary"}
            className="col-span-3 justify-self-center"
          >
            <ClipboardCopyIcon className="h-max w-max pr-2" />
            Copy theme to clipboard
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
