import { romanize } from "./romanise"
import forcemIpsum from "forcem-ipsum"

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

const getTitle = (id: EpisodeId) => `Episode ${romanize(id.slice(8))}`

export const episodes = episodeIds.map((id) => {
  return {
    id,
    title: getTitle(id),
  }
})

export const generateEpisode = (id: EpisodeId, limit?: number) => {
  const title = getTitle(id)
  return {
    id,
    title,
    content: forcemIpsum(id, limit).map((text, id) => ({
      id: id.toString(),
      text,
    })),
  }
}
