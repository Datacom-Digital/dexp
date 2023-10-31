import { PageActions } from "./page-actions"
import { Prose } from "@/components/ui/prose"
import { getAllKeys } from "@/server/puck/actions"

export default async function Foo() {
  const paths = await getAllKeys()

  return (
    <Prose className="mx-auto">
      <h1>Pages</h1>

      <div className="grid w-fit grid-cols-[auto_auto_auto_auto] items-center gap-1">
        {paths.map((path) => {
          return <PageActions key={path} path={path} />
        })}
      </div>
    </Prose>
  )
}
