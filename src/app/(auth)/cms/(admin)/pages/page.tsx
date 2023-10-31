import { PageActions } from "./page-actions"
import { getAllKeys } from "@/server/puck/actions"

export default async function Foo() {
  const paths = await getAllKeys()

  return (
    <div className="mx-auto w-fit p-12">
      <div className="grid grid-cols-[minmax(0,1fr)_auto_auto_auto] items-center gap-1">
        {paths.map((path) => {
          return <PageActions key={path} path={path} />
        })}
      </div>
    </div>
  )
}
