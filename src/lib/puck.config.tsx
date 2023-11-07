import { Config } from "@measured/puck"
import { Text } from "@/puck/src/blocks/text"
import { Prose } from "@/puck/src/blocks/prose"
import { Columns } from "@/puck/src/blocks/columns"
import { PageLayout } from "@/components/page-layout"
import { Zone } from "@/puck/src/blocks/zone"
import { DynamicTailwind } from "@/puck/src/components/tailwind"
import { WordCloud } from "@/components/word-cloud"
import { Slide, SlideDeck } from "@/puck/src/blocks/slides"

export const renderConfig = {
  components: {
    Text,
    Columns,
    Prose,
    Zone,
    SlideDeck,
    Slide,
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
