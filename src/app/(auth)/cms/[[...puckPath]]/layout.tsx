import { PropsWithChildren } from "react"
import { DynamicTailwind } from "./tailwind"

export default async function EditorLayout({ children }: PropsWithChildren) {
  return (
    <>
      <DynamicTailwind />
      {children}
    </>
  )
}
