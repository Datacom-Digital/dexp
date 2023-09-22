import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import {
  episodeIds,
  generateEpisodeStrict,
} from "@/lib/forcem/generate-episode"

const schema = z.object({
  id: z.enum(episodeIds),
  length: z.number().min(1).max(99),
})

export async function GET(
  _req: NextRequest,
  { params: { id, length } }: { params: { id: string; length: string } },
) {
  try {
    const validatedQuery = schema.parse({
      id: id.replace(/_/g, " "),
      length: Number(length),
    })

    const episode = generateEpisodeStrict(validatedQuery)

    return NextResponse.json(episode)
  } catch (error) {
    // log the error
    return NextResponse.json({ error }, { status: 500 })
  }
}
