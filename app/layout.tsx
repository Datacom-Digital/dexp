import "@/app/globals.css"
import { cn } from "@/lib/utils"
import { Montserrat } from "next/font/google"

const font = Montserrat({ subsets: ["latin"] })

// Inline script to prevent FOUC
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
  description: "Descussing typescript types and any other unknowns",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <head>
        <script dangerouslySetInnerHTML={{ __html: darkmode }} />
      </head>
      <body
        className={cn(
          font.className,
          "dark:text-light dark:bg-dark bg-light text-dark",
        )}
      >
        {children}
      </body>
    </html>
  )
}
