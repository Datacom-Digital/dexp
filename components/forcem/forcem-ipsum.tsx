"use client"

import { Episode } from "@/lib/forcem/generate-episode"
import { useState } from "react"
import { ForcemEpisode } from "./forcem-episode"
import { ForcemGenerate } from "./forcem-generate"

export const ForcemIpsum = ({
  initialEpisode,
}: {
  initialEpisode: Episode
}) => {
  const [episode, setEpisode] = useState(initialEpisode)
  const { title, content } = episode

  return (
    <main>
      <div className="flex w-full justify-center">
        <ForcemGenerate
          className="bg-background top-0 flex items-center space-x-2 md:fixed"
          episode={episode}
          setEpisode={setEpisode}
        />
      </div>

      <ForcemEpisode
        className="prose dark:prose-invert mx-auto pt-10"
        title={title}
        content={content}
      />
    </main>
  )
}
