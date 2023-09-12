import "@/app/globals.css"
import { cn } from "/lib/utils"
import { Montserrat } from "next/font/google"
import Providers from "./providers"

const font = Montserrat({ subsets: ["latin"] })

// Inline script to prevent fouc
// suppressHydrationWarning added to html tag
const darkmode = `
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  document.documentElement.classList.add("dark")
} else {
  document.documentElement.classList.remove("dark")
}
`

export const metadata = {
  title: "Any Old Type",
  description: "Discussing typescript types and any other unknowns",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkmode }} />
      </head>
      <body className={cn(font.className, "bg-background text-foreground")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
