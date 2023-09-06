import { ForcemIpsum } from "@/components/forcem/forcem-ipsum"
import { generateEpisode } from "@/lib/forcem/generate-episode"

export const metadata = {
  title: "Any Old Type - forcem",
  description: "Descussing typescript types and any other unknowns",
}

export default function Forecem() {
  const episode = generateEpisode("episode 1")

  return <ForcemIpsum initialEpisode={episode} />
}
