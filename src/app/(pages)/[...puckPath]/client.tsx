"use client"

import { Render } from "@measured/puck"
import { ComponentProps } from "react"

export function ClientRender(props: ComponentProps<typeof Render>) {
  return <Render {...props} />
}
