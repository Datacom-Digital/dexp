import { Episode } from "@/lib/forcem/generate-episode"
import cx from "classix"

export const ForcemEpisode = ({
  title,
  content,
  className,
}: Pick<Episode, "title" | "content"> & { className?: string }) => {
  return (
    <div className={cx(className)}>
      <h1>{title}</h1>
      {content.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </div>
  )
}
