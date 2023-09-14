import { Input } from "../ui/input"
import { Label } from "../ui/label"

import {
  Episode,
  GenerateEpisodeQuery,
  episodes,
} from "@/lib/forcem/generate-episode"
import { CNProps, cn } from "@/lib/utils"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"

export const ForcemGenerate = ({
  query,
  setQuery,
  className,
}: CNProps<{
  query: GenerateEpisodeQuery
  setQuery: (query: GenerateEpisodeQuery) => void
}>) => {
  const { id, length } = query

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
      <Button variant={"outline"} onClick={() => setQuery({ id, length })}>
        Generate
      </Button>
    </div>
  )
}
