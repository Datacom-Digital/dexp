import { Suspense } from "react"
import { generateEpisodeAction } from "@/components/forcem/actions"

import { CNProps, cn } from "@/lib/utils"

const Slide = ({ children, className }: CNProps) => (
  <section
    className={cn(
      "grid h-screen w-full snap-start gap-2 overflow-y-scroll pt-8 lg:gap-6 lg:pt-16",
      className,
    )}
  >
    {children}
  </section>
)

const Prose = ({ children, className }: CNProps) => (
  <div
    className={cn(
      "prose prose-xl h-fit w-full px-2 dark:prose-invert lg:prose-2xl sm:px-6",
      className,
    )}
  >
    {children}
  </div>
)

const RandomProse = async () => {
  const episode = await generateEpisodeAction({ length: 20 })

  return (
    <>
      <h3>{episode.title}</h3>
      {episode.content.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </>
  )
}

export default function Home() {
  return (
    <main className="max-h-screen w-full snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
      <Slide className="content-start justify-items-center">
        <Prose>
          <h2>Any Old Type</h2>
          <p>Some words and stuff</p>
        </Prose>
        <Prose>
          <Suspense>
            <RandomProse />
          </Suspense>
        </Prose>
      </Slide>
      <Slide className="content-start justify-items-center">
        <Prose>
          <h2>Any is bad</h2>
          <p>Reasons why any is bad:</p>
          <ul>
            <li>Because I said so</li>
            <li>Because other people think so to</li>
          </ul>
        </Prose>
      </Slide>
    </main>
  )
}
