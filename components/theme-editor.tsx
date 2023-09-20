"use client"

import { useServerInsertedHTML } from "next/navigation"
import { ChangeEvent, Fragment, useContext, useState } from "react"
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
import { ThemeContext } from "@/app/providers"

const defaultTheme = [
  { id: "background", light: "60 9% 98%", dark: "24 10% 10%" },
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

const ApplyTheme = ({ theme }: { theme: typeof defaultTheme }) => (
  <StyledJsxRegistry>
    <style jsx global>
      {`
        :root {
          ${theme
            .map((t) => (t.light ? `  --${t.id}: ${t.light};` : ""))
            .join("\n")}
        }
        .dark {
          ${theme
            .map((t) => (t.dark ? `  --${t.id}: ${t.dark};` : ""))
            .join("\n")}
        }
      `}
    </style>
  </StyledJsxRegistry>
)
/* <style> requires a string literal to parse, repeat it here for copy to clipboard */
const copyToClipboard = (theme: typeof defaultTheme) =>
  navigator.clipboard.writeText(`
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer base {
    :root {
      --nav-height: 3rem;
      --radius: 0.5rem;
  
      /* light */
      ${theme
        .map((t) => (t.light ? `  --${t.id}: ${t.light};` : ""))
        .join("\n")}
    }
    .dark {
      ${theme.map((t) => (t.dark ? `  --${t.id}: ${t.dark};` : "")).join("\n")}
    }
  }

  @layer base {
    * {
      @apply border-border;
    }
  }
`)

export const ThemeEditorMenu = () => {
  const [theme, setTheme] = useState(defaultTheme)
  const {
    mode: { setMode },
  } = useContext(ThemeContext)

  const onInputChange =
    (id: string, mode: "light" | "dark") =>
    (event: ChangeEvent<HTMLInputElement>) =>
      setTheme(
        theme.map((t) => ({
          ...t,
          ...(t.id === id && {
            [mode]: event.currentTarget.value,
          }),
        })),
      )

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Theme</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <div className="grid grid-cols-[max-content,max-content,max-content] items-center gap-x-2 gap-y-0 p-2 text-sm">
          <ApplyTheme theme={theme} />
          <Button
            variant="ghost"
            className="col-start-2 w-full justify-self-center bg-accent text-xs dark:bg-inherit"
            onClick={() => setMode("light")}
          >
            light
          </Button>
          <Button
            variant="ghost"
            className="col-start-3 w-full justify-self-center bg-inherit dark:bg-accent"
            onClick={() => setMode("dark")}
          >
            dark
          </Button>

          {theme.map(({ id, light, dark }) => {
            return (
              <Fragment key={id}>
                <Label>{id}</Label>
                <Input
                  className="border-0 px-2 py-0"
                  id={`${id}-light`}
                  size={15}
                  value={light || ""}
                  onChange={onInputChange(id, "light")}
                />
                <Input
                  className="border-0 px-2 py-0"
                  id={`${id}-dark`}
                  value={dark || ""}
                  size={15}
                  onChange={onInputChange(id, "dark")}
                />
              </Fragment>
            )
          })}
          <Button
            variant={"secondary"}
            className="col-span-3 justify-self-center"
            onClick={() => copyToClipboard(theme)}
          >
            <ClipboardCopyIcon className="h-max w-max pr-2" />
            Copy theme to clipboard
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
