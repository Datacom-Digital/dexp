import { Metadata } from "next"

import { getTitle } from "@/puck/utils"

import { PuckClient } from "@/puck/puck-client"
import { resolvePuckPath } from "@/lib/puck/utils"
import { clientConfig } from "@/lib/puck/clientConfig"

export async function generateMetadata({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] }
}): Promise<Metadata> {
  const route = puckPath[0] || ""
  const path = resolvePuckPath(puckPath.slice(1))

  return {
    title: getTitle(route, path),
  }
}

export default async function ClientPage({
  params: { puckPath = [] },
}: {
  params: { puckPath: string[] }
}) {
  const route = puckPath[0] || ""
  const path = resolvePuckPath(puckPath.slice(1))

  //return <PuckClient route={route} path={path} Editor={PuckEditor} />
  return <PuckClient route={route} path={path} config={clientConfig} />
}
