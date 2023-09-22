import { ForcemContent } from "@/components/forcem/forcem-content"
import { Slide } from "@/components/slideshow/slide"
import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/nav/hide-nav"
import { Prose } from "@/components/ui/prose"

export default function Page() {
  return (
    <SlideContainer>
      <HideNav />

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>Any Old Type</h2>
          <ForcemContent length={2} />
        </Prose>
      </Slide>

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>Any is bad</h2>
          <ul>
            <li>Using {"'any'"} stops typescript from validating your code</li>
          </ul>
          <h3>Alternatives</h3>
          <ul>
            <li>Take the time to type it correctly!</li>
            <li>Let typescript infer the type</li>
            <li>{"'unknown'"} if it is</li>
            <li>Validate with zod to generate the type</li>
          </ul>
        </Prose>
      </Slide>

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>
            Rules are made to <s>be broken</s>
          </h2>
          <h3>... make you think before you break them.</h3>

          <p>Often {"'any'"} is used to satisfy officious eslint rules</p>
          <ul>
            <li>Use Eslint</li>
            <li>Avoid airbnb</li>
            <li>
              use <code>{"// eslint-disable-next-lineignore"}</code>
            </li>
            <li>but not to dissable no-explicit-any</li>
            <li>unless you have to</li>
          </ul>
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>Less is more</h2>
          <ul>
            <li>Type at source</li>
            <li>
              Use typed properties - <code>{"Episode['id']"}</code>
            </li>
            <li>
              Use <code>{"typeof"}</code>
            </li>
            <li>
              Use <code>{"as const"}</code>
            </li>
            <li>Learn to use generics (or ask me!)</li>
          </ul>
        </Prose>
      </Slide>
    </SlideContainer>
  )
}
