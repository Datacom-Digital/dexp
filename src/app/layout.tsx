import "@/app/globals.css"
import { Montserrat } from "next/font/google"
import Providers from "./providers"
import { cn } from "@/lib/utils"
import { ApplyMode } from "@/components/theme/mode-toggle"

const font = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Any Old Type",
  description: "Discussing typescript types and any other unknowns",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ApplyMode />
      </head>
      <body className={cn(font.className, "bg-background text-foreground")}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
