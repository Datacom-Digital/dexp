import { FadeOnVisible } from "@/components/forcem/fade-on-visible"
import { Prose } from "@/components/ui/prose"
import { Episode } from "@/lib/forcem/generate-episode"
import { cn } from "@/lib/utils"

export const ForcemEpisode = async ({
  episode,
  className,
}: {
  episode?: Promise<Episode>
  className?: string
}) => {
  if (!episode) {
    return
  }
  const { title, content } = await episode
  return (
    <Prose className={cn(className)}>
      <FadeOnVisible>
        <h1>{title}</h1>
      </FadeOnVisible>
      {content.map(({ id, text }) => (
        <FadeOnVisible key={id}>
          <p>{text}</p>
        </FadeOnVisible>
      ))}
    </Prose>
  )
}
