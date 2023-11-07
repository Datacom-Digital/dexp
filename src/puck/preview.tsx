import { Metadata } from "next"
import { getPageData } from "@/puck/src/actions"
import { ClientPageProps } from "@/puck/types"
import { resolvePuckPath } from "@/puck/src/utils"
import { Preview } from "@/puck/src/components/preview"

export async function generateMetadata({
  params: { puckPath },
}: {
  params: { puckPath: string[] }
}): Promise<Metadata> {
  const path = resolvePuckPath(puckPath)

  return {
    title: "Previewing: " + path,
  }
}

export async function PreviewPage({ params: { puckPath } }: ClientPageProps) {
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  return <Preview path={path} data={data} />
}
