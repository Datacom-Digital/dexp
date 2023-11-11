import type { Config, Data } from "@datacom-digital/puck"
import { Render } from "@datacom-digital/puck/dist/rsc"

export function PuckRender({ data, config }: { data: Data; config: Config }) {
  return <Render data={data} config={config} />
}
