import { Route } from "next"
import Link from "next/link"
import { getRandomInt } from "@/lib/utils"

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
  { label: "Cloudflare", href: "https://www.cloudflare.com" },
  { label: "Github", href: "https://github.com/datacom-digital" },
  {
    label: "DatacomUI",
    href: "https://www.npmjs.com/package/@datacom-digital/ui-sample-components",
  },
  { label: "Playwright", href: "https://playwright.dev" },
  { label: "Jest", href: "https://jestjs.io" },
  { label: "Drizzle", href: "https://orm.drizzle.team/" },
  { label: "Auth.js", href: "https://authjs.dev/" },
  { label: "Turso", href: "https://turso.tech/" },
  { label: "Resend", href: "https://resend.com/" },
  { label: "React Hook Form", href: "https://react-hook-form.com/" },
  { label: "Uploadthing", href: "https://uploadthing.com/" },
  { label: "Puck", href: "https://puck-editor-demo.vercel.app/" },
]
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
