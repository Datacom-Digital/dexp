import { CNProps, cn } from "@/lib/utils"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select"
import { useDeferredValue, useEffect, useState } from "react"
import { Episode, defaultQuery, episodes } from "@/lib/forcem/generate-episode"
import { generateEpisodeAction } from "./actions"

export const ForcemGenerate = ({
  onChange,
  className,
}: CNProps<{
  onChange: (episode: Promise<Episode>) => void
}>) => {
  const [query, setQuery] = useState(defaultQuery)

  const deferredQuery = useDeferredValue(query)
  const { id, length } = query

  useEffect(() => {
    onChange(generateEpisodeAction(deferredQuery))
  }, [deferredQuery, onChange])

  return (
    <div className={cn(className)}>
      <Select
        value={id}
        onValueChange={(value) =>
          setQuery({ id: value as Episode["id"], length })
        }
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {episodes.map(({ id, title }) => (
            <SelectItem key={id} value={id}>
              {title}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Label htmlFor="paragraphs">Paragraphs:</Label>
      <Input
        className="w-16"
        id="paragraphs"
        type="number"
        min="1"
        value={length}
        onChange={(event) =>
          setQuery({
            id,
            length: event.currentTarget.valueAsNumber,
          })
        }
      />
    </div>
  )
}
