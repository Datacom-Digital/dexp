import {
  Episode,
  episodes,
  generateEpisode,
} from "@/lib/forcem/generate-episode"
import { useState } from "react"
import cx from "classix"

export const ForcemGenerate = ({
  episode: { id, content },
  setEpisode,
  className,
}: {
  episode: Episode
  setEpisode: (episode: Episode) => void
  className?: string
}) => {
  const [episodeName, setEpisodeName] = useState(id)
  const [length, setLength] = useState(content.length)

  return (
    <div className={cx(className)}>
      <select
        value={episodeName}
        onChange={(event) =>
          setEpisodeName(event.currentTarget.value as Episode["id"])
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
        onChange={(event) => setLength(event.currentTarget.valueAsNumber)}
      />

      <button onClick={() => setEpisode(generateEpisode(episodeName, length))}>
        Generate
      </button>
    </div>
  )
}
