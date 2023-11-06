import { Metadata } from "next"

import { redirect } from "next/navigation"
import { Unauthorised } from "@/puck/components/unauthorised"
import {
  getAllAssets,
  getAllKeys,
  getAllUsers,
  getPageData,
} from "@/puck/actions"
import { Prose } from "@/components/ui/prose"
import { PuckMenu } from "@/puck/components/puck-menu"
import { Users } from "@/puck/components/users"
import Preview from "@/puck/components/preview"
import { resolvePuckPath } from "@/puck/config"
import { AllPages } from "@/puck/components/all-pages"
import { Editor } from "@/puck/components/editor"
import { Assets } from "@/puck/components/assets"
import { auth } from "@/server/auth/auth"
import { DynamicTailwind } from "@/puck/components/tailwind"
import { PageLayout } from ""

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

export type ClientPageProps = {
  params: { framework: string; uuid: string; puckPath: string[] }
  searchParams: { mode?: "preview" | "edit" }
}

export async function Client({
  params: { puckPath },
  searchParams, //auth,
}: ClientPageProps) {
  const role = (await auth())?.user.role

  if (!role) {
    return redirect("/api/auth/signin")
  }
  const path = resolvePuckPath(puckPath)

  const data = await getPageData(path)

  if (searchParams?.mode === "preview") {
    return <Preview path={path} data={data} />
  }

  if (searchParams?.mode === "edit") {
    return <Editor path={path} data={data} />
  }

  if (searchParams?.mode === "users") {
    if (role !== "admin") {
      return <Unauthorised />
    }

    const users = await getAllUsers()

    return (
      <>
        <PuckMenu title="Users" path={path} />
        <Prose className="mx-auto">
          <Users users={users} />
        </Prose>
      </>
    )
  }

  if (searchParams?.mode === "assets") {
    if (role !== "admin") {
      return <Unauthorised />
    }

    const assets = await getAllAssets()

    return (
      <>
        <PuckMenu title="Assets" path={path} />
        <Prose className="mx-auto">
          <Assets assets={assets} />
        </Prose>
      </>
    )
  }

  const paths = await getAllKeys()

  return <AllPages paths={paths} />
}
