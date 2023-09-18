import { CNProps, cn } from "@/lib/utils"

export const SlideContainer = ({ children, className }: CNProps) => {
  return (
    <main
      className={cn(
        "max-h-screen w-full snap-y snap-mandatory snap-always overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] supports-[height:100svh]:max-h-[100svh] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </main>
  )
}
