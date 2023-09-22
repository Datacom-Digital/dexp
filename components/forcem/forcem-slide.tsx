import { Suspense } from "react"
import { Slide } from "../slideshow/slide"
import { Spinner } from "../ui/spinner"
import { Prose } from "@/components/ui/prose"
import { generateEpisodeAction } from "@/lib/forcem/actions"
import { Episode } from "@/lib/forcem/generate-episode"
import { cn } from "@/lib/utils"

const SuspendedEpisode = async ({
  episode,
  className,
}: {
  episode: Promise<Episode>
  className?: string
}) => {
  const { title, content } = await episode
  return (
    <>
      <Slide className="flex flex-col items-center pt-nav lg:pt-32">
        <Prose className={cn("h-full w-full lg:prose-2xl", className)}>
          <h1>{title}</h1>
        </Prose>
      </Slide>

      {content.map(({ id, text }) => (
        <Slide key={id} className="flex flex-col items-center pt-nav lg:pt-32">
          <Prose className={cn("h-full w-full lg:prose-2xl", className)}>
            <p>{text}</p>
          </Prose>
        </Slide>
      ))}
    </>
  )
}

export const ForcemSlides = ({
  length,
  id,
  className,
}: {
  length: number
  id?: Episode["id"]
  className?: string
}) => {
  const episode = generateEpisodeAction({ length, id })
  return (
    <Suspense fallback={<Spinner />}>
      <SuspendedEpisode episode={episode} className={className} />
    </Suspense>
  )
}
