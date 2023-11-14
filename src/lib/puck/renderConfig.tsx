import type { Config } from "@datacom-digital/puck"
import { Text } from "@/puck/src/blocks/text"
import { Prose } from "@/puck/src/blocks/prose"
import { WordCloud } from "@/components/word-cloud"
import { Slide, SlideDeck } from "@/puck/src/blocks/slides"
import { Zone } from "@/puck/src/blocks/zone"
import { Image } from "@/puck/src/blocks/image"

export const renderConfig = {
  components: {
    Prose,
    Text,
    Zone,
    Slide,
    SlideDeck,
    Wordcloud: {
      render: () => <WordCloud />,
    },
    Image,
  },
} as Config
