import { Episode } from "@/lib/forcem/generate-episode"
import { cn } from "@/lib/utils"

export const ForcemEpisode = ({
  title,
  content,
  className,
}: Pick<Episode, "title" | "content"> & { className?: string }) => {
  return (
    <article className={cn(className)}>
      <h1>{title}</h1>
      {content.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </article>
  )
}
