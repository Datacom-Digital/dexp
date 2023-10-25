import { Prose } from "@/components/ui/prose"
import { PuckComponent, PuckFields } from "@/lib/puck/types"

export const Text: PuckComponent<{ text: string }> = ({
  text,
}: {
  text: string
}) => {
  return <Prose>{text}</Prose>
}

export const text: PuckFields<typeof Text> = {
  fields: {
    text: {
      type: "textarea",
    },
  },
  defaultProps: {
    text: "Forcem Ipsum",
  },
}
