"use client"

import { ComponentConfig, DropZone } from "@datacom-digital/puck"
import React from "react"
import { cn } from "@/lib/utils"
import { Primitive, primitives } from "@/puck/types"

export const Zone: ComponentConfig<{
  className?: string
  primitive?: Primitive
}> = {
  fields: {
    className: {
      type: "text",
    },
    primitive: {
      type: "select",
      options: primitives.map((p) => ({ label: p, value: p })),
    },
  },
  defaultProps: {
    primitive: "div",
  },
  render: ({ className, primitive }) => {
    const Comp = primitive || "div"
    return (
      <Comp className={cn("min-h-3 min-w-3", className)}>
        <DropZone zone="0" />
      </Comp>
    )
  },
}
