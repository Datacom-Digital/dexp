import { Metadata } from "next"
import Client from "./client"
import Preview from "./preview"
import { getPageData } from "@/server/puck/actions"
import { resolvePuckPath } from "@/lib/puck/render"

export async function generateMetadata({
  params: { puckPath },
  searchParams,
}: {
  params: { puckPath: string[] }
  searchParams: { mode?: "preview" }
}): Promise<Metadata> {
  const path = resolvePuckPath(puckPath)

  if (searchParams?.mode === "preview") {
    return {
      title: "Preview: " + path,
    }
  }

  return {
    title: "Editing: " + path,
  }
}

export default async function Page({
  params: { puckPath },
  searchParams,
}: {
  params: { framework: string; uuid: string; puckPath: string[] }
  searchParams: { mode?: "preview" }
}) {
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  if (searchParams?.mode === "preview") {
    return <Preview path={path} data={data} />
  }

  return <Client path={path} data={data} />
}
