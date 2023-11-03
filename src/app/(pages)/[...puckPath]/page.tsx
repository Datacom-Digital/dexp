import { Metadata } from "next"
import { notFound } from "next/navigation"

import { ClientRender } from "./client"
import { getAllPaths, getPageData } from "@/server/puck/actions"
import { puckConfig, resolvePuckPath } from "@/lib/puck/config"

// uncomment to prevent generating new dynamic segments on demand
// export const dynamicParams = false

export async function generateStaticParams() {
  return getAllPaths()
}

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

export default async function Page({
  params: { puckPath },
}: {
  params: { puckPath: string[] }
}) {
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  if (!data) {
    return notFound()
  }

  return <ClientRender data={data} config={puckConfig} />
}
