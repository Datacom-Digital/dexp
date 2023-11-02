"use client"

import "@measured/puck/dist/index.css"
import "@/lib/puck/styles.css"

import { join } from "path"
import {
  Data,
  Puck,
  usePuckHistory,
  AppState,
  PuckAction,
} from "@measured/puck"
import { signOut } from "next-auth/react"
import { useLocalData } from "@/lib/puck/hooks"
import { publishPageData } from "@/server/puck/actions"
import { puckConfig } from "@/lib/puck/config"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme/mode-toggle"

function HistoryButtons({
  appState,
  dispatch,
}: {
  appState: AppState
  dispatch: (action: PuckAction) => void
}) {
  const { canForward, canRewind, rewind, forward } = usePuckHistory({
    appState,
    dispatch,
  })

  return (
    <>
      <Button
        variant="outline"
        size="sm"
        disabled={!canRewind}
        onClick={() => rewind()}
      >
        {"Undo"}
      </Button>
      <Button
        size="sm"
        variant="outline"
        disabled={!canForward}
        onClick={() => forward()}
      >
        {"Redo"}
      </Button>
    </>
  )
}

export default function Client({ path, data }: { path: string; data?: Data }) {
  const [localData, setLocalData] = useLocalData(path)

  /* TODO types need fixing */
  return (
    <Puck
      config={puckConfig}
      data={localData || data || ({} as Data)}
      onChange={(data: Data) => {
        setLocalData(data)
      }}
      onPublish={(data: Data) => {
        publishPageData(path, data)
      }}
      plugins={[]}
      headerPath={path}
      renderHeader={({ state, dispatch }) => {
        const { leftSideBarVisible } = state.ui
        const title = state.data.root.title || path

        return (
          <header className="flex h-12 w-full items-center bg-background p-1 text-foreground">
            <div className="flex flex-grow gap-1">
              <Button
                onClick={() =>
                  dispatch({
                    type: "setUi",
                    ui: {
                      leftSideBarVisible: !leftSideBarVisible,
                    },
                  })
                }
                variant="outline"
                size="sm"
              >
                {leftSideBarVisible ? "<" : ">"}
              </Button>
              <HistoryButtons appState={state} dispatch={dispatch} />
              <Button
                onClick={() =>
                  window
                    .open(join("/cms", path, "?mode=preview"), "_blank")
                    ?.focus()
                }
                variant="outline"
                size="sm"
              >
                Preview
              </Button>
              <Button onClick={() => signOut()} size="sm">
                Publish
              </Button>
            </div>
            <div className="flex flex-grow">{title}</div>
            <div className="flex flex-grow justify-end gap-1">
              <ModeToggle />
              <Button onClick={() => signOut()}>Sign Out</Button>
            </div>
          </header>
        )
      }}
    />
  )
}
