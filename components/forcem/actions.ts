"use server"

import {
  GenerateEpisodeQuery,
  generateEpisode,
} from "@/lib/forcem/generate-episode"
import { wait } from "@/lib/utils"

export const generateEpisodeAction = async (query: GenerateEpisodeQuery) => {
  await wait(2000)
  return generateEpisode(query)
}
