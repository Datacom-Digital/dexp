import type { Config } from "@datacom-digital/puck"
import { Text } from "@/puck/src/blocks/text"
import { Prose } from "@/puck/src/blocks/prose"
import { Columns } from "@/puck/src/blocks/columns"
import { Div } from "@/puck/src/blocks/div"
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
