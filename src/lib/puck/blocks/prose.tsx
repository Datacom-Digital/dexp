"use client"

import { ComponentConfig, DropZone } from "@measured/puck"
import { Prose as ProseUI } from "@/components/ui/prose"

export const Prose: ComponentConfig<{ className?: string }> = {
  fields: {
    className: {
      type: "text",
    },
  },
  render: ({ className }) => {
    return (
      <div className={className}>
        <ProseUI>
          <DropZone zone="prose" />
        </ProseUI>
      </div>
    )
  },
}
