"use server"

import {
  GenerateEpisodeQuery,
  generateEpisode,
} from "@/lib/forcem/generate-episode"

export const generateEpisodeAction = async (query: GenerateEpisodeQuery) => {
  // Uncomment so simulate a slow database
  // await (await import("@/lib/utils")).wait(500)
  return generateEpisode(query)
}
