import { NextRequest, NextResponse } from "next/server"
import { z } from "zod"
import {
  episodeIds,
  generateEpisodeStrict,
} from "@/lib/forcem/generate-episode"

const schema = z.object({ id: z.enum(episodeIds), length: z.number() })

export async function POST(req: NextRequest) {
  try {
    const query = await req.json()

    const validatedQuery = schema.parse(query)

    const episode = generateEpisodeStrict(validatedQuery)

    return NextResponse.json(episode)
  } catch (error) {
    // log the error
    return NextResponse.json({ error }, { status: 500 })
  }
}
