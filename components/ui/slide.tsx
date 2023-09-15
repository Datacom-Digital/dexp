import { ShowOnVisible } from "@/components/ui/show-on-visible"
import { CNProps, cn } from "@/lib/utils"

export const SlideContainer = ({ children, className }: CNProps) => {
  return (
    <main
      className={cn(
        "max-h-screen w-screen snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden",
        className,
      )}
    >
      {children}
    </main>
  )
}

export const Slide = ({ children, className }: CNProps) => {
  return (
    <ShowOnVisible fadeIn ratio={1}>
      <section
        className={cn(
          "grid h-screen w-full snap-start place-items-center",
          className,
        )}
      >
        {children}
      </section>
    </ShowOnVisible>
  )
}