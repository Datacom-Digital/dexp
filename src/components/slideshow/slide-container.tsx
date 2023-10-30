import { CNProps } from "@/lib/utils"

export const SlideContainer = ({ children }: CNProps) => {
  return (
    <main className="h-screen w-full supports-[height:100lvh]:h-[100lvh]">
      <div className="h-screen w-full snap-y snap-mandatory snap-always overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] supports-[height:100svh]:h-[100svh] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </main>
  )
}
