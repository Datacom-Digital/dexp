export const runtime = "edge"

import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import Providers from "./providers"
import { cn } from "@/lib/utils"
import { PageLayout } from "@/components/page-layout"

const font = Montserrat({ subsets: ["latin"] })

// Inline script to prevent fouc
// suppressHydrationWarning added to html tag
const setDarkMode = `
const isDarkMode = () => {
  if (typeof localStorage !== "undefined" && localStorage.theme === "dark") {
    return true
  }
  if (typeof localStorage !== "undefined" && localStorage.theme === "light") {
    return false
  }
  return window?.matchMedia("(prefers-color-scheme: dark)").matches
};
if (isDarkMode()) document.documentElement.classList.add("dark");
`

export const metadata = {
  title: "Any Old Type",
  description: "Discussing typescript types and any other unknowns",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: setDarkMode,
          }}
        />
      </head>
      <body className={cn(font.className, "bg-background text-foreground")}>
        <Providers>
          <PageLayout>{children}</PageLayout>
        </Providers>
      </body>
    </html>
  )
}
