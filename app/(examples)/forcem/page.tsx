import { ForcemIpsum } from "@/components/forcem/forcem-ipsum"
import { generateEpisodeAsync } from "@/lib/forcem/actions"
import { defaultQuery } from "@/lib/forcem/generate-episode"

export const metadata = {
  title: "Any Old Type - forcem",
  description: "Descussing typescript types and any other unknowns",
}

export default async function Forecem() {
  return <ForcemIpsum initial={generateEpisodeAsync(defaultQuery)} />
}
