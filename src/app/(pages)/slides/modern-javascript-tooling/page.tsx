import Image from "next/image"
import Link from "next/link"
import { Fragment } from "react"
import { Slide } from "@/components/slideshow/slide"
import { SlideContainer } from "@/components/slideshow/slide-container"
import { HideNav } from "@/components/nav/hide-nav"
import { Prose } from "@/components/ui/prose"
import { technologies } from "@/lib/technologies"

const Technologies = ({ keys }: { keys: string[] }) => {
  return (
    <>
      <div className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-6 gap-y-3">
        {keys.map((key) => {
          const tech = technologies.find((t) => t.label === key)
          if (!tech) {
            return null
          }
          return (
            <Fragment key={key}>
              <div>
                <Link href={tech.href}>{tech?.label}</Link>
              </div>
              <div>{tech?.desc}</div>
            </Fragment>
          )
        })}
      </div>
    </>
  )
}

export default function Page() {
  return (
    <SlideContainer>
      <HideNav />

      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h2>Modern javascript tooling</h2>
          <p>
            A curated selection of libraries used in this project (November
            2023)
          </p>
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <Image
            className="mx-auto"
            src="/images/node-is-heavy.webp"
            alt="node is heavy"
            width="730"
            height="525"
          />
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav opacity-90 lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h3>Framework and hosting</h3>
          <Technologies
            keys={[
              "Next.js",
              "Vercel ",
              "Github",
              "Turso",
              "Resend",
              "Uploadthing",
            ]}
          />
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav opacity-90 lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h3>Core</h3>
          <Technologies keys={["TypeScript", "tailwindcss"]} />
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav opacity-90 lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h3>Code Quality</h3>
          <Technologies keys={["Prettier", "ESLint", "Jest", "Playwright"]} />
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav opacity-90 lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h3>Validation and database</h3>
          <Technologies keys={["Zod", "DOMPurify", "Drizzle"]} />
        </Prose>
      </Slide>
      <Slide className="flex flex-col items-center pt-nav opacity-90 lg:pt-32">
        <Prose className="h-full w-full lg:prose-2xl">
          <h3>Other Libraries</h3>
          <Technologies
            keys={[
              "Auth.js",
              "DatacomUI",
              "shadcn/ui",
              "Radix",
              "React Hook Form",
              "Puck",
            ]}
          />
        </Prose>
      </Slide>
    </SlideContainer>
  )
}
