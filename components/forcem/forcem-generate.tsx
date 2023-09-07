import {
  Episode,
  episodes,
  generateEpisode,
} from "@/lib/forcem/generate-episode"
import { cn } from "@/lib/utils"

export const ForcemGenerate = ({
  episode: { id, content },
  setEpisode,
  className,
}: {
  episode: Episode
  setEpisode: (episode: Episode) => void
  className?: string
}) => {
  const { length } = content

  return (
    <div className={cn(className)}>
      <select
        value={id}
        onChange={(event) =>
          setEpisode(
            generateEpisode(event.currentTarget.value as Episode["id"], length),
          )
        }
      >
        {episodes.map(({ id, title }) => (
          <option key={id} value={id}>
            {title}
          </option>
        ))}
      </select>
      <label htmlFor="paragraphs">Paragraphs:</label>
      <input
        className="w-16"
        id="paragraphs"
        type="number"
        value={length}
        onChange={(event) => {
          setEpisode(generateEpisode(id, event.currentTarget.valueAsNumber))
        }}
      />
    </div>
  )
}
