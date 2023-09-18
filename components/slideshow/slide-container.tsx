import { CNProps, cn } from "@/lib/utils"

export const SlideContainer = ({ children, className }: CNProps) => {
  return (
    <main className="h-screen supports-[height:100dvh]:h-[100dvh]">
      <div className="h-screen w-full snap-y snap-mandatory snap-always overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] supports-[height:100svh]:h-[100svh] [&::-webkit-scrollbar]:hidden">
        {children}
      </div>
    </main>
  )
}
