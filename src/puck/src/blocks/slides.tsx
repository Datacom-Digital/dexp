import { ComponentConfig, DropZone } from "@measured/puck"
import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/nav/hide-nav"
import { cn } from "@/lib/utils"
import { Slide as SlideComp } from "@/components/slideshow/slide"

export const SlideDeck: ComponentConfig = {
  render: () => (
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
  render: ({ className }) => (
    <SlideComp
      className={cn("flex flex-col items-center pt-nav lg:pt-32", className)}
    >
      <DropZone zone="slide-content" />
    </SlideComp>
  ),
}
