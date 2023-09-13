import { CNProps, cn } from "@/lib/utils"

export const Prose = ({ children, className }: CNProps) => (
  <div
    className={cn(
      "prose prose-xl h-fit w-full px-2 dark:prose-invert lg:prose-2xl sm:px-6",
      className,
    )}
  >
    {children}
  </div>
)
