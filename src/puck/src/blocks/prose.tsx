import { ComponentConfig } from "@datacom-digital/puck"
import { Prose as ProseUI } from "@/components/ui/prose"

export const Prose: ComponentConfig<{ className?: string }> = {
  fields: {
    className: {
      type: "text",
    },
  },
  render: ({ className, puck: { renderDropZone: DropZone } }) => {
    return (
      <ProseUI className={className}>
        <DropZone zone="prose" />
      </ProseUI>
    )
  },
}
