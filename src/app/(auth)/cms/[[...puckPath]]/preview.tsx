"use client"

import { Data, Render } from "@measured/puck"
import { notFound } from "next/navigation"
import { useLocalData } from "@/lib/puck/hooks"
import { puckConfig } from "@/lib/puck/config"

export default function Preview({ path, data }: { path: string; data?: Data }) {
  const localData = useLocalData(path)[0] || data

  if (!localData) {
    return notFound()
  }

  return <Render data={localData} config={puckConfig} />
}
