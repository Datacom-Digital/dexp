import { Text } from "./blocks/text"
import { Prose } from "@/lib/puck/blocks/prose"
import { Columns } from "@/lib/puck/blocks/columns"

export const resolvePuckPath = (puckPath: string[] = []) => {
  const path = `/${puckPath.join("/")}`
  return path === "/" ? "/puck" : path
}

// We avoid the name config as next gets confused
export const puckConfig = {
  components: {
    Text,
    Columns,
    Prose,
  },
}
