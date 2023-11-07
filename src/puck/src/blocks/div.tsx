"use client"

import { ComponentConfig, DropZone } from "@measured/puck"
import React from "react"
import { cn } from "@/lib/utils"

export const Div: ComponentConfig<{
  className?: string
}> = {
  fields: {
    className: {
      type: "text",
    },
  },
  defaultProps: {},
  render: ({ className }) => {
    return (
      <div className={cn("min-h-3 min-w-3", className)}>
        <DropZone zone="0" />
      </div>
    )
  },
}
