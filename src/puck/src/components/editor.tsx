"use client"

import "@measured/puck/dist/index.css"

import { join } from "path"
import { Data, Puck } from "@measured/puck"
import { useTransition } from "react"
import { Button } from "@/components/ui/button"
import { PuckMenu } from "@/puck/src/components/puck-menu"
//import { publishPageData } from "@/puck/actions"
import { useLocalData } from "@/puck/src/hooks"
import { publishPageData } from "@/puck/src/actions"
import { clientConfig } from "@/lib/puck"

export function Editor({ path, data }: { path: string; data?: Data }) {
  const [localData, setLocalData] = useLocalData(path)
  const [transitioning, startTransition] = useTransition()

  /* TODO types need fixing */
  return (
    <Puck
      config={clientConfig}
      data={
        localData ||
        data || { content: [], root: { title: "", props: {} }, zones: {} }
      }
      onChange={(data: Data) => {
        setLocalData(data)
      }}
      onPublish={() => {}}
      plugins={[]}
      headerPath={path}
      renderHeader={({
        state,
        dispatch,
        history: { canForward, canRewind, forward, rewind },
      }) => {
        const { leftSideBarVisible } = state.ui

        return (
          <PuckMenu title={state.data.root?.title} path={path}>
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
            <Button
              disabled={transitioning}
              onClick={() => {
                localData &&
                  startTransition(
                    async () =>
                      await publishPageData({ key: path, data: state.data }),
                  )
                // TODO notify? dissable button?
              }}
              size="sm"
            >
              Publish
            </Button>
          </PuckMenu>
        )
      }}
    />
  )
}
