"use client"

import { Episode } from "@/lib/forcem/generate-episode"
import { useState } from "react"
import { ForcemEpisode } from "./forcem-episode"
import { ForcemGenerate } from "./forcem-generate"
import { Nav } from "../nav"

export const ForcemIpsum = ({
  initialEpisode,
}: {
  initialEpisode: Episode
}) => {
  const [episode, setEpisode] = useState(initialEpisode)
  const { title, content } = episode

  return (
    <main>
      <div className="group h-10 w-screen pb-2">
        <Nav className="" />
        <div className="container">
          <ForcemGenerate
            className="float-right w-fit space-x-2"
            episode={episode}
            setEpisode={setEpisode}
          />
        </div>
      </div>
      <section className="flex w-full justify-center">
        <ForcemEpisode
          className="container max-w-screen-md space-y-3"
          title={title}
          content={content}
        />
      </section>
    </main>
  )
}
