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
      <ShowOnVisible fadeIn fadeOut margin={"-40px 0px -40px"}>
        <h1>{title}</h1>
      </ShowOnVisible>
      {content.map(({ id, text }) => (
        <ShowOnVisible key={id} fadeIn fadeOut margin={"-40px 0px -40px"}>
          <p>{text}</p>
        </ShowOnVisible>
      ))}
    </article>
  )
}
