import { Metadata } from "next"
import { getPageData } from "@/puck/src/actions"
import { Editor } from "@/puck/src/components/editor"
import { ClientPageProps } from "@/puck/src/types"
import { resolvePuckPath } from "@/puck/src/utils"

export async function generateMetadata({
  params: { puckPath },
}: {
  params: { puckPath: string[] }
}): Promise<Metadata> {
  const path = resolvePuckPath(puckPath)

  return {
    title: "Editing: " + path,
  }
}

export async function EditPage({ params: { puckPath } }: ClientPageProps) {
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  return <Editor path={path} data={data} />
}
