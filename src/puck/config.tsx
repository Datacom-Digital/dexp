import { Config } from "@measured/puck"
import dynamic from "next/dynamic"
import { Text } from "@/puck/blocks/text"
import { Prose } from "@/puck/blocks/prose"
import { Columns } from "@/puck/blocks/columns"
import { PageLayout } from "@/components/page-layout"
import { Div } from "@/puck/blocks/div"
import { DynamicTailwind } from "@/puck/components/tailwind"

const DynamicWordCloud = dynamic(() =>
  import("@/components/word-cloud").then((mod) => mod.WordCloud),
)

export const resolvePuckPath = (puckPath: string[] = []) =>
  `/${puckPath.join("/")}`

export const renderConfig = {
  components: {
    Text,
    Columns,
    Prose,
    Div,
    Wordcloud: {
      defaultProps: {},
      render: () => <DynamicWordCloud />, //<WordCloud />,
    },
  },
} as Config

// We avoid the name config as next gets confused
export const clientConfig = {
  root: {
    render: ({ children }) => (
      <PageLayout>
        <DynamicTailwind /> {children}
      </PageLayout>
    ),
  },
  ...renderConfig,
} as Config
