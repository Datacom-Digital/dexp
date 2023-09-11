"use server"

import {
  Episode,
  GenerateEpisodeProps,
  generateEpisode,
} from "@/lib/forcem/generate-episode"
import { wait } from "@/lib/utils"

export const generateEpisodeAsync = async (
  query: GenerateEpisodeProps,
): Promise<Episode> => {
  console.log("generating")

  await wait(1000)

  return generateEpisode(query)
}
