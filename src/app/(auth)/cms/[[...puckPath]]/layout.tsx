import { PropsWithChildren } from "react"
import { DynamicTailwind } from "@/app/(auth)/cms/[[...puckPath]]/tailwind"

export default async function EditorLayout({ children }: PropsWithChildren) {
  return (
    <>
      <DynamicTailwind />
      {children}
    </>
  )
}
