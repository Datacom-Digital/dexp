import { CNProps, cn } from "@/lib/utils"

export const SlideContainer = ({ children, className }: CNProps) => {
  return (
    <main
      className={cn(
        "max-h-screen w-full snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] supports-[height:100dvh]:max-h-[100dvh] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </main>
  )
}
