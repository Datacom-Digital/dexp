import { ForcemIpsum } from "@/components/forcem/forcem-ipsum"
import { ThemeEditor } from "@/components/theme/theme-editor"

export const metadata = {
  title: "Any Old Type - forcem",
  description: "Descussing typescript types and any other unknowns",
}

export default async function Forecem() {
  return (
    <>
      <ThemeEditor />
      <ForcemIpsum />
    </>
  )
}
