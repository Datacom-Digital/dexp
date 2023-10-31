import { text, Text } from "./blocks/text"

import { PuckConfig } from "./types"

// We avoid the name config as next gets confused
export const puckConfig: PuckConfig = {
  components: {
    Text: {
      ...text,
      render: Text,
    },
  },
}
