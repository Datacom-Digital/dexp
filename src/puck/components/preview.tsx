"use client"

import { Data, Render } from "@measured/puck"
import { notFound } from "next/navigation"
import { useLocalData } from "@/puck/hooks"
import { clientConfig } from "@/puck/config"

export default function Preview({ path, data }: { path: string; data?: Data }) {
  const localData = useLocalData(path)[0] || data

  if (!localData) {
    return notFound()
  }

  return <Render data={localData} config={clientConfig} />
}
