import { CNProps, cn } from "@/lib/utils"

export const SlideContainer = ({ children, className }: CNProps) => {
  return (
    <main
      className={cn(
        "max-h-screen w-full snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </main>
  )
}
