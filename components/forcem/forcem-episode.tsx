import { Episode } from "@/lib/forcem/generate-episode"

export const ForcemEpisode = ({
  title,
  content,
}: Pick<Episode, "title" | "content">) => {
  return (
    <>
      <h1>{title}</h1>
      {content.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </>
  )
}
