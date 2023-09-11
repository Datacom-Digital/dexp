import { Episode } from "@/lib/forcem/generate-episode"
import { cn } from "@/lib/utils"

export const ForcemEpisode = async ({
  episode,
  className,
}: {
  episode: Promise<Episode>
  className?: string
}) => {
  const { title, content } = await episode
  return (
    <article className={cn(className)}>
      <h1>{title}</h1>
      {content.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </article>
  )
}
