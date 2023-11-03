import Link from "next/link"
import { getRandomInt } from "@/lib/utils"
import { technologies } from "@/lib/technologies"

export const metadata = {
  title: "Any Old Type - forcem",
  description: "Descussing typescript types and any other unknowns",
}

const textSizes = ["text-lg", "text-xl", "text-2xl", "text-3xl"]

export default async function Page() {
  return (
    <div className="mx-auto grid w-full max-w-2xl">
      <h1 className="place-self-start pt-4 text-5xl">Datacom Digital</h1>
      <h2 className="place-self-end pb-20 text-5xl">Experience Platforms</h2>

      <ul className="mx-auto flex max-w-sm flex-wrap place-content-center place-items-center gap-x-3">
        {technologies
          .map((item) => ({ sort: Math.random(), ...item }))
          .sort((a, b) => a.sort - b.sort)
          .map(({ label, href }) => {
            const textSize = textSizes[getRandomInt(0, textSizes.length)]
            return (
              <li key={label} className={textSize}>
                <Link href={href}>{label}</Link>
              </li>
            )
          })}
      </ul>
    </div>
  )
}
