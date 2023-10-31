import { Suspense } from "react"
import { generateEpisodeAction } from "@/lib/forcem/actions"
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

export const ForcemContent = ({
  length,
  id,
}: {
  length: number
  id?: Episode["id"]
}) => {
  const episode = generateEpisodeAction({ length, id })
  return (
    <Suspense fallback={<Spinner />}>
      <SuspendedEpisode episode={episode} />
    </Suspense>
  )
}
