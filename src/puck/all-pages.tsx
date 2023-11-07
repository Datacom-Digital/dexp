import { getAllKeys } from "@/puck/src/actions"
import { AllPages } from "@/puck/src/components/all-pages"
import { PuckMenu } from "@/puck/src/components/puck-menu"

export async function AllPagesPage() {
  const paths = await getAllKeys()

  return (
    <>
      <PuckMenu title="All Pages" />
      <AllPages paths={paths} />
    </>
  )
}
