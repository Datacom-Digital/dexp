"use client"

import { useServerInsertedHTML } from "next/navigation"
import { useState } from "react"
import { createStyleRegistry, StyleRegistry } from "styled-jsx"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const defaultTheme = {
  background: { light: "60, 9%, 98%", dark: "24, 10%, 10%" },
  foreground: { light: "24, 10%, 10%", dark: "60, 9%, 98%" },

  card: { light: "60, 9%, 98%", dark: "24, 10%, 10%" },
  "card-foreground": { light: "24, 10%, 10%", dark: "60, 9%, 98%" },

  popover: { light: "60, 9%, 98%", dark: "24, 10%, 10%" },
  "popover-foreground": { light: "24, 10%, 10%", dark: "60, 9%, 98%" },

  primary: { light: "229 100% 18%" },
  "primary-foreground": { light: "60, 9%, 98%" },

  secondary: { light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  "secondary-foreground": { light: "24 9.8% 10%", dark: "60, 9%, 98%" },

  muted: { light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  "muted-foreground": { light: "25 5.3% 44.7%", dark: "24 5.4% 63.9%" },

  accent: { light: "60 4.8% 95.9%", dark: "12 6.5% 15.1%" },
  "accent-foreground": { light: "24 9.8% 10%", dark: "60, 9%, 98%" },

  destructive: { light: "0 84.2% 60.2%", dark: "0 62.8% 30.6%" },
  "destructive-foreground": { light: "60, 9%, 98%" },

  border: { light: "20 5.9% 90%", dark: "12 6.5% 15.1%" },
  input: { light: "229 100% 18%" },
  ring: { light: "221 47% 37%" },

  radius: { light: "0.5rem" },
}

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
  const [theme, _setTheme] = useState(defaultTheme)

  return (
    <DropdownMenu>
      <Theme theme={theme} />
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {defaultTheme.map(({ id, light: _light, dark: _dark }) => {
          return (
            <DropdownMenuItem key={id}>
              <Label htmlFor="paragraphs">
                Paragraphs:
                <Input
                  className="w-16"
                  id="paragraphs"
                  type="number"
                  min="1"
                  value={length}
                  onChange={(event) =>
                    setQuery({
                      id,
                      length: event.currentTarget.valueAsNumber,
                    })
                  }
                />
              </Label>
            </DropdownMenuItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
