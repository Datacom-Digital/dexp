"use client"

import { Data, Render } from "@measured/puck"
import { renderConfig } from "@/lib/puck.config"

export function ClientRender({ data }: { data: Data }) {
  return <Render data={data} config={renderConfig} />
}
