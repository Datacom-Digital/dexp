import { Suspense } from "react"
import { generateEpisodeAction } from "@/components/forcem/actions"
import { Episode } from "@/lib/forcem/generate-episode"
import { Spinner } from "@/components/ui/spinner"

const SuspendedEpisode = async ({ episode }: { episode: Promise<Episode> }) => {
  return (
    <>
      {(await episode).content.map(({ id, text }) => (
        <p key={id}>{text}</p>
      ))}
    </>
  )
}

export const ForcemContent = ({ length }: { length: number }) => {
  const episode = generateEpisodeAction({ length })
  return (
    <Suspense fallback={<Spinner />}>
      <SuspendedEpisode episode={episode} />
    </Suspense>
  )
}
