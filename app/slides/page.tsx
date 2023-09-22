import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/nav/hide-nav"
import { ForcemSlides } from "@/components/forcem/forcem-slide"

export default function Page() {
  return (
    <SlideContainer>
      <HideNav />
      <ForcemSlides length={3} />
    </SlideContainer>
  )
}
