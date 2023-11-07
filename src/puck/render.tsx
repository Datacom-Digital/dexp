import { Metadata } from "next"
import { notFound } from "next/navigation"

import { getAllPaths, getPageData } from "@/puck/src/actions"

import { ClientRender } from "@/puck/src/components/render"
import { resolvePuckPath } from "@/puck/src/utils"

export async function generateStaticParams() {
  return getAllPaths()
}

// TODO description
export async function generateMetadata({
  params: { puckPath },
}: {
  params: { framework: string; uuid: string; puckPath: string[] }
}): Promise<Metadata> {
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  return {
    title: data?.root.title || "",
  }
}

export async function RenderPage({
  params: { puckPath },
}: {
  params: { puckPath: string[] }
}) {
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  if (!data) {
    return notFound()
  }

  return <ClientRender data={data} />
}
