import { ForcemContent } from "@/components/forcem/forcem-content"
import { CNProps, cn } from "@/lib/utils"

const Slide = ({ children, className }: CNProps) => (
  <section
    className={cn(
      "grid h-screen w-full snap-start gap-2 overflow-y-scroll pt-8 lg:gap-6 lg:pt-16",
      className,
    )}
  >
    {children}
  </section>
)

const Prose = ({ children, className }: CNProps) => (
  <div
    className={cn(
      "prose prose-xl h-fit w-full px-2 dark:prose-invert lg:prose-2xl sm:px-6",
      className,
    )}
  >
    {children}
  </div>
)

export default function Home() {
  return (
    <main className="max-h-screen w-full snap-y snap-mandatory overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
      <Slide className="content-start justify-items-center">
        <Prose>
          <h2>Any Old Type</h2>
          <p>Some words and stuff</p>
        </Prose>
        <Prose>
          <ForcemContent length={4} />
        </Prose>
      </Slide>
      <Slide className="content-start justify-items-center">
        <Prose>
          <h2>Any is bad</h2>
          <p>Reasons why any is bad:</p>
          <ul>
            <li>Because I said so</li>
            <li>Because other people think so to</li>
          </ul>
        </Prose>
      </Slide>
    </main>
  )
}
