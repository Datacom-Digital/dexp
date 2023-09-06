import "@/app/globals.css"
import cx from "classix"
import { Montserrat } from "next/font/google"

const font = Montserrat({ subsets: ["latin"] })

export const metadata = {
  title: "Any Old Type",
  description: "Descussing typescript types and any other unknowns",
}

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body
        className={cx(
          font.className,
          "dark:text-light dark:bg-dark bg-light text-dark",
        )}
      >
        {children}
      </body>
    </html>
  )
}
