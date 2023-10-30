import { Route } from "next"
import Link from "next/link"
import { getAllPaths } from "@/server/puck/actions"

export default async function Foo() {
  const paths = await getAllPaths()

  return (
    <div className="grid grid-cols-[auto_auto_auto_minmax(0,1fr)] gap-x-3">
      {paths.map(({ puckPath }) => {
        const path = `/${puckPath.join("/")}` as Route
        const edit = `/cms/${puckPath.join("/")}` as Route
        return (
          <>
            <div key={path}>{path}</div>
            <Link href={path} target="_blank">
              view
            </Link>
            <Link href={edit} target="_blank">
              edit
            </Link>
            <div></div>
          </>
        )
      })}
    </div>
  )
}
