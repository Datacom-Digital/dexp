import { ClipboardCopyIcon } from "@radix-ui/react-icons"
import { useState, ChangeEvent, Fragment } from "react"
import { setMode } from "@/components/theme/mode-toggle"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { defaultTheme } from "@/components/theme/default-theme"
import { ApplyTheme, copyToClipboard } from "@/components/theme/theme-editor"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export const ThemeEditorMenu = () => {
  const [theme, setTheme] = useState(defaultTheme)

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
