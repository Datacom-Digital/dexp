"use client"

import { Suspense, useDeferredValue, useEffect, useState } from "react"
import { ForcemEpisode } from "./forcem-episode"
import { ForcemGenerate } from "./forcem-generate"
import { Episode, GenerateEpisodeQuery } from "@/lib/forcem/generate-episode"
import { Spinner } from "@/components/ui/spinner"
import { generateEpisodeAction } from "@/lib/forcem/actions"

export const ForcemIpsum = () => {
  const [episode, setEpisode] = useState<Promise<Episode>>()
  const [query, setQuery] = useState<GenerateEpisodeQuery>({
    id: "episode 1",
    length: 9,
  })
  const deferredQuery = useDeferredValue(query)

  useEffect(() => {
    setEpisode(generateEpisodeAction(deferredQuery))
  }, [deferredQuery])

  return (
    <main>
      <div className="flex h-10 w-full justify-center">
        <ForcemGenerate
          className="top-0 z-20 grid h-10 grid-flow-col items-center space-x-2 bg-background md:fixed"
          query={query}
          setQuery={setQuery}
        />
      </div>

      <Suspense fallback={<Spinner />}>
        <ForcemEpisode
          episode={episode}
          className="prose mx-auto  pt-6 dark:prose-invert"
        />
      </Suspense>
    </main>
  )
}
