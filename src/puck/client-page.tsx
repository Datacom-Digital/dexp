import { Metadata } from "next"
import {
  getAllAssets,
  getAllKeys,
  getAllUsers,
  getPageData,
} from "@/puck/src/actions"
import { Editor } from "@/puck/src/components/editor"
import { Preview } from "@/puck/src/components/preview"
import { PuckMenu } from "@/puck/src/components/puck-menu"
import { resolvePuckPath } from "@/puck/src/utils"
import { ClientPageProps } from "@/puck/types"
import { AllPages } from "@/puck/src/components/all-pages"
import { Assets } from "@/puck/src/components/assets"
import { Users } from "@/puck/src/components/users"

function getTitle(path: string[] = []) {
  const route = path[0]
  const puckPath = resolvePuckPath(path.slice(1))

  switch (route) {
    case "edit":
      return "Editing: " + puckPath
    case "preview":
      return "Previewing: " + puckPath
    case "assets":
      return "Manage Assets"
    case "users":
      return "Manage Users"
    default:
      return "Dexp CMS"
  }
}

export async function generateMetadata({
  params: { puckPath },
}: {
  params: { puckPath: string[] }
}): Promise<Metadata> {
  return {
    title: getTitle(puckPath),
  }
}

export async function ClientPage({
  params: { puckPath = [] },
}: ClientPageProps) {
  const route = puckPath[0] || ""
  const path = resolvePuckPath(puckPath.slice(1))

  if (route === "edit") {
    return <Editor path={path} data={await getPageData(path)} />
  }

  if (route === "preview") {
    return <Preview path={path} data={await getPageData(path)} />
  }

  return (
    <>
      <PuckMenu title={getTitle(puckPath)} path={`/cms${route}`} />
      {route === "users" && <Users users={await getAllUsers()} />}
      {route === "assets" && <Assets assets={await getAllAssets()} />}
      {(route === "pages" || !route) && <AllPages keys={await getAllKeys()} />}
    </>
  )
}
