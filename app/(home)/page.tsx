import { Route } from "next"
import Link from "next/link"
import { getRandomInt } from "@/lib/utils"
import { Prose } from "@/components/ui/prose"

export const metadata = {
  title: "Any Old Type - forcem",
  description: "Descussing typescript types and any other unknowns",
}

const technologies: Array<{ label: string; href: Route }> = [
  { label: "Next.js", href: "https://nextjs.org/" },
  { label: "TypeScript", href: "https://www.typescriptlang.org/" },
  { label: "tailwindcss", href: "https://tailwindcss.com/" },
  { label: "ESLint", href: "https://eslint.org/" },
  { label: "Prettier", href: "https://prettier.io/" },
  { label: "shadcn/ui", href: "https://ui.shadcn.com/" },
  { label: "Zod", href: "https://zod.dev/" },
  { label: "Radix", href: "https://www.radix-ui.com/" },
  { label: "DOMPurify", href: "https://www.npmjs.com/package/dompurify" },
]
const textSizes = ["text-xl", "text-2xl", "text-3xl", "text-4xl"]

export default async function Page() {
  return (
    <div className="grid w-full place-items-center">
      <Prose className="mx-auto">
        <h1 className="">Jamstack Example App</h1>

        <ul className="not-prose align-center mx-auto flex  max-w-md flex-wrap justify-center gap-10">
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
      </Prose>
    </div>
  )
}
