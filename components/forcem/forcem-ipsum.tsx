"use client"

import { Suspense, useDeferredValue, useEffect, useState } from "react"
import { ForcemEpisode } from "./forcem-episode"
import { ForcemGenerate } from "./forcem-generate"
import {
  Episode,
  GenerateEpisodeQuery,
  defaultQuery,
} from "@/lib/forcem/generate-episode"
import { Spinner } from "@/components/ui/spinner"
import { generateEpisodeAction } from "@/lib/forcem/actions"
import { FadeOnVisible } from "@/components/ui/fade-on-visible"

export const ForcemIpsum = ({ initial }: { initial: Promise<Episode> }) => {
  const [episode, setEpisode] = useState<Promise<Episode>>(initial)
  const [query, setQuery] = useState<GenerateEpisodeQuery>(defaultQuery)
  const deferredQuery = useDeferredValue(query)

  useEffect(() => {
    setEpisode(generateEpisodeAction(deferredQuery))
  }, [deferredQuery])

  return (
    <main>
      <div className="flex w-full justify-center">
        <ForcemGenerate
          className="top-0 flex items-center space-x-2 bg-background md:fixed"
          query={query}
          setQuery={setQuery}
        />
      </div>

      <Suspense fallback={<Spinner />}>
        <FadeOnVisible fadeIn>
          <ForcemEpisode
            episode={episode}
            className="prose mx-auto pt-10 dark:prose-invert"
          />
        </FadeOnVisible>
      </Suspense>
    </main>
  )
}
