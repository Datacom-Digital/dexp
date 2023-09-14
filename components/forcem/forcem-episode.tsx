import { ShowOnVisible } from "@/components/ui/show-on-visible"
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
    <article className={cn(className)}>
      <h1>{title}</h1>
      {content.map(({ id, text }) => (
        <ShowOnVisible key={id} fadeIn fadeOut margin={"-72px"}>
          <p>{text}</p>
        </ShowOnVisible>
      ))}
    </article>
  )
}
