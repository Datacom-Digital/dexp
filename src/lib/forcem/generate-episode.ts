import { generateContent } from "./generate-content"
import { romanize } from "./romanise"
import { getRandomInt } from "@/lib/utils"

export const episodeIds = [
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

export type Episode = {
  id: (typeof episodeIds)[number]
  title: string
  content: Array<{ id: string; text: string }>
}

const getEpisodeNumber = (id: Episode["id"]) => id.slice(8)
const randomId = () =>
  episodeIds[getRandomInt(0, episodeIds.length)] as Episode["id"]
const randomLength = () => getRandomInt(1, 6)

export const episodes = episodeIds.map((id) => {
  return {
    id,
    title: `Episode ${getEpisodeNumber(id)}`,
  }
})

export type GenerateEpisodeQuery = {
  id?: Episode["id"]
  length?: number
}

export const generateEpisode = ({
  id = randomId(),
  length = randomLength(),
}: GenerateEpisodeQuery): Episode => {
  return {
    id,
    title: `Episode ${romanize(getEpisodeNumber(id))}`,
    content: generateContent(id, length),
  }
}

export const generateEpisodeStrict = ({
  id,
  length = randomLength(),
}: GenerateEpisodeQuery): Episode => {
  if (!id) {
    throw Error("No id supplied")
  }
  return {
    id,
    title: `Episode ${romanize(getEpisodeNumber(id))}`,
    content: generateContent(id, length),
  }
}
