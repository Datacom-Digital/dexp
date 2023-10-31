import { Data } from "@measured/puck"
import { PageLayout } from "@/components/page-layout"
import { components } from "@/lib/puck/components"

// TODO: need this exported from puck
const rootDroppableId = "default-zone"

// TODO: used for getContent
function setupZone(data: Data, zoneKey: string): Required<Data> {
  if (zoneKey === rootDroppableId) {
    return data as Required<Data>
  }

  const newData = { ...data }

  newData.zones = data.zones || {}

  newData.zones[zoneKey] = newData.zones[zoneKey] || []

  return newData as Required<Data>
}

// TODO: need this exported from puck
function getContent(data: Data, areaId: string, zone: string) {
  if (zone === rootDroppableId) {
    return data?.content || []
  }

  const zoneCompound = `${areaId}:${zone}`
  return setupZone(data, zoneCompound).zones[zoneCompound]
}

async function RenderDropZone({
  data,
  areaId = "root",
  zone,
}: {
  data: Data
  areaId?: string
  zone: string
}) {
  const content = getContent(data, areaId, zone)

  return (
    <>
      {/* TODO: type correctly */}
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {content.map((item: any) => {
        const Component = components[item.type as keyof typeof components]

        if (Component) {
          return (
            <Component
              key={item.props.id}
              renderctx={{ data: data, areaId: item.props.id }}
              {...item.props}
            />
          )
        }

        return null
      })}
    </>
  )
}

export const resolvePuckPath = (puckPath: string[] = []) => {
  const path = `/${puckPath.join("/")}`
  return path === "/" ? "/puck" : path
}

export async function Render({ data }: { data: Data }) {
  return (
    <PageLayout {...data.root}>
      <RenderDropZone data={data} zone={rootDroppableId} />
    </PageLayout>
  )
}
