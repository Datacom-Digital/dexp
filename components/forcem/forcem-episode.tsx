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
      <ShowOnVisible fadeIn fadeOut margin={"-72px"} className="opacity-20">
        <h1>{title}</h1>
      </ShowOnVisible>
      {content.map(({ id, text }) => (
        <ShowOnVisible
          key={id}
          fadeIn
          fadeOut
          margin={"-72px"}
          className="opacity-20"
        >
          <p>{text}</p>
        </ShowOnVisible>
      ))}
    </article>
  )
}
