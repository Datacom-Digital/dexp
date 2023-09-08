import {
  Episode,
  episodes,
  generateEpisode,
} from "@/lib/forcem/generate-episode"
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

export const ForcemGenerate = ({
  episode: { id, content },
  setEpisode,
  className,
}: CNProps<{
  episode: Episode
  setEpisode: (episode: Episode) => void
}>) => {
  const { length } = content

  return (
    <div className={cn(className)}>
      <Select
        value={id}
        onValueChange={(value) =>
          setEpisode(generateEpisode(value as Episode["id"], length))
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
        onChange={(event) => {
          setEpisode(generateEpisode(id, event.currentTarget.valueAsNumber))
        }}
      />
    </div>
  )
}
