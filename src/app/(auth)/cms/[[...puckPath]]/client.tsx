"use client"

import "@measured/puck/dist/index.css"
import "@/lib/puck/styles.css"

import { join } from "path"
import { Data, Puck } from "@measured/puck"
import { signOut } from "next-auth/react"
import { useLocalData } from "@/lib/puck/hooks"
import { publishPageData } from "@/server/puck/actions"
import { puckConfig } from "@/lib/puck/config"
import { Button } from "@/components/ui/button"
import { PuckMenu } from "@/app/(auth)/puck-menu"

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
      renderHeader={({
        state,
        dispatch,
        history: { canForward, canRewind, forward, rewind },
      }) => {
        const { leftSideBarVisible } = state.ui

        return (
          <PuckMenu title={state.data.root?.title || path}>
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
          </PuckMenu>
        )
      }}
    />
  )
}
