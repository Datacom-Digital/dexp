import { Prose } from "@/components/ui/prose"
import { getAllAssets } from "@/puck/src/actions"
import { Assets } from "@/puck/src/components/assets"
import { PuckMenu } from "@/puck/src/components/puck-menu"

export async function AssetsPage() {
  const assets = await getAllAssets()

  return (
    <>
      <PuckMenu title="Assets" path="/cms/assets" />
      <Prose className="mx-auto">
        <Assets assets={assets} />
      </Prose>
    </>
  )
}
