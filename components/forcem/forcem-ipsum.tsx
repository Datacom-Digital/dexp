"use client"

import { Episode } from "@/lib/forcem/generate-episode"
import { useState } from "react"
import { ForcemEpisode } from "./forcem-episode"
import { ForcemGenerate } from "./forcem-generate"
import { Nav } from "../layout/nav"

export const ForcemIpsum = ({
  initialEpisode,
}: {
  initialEpisode: Episode
}) => {
  const [episode, setEpisode] = useState(initialEpisode)
  const { title, content } = episode

  return (
    <>
      <div className="group h-10 w-screen pb-2">
        <Nav />
        <div className="container">
          <div className="float-right w-fit space-x-2">
            <ForcemGenerate episode={episode} setEpisode={setEpisode} />
          </div>
        </div>
      </div>
      <section className="flex w-full justify-center">
        <div className="container max-w-screen-md space-y-3">
          <ForcemEpisode title={title} content={content} />
        </div>
      </section>
    </>
  )
}
