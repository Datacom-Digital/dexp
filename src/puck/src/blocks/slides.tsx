import { ComponentConfig } from "@datacom-digital/puck"
import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/nav/hide-nav"
import { cn } from "@/lib/utils"
import { Slide as SlideComp } from "@/components/slideshow/slide"

export const SlideDeck: ComponentConfig = {
  render: ({ puck: { renderDropZone: DropZone } }) => (
    <SlideContainer>
      <HideNav />
      <DropZone zone="slides" />
    </SlideContainer>
  ),
}

export const Slide: ComponentConfig<{ className?: string }> = {
  fields: {
    className: {
      type: "text",
    },
  },
  defaultProps: {},
  render: ({ className, puck: { renderDropZone: DropZone } }) => (
    <SlideComp
      className={cn(
        "min-h-3 min-w-3 flex flex-col items-center pt-nav lg:pt-32",
        className,
      )}
    >
      <DropZone zone="slide-content" />
    </SlideComp>
  ),
}
