import "@/app/globals.css"
import { Albert_Sans } from "next/font/google"

const font = Albert_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "Any Old Type",
  description: "Descussing typescript types and any other unknowns",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  )
}
