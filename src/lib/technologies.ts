import { Route } from "next"

export const technologies: Array<{
  label: string
  href: Route
  desc?: string
}> = [
  {
    label: "Auth.js",
    href: "https://authjs.dev/",
    desc: "Authentication and authorisation",
  },
  {
    label: "DatacomUI",
    href: "https://www.npmjs.com/package/@datacom-digital/ui-sample-components",
    desc: "Sample UI components",
  },
  {
    label: "DOMPurify",
    href: "https://www.npmjs.com/package/dompurify",
    desc: "XSS santizer for HTML, MathML and SVG",
  },
  {
    label: "Drizzle",
    href: "https://orm.drizzle.team/",
    desc: "TypeScript ORM",
  },
  { label: "ESLint", href: "https://eslint.org/" },
  {
    label: "Github",
    href: "https://github.com/datacom-digital",
    desc: "Source code and devops",
  },
  {
    label: "Jest",
    href: "https://jestjs.io",
    desc: "(unit) testing framework",
  },
  { label: "Next.js", href: "https://nextjs.org/", desc: "React framework" },
  {
    label: "Playwright",
    href: "https://playwright.dev",
    desc: "End to end (and component) testing framework",
  },
  { label: "Prettier", href: "https://prettier.io/", desc: "Code formatting" },
  {
    label: "Puck",
    href: "https://puck-editor-demo.vercel.app/",
    desc: "CMS builder",
  },
  {
    label: "Radix",
    href: "https://www.radix-ui.com/",
    desc: "Unstyled, accessible React primitives",
  },
  { label: "React Hook Form", href: "https://react-hook-form.com/" },
  {
    label: "Resend",
    href: "https://resend.com/",
    desc: "Email provider and templating",
  },
  {
    label: "shadcn/ui",
    href: "https://ui.shadcn.com/",
    desc: "Component generation (not a library)",
  },
  { label: "tailwindcss", href: "https://tailwindcss.com/", desc: "CSS" },
  { label: "Turso", href: "https://turso.tech/", desc: "Database hosting" },
  { label: "TypeScript", href: "https://www.typescriptlang.org/" },
  {
    label: "Uploadthing",
    href: "https://uploadthing.com/",
    desc: "Blob storage",
  },
  {
    label: "Vercel",
    href: "https://vercel.com/",
    desc: "Domain and site hosting",
  },
  { label: "Zod", href: "https://zod.dev/", desc: "Validation" },
]
