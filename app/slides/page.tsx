import { ForcemContent } from "@/components/forcem/forcem-content"
import { Slide } from "@/components/slideshow/slide"
import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/ui/hide-nav"
import { Prose } from "@/components/ui/prose"

export default function Home() {
  return (
    <SlideContainer>
      <HideNav />

      <Slide>
        <Prose className="h-full w-full lg:prose-2xl lg:pt-32">
          <h2>Any Old Type</h2>
          <ForcemContent length={1} />
        </Prose>
      </Slide>

      <Slide>
        <Prose className="h-full w-full lg:prose-2xl lg:pt-32">
          <h2>Any is bad</h2>
          <h3>Reasons why any is bad</h3>
          <ul>
            <li>Because I said so</li>
            <li>Because other people think so to</li>
          </ul>
          <h3>Stuff</h3>
          <ForcemContent length={1} />
        </Prose>
      </Slide>

      <Slide>
        <Prose className="h-full w-full lg:prose-2xl lg:pt-32">
          <h2>Conclusion</h2>
          <h3>More</h3>
          <ul>
            <li>Because I said so</li>
            <li>Because other people think so to</li>
          </ul>
        </Prose>
      </Slide>
    </SlideContainer>
  )
}
