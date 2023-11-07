import { Config } from "@measured/puck"
import { Text } from "@/puck/src/blocks/text"
import { Prose } from "@/puck/src/blocks/prose"
import { Columns } from "@/puck/src/blocks/columns"
import { PageLayout } from "@/components/page-layout"
import { Div } from "@/puck/src/blocks/div"
import { DynamicTailwind } from "@/puck/src/components/tailwind"
import { WordCloud } from "@/components/word-cloud"

export const renderConfig = {
  components: {
    Text,
    Columns,
    Prose,
    Div,
    Wordcloud: {
      render: WordCloud,
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
