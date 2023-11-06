import Link from "next/link"
import { technologies } from "@/lib/technologies"
import { getRandomInt } from "@/lib/utils"

const textSizes = ["text-lg", "text-xl", "text-2xl", "text-3xl"]

export const WordCloud = function WordCloud() {
  return (
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
  )
}
