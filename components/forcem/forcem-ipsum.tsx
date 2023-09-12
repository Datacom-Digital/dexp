"use client"

import { Suspense, useState } from "react"
import { ForcemEpisode } from "./forcem-episode"
import { ForcemGenerate } from "./forcem-generate"
import { Episode } from "/lib/forcem/generate-episode"

export const ForcemIpsum = ({ initial }: { initial: Promise<Episode> }) => {
  const [episode, setEpisode] = useState<Promise<Episode>>(initial)

  return (
    <main>
      <div className="flex w-full justify-center">
        <ForcemGenerate
          className="top-0 flex items-center space-x-2 bg-background md:fixed"
          onChange={setEpisode}
        />
      </div>

      <Suspense fallback="???">
        <ForcemEpisode
          episode={episode}
          className="prose mx-auto pt-10 dark:prose-invert"
        />
      </Suspense>
    </main>
  )
}
