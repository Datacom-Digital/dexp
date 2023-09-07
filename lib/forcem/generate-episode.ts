import { generateContent } from "./generate-content"
import { romanize } from "./romanise"

const episodeIds = [
  "episode 1",
  "episode 2",
  "episode 3",
  "episode 4",
  "episode 5",
  "episode 6",
  "episode 7",
  "episode 8",
  "episode 9",
] as const

type EpisodeId = (typeof episodeIds)[number]

export type Episode = {
  id: EpisodeId
  title: string
  content: Array<{ id: string; text: string }>
}

const getEpisodeNumber = (id: EpisodeId) => id.slice(8)

export const episodes = episodeIds.map((id) => {
  return {
    id,
    title: `Episode ${getEpisodeNumber(id)}`,
  }
})

export const generateEpisode = (id: EpisodeId, limit?: number) => {
  return {
    id,
    title: `Episode ${romanize(getEpisodeNumber(id))}`,
    content: generateContent(id, limit),
  }
}
