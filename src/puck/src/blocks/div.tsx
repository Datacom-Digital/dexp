import { ComponentConfig } from "@datacom-digital/puck"
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
  render: ({ className, puck: { renderDropZone: DropZone } }) => {
    return (
      <div className={cn("min-h-3 min-w-3", className)}>
        <DropZone zone="0" />
      </div>
    )
  },
}
