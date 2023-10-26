"use client"

import "@measured/puck/dist/index.css"
import "@/lib/puck/styles.css"

import { join } from "path"
import { Data, Puck, Button, Config } from "@measured/puck"

import { signOut } from "next-auth/react"
import { useLocalData } from "@/lib/puck/hooks"
import { publishPageData } from "@/server/puck/actions"
import { puckConfig } from "@/lib/puck/config"

export default function Client({ path, data }: { path: string; data?: Data }) {
  const [localData, setLocalData] = useLocalData(path)

  /* TODO types need fixing */
  return (
    <Puck
      config={puckConfig as Config}
      data={localData || (data as Data)}
      onChange={(data: Data) => {
        setLocalData(data)
      }}
      onPublish={(data: Data) => {
        publishPageData(path, data)
      }}
      plugins={[]}
      headerPath={path}
      renderHeaderActions={() => (
        <>
          <Button onClick={() => signOut()} variant="secondary">
            {`Sign Out`}
          </Button>
          <Button
            href={join("/cms", path, "?mode=preview")}
            newTab
            variant="secondary"
          >
            View page
          </Button>
        </>
      )}
    />
  )
}
