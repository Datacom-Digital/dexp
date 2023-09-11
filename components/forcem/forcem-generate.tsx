import { Episode, defaultQuery, episodes } from "@/lib/forcem/generate-episode"
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
import { useState } from "react"
import { generateEpisodeAsync } from "@/lib/forcem/actions"

export const ForcemGenerate = ({
  onChange: parentOnChange,
  className,
}: CNProps<{
  onChange: (episode: Promise<Episode>) => void
}>) => {
  const [{ id, length }, setQuery] = useState(defaultQuery)

  const onChange = async (props: { id: Episode["id"]; length: number }) => {
    setQuery(props)
    parentOnChange(generateEpisodeAsync(props))
  }

  return (
    <div className={cn(className)}>
      <Select
        value={id}
        onValueChange={(value) =>
          onChange({ id: value as Episode["id"], length })
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
          onChange({
            id,
            length: event.currentTarget.valueAsNumber,
          })
        }
      />
    </div>
  )
}
