import { Nav } from "@/components/layout/nav"

import { PropsWithChildren } from "react"

const Slide = ({ children }: PropsWithChildren) => (
  <section className="flex h-[calc(100vh-40px)] w-full snap-start justify-center">
    <div className="container max-w-screen-md">{children}</div>
  </section>
)

export default function Home() {
  return (
    <main className="h-screen">
      <nav className="group h-10 w-full pb-2">
        <Nav />
      </nav>
      <div className="max-h-[calc(100vh-40px)] snap-y snap-mandatory flex-col overflow-y-scroll [-ms-overflow-style:'none'] [scrollbar-width:'none'] [&::-webkit-scrollbar]:hidden">
        <Slide>
          <h1>Any Old Type</h1>
          <p></p>
        </Slide>
        <Slide>
          <h1>Any is bad</h1>
          <p>Reasons why any is bad:</p>
          <ul>
            <li>Because I said so</li>
            <li>Because other people think so to</li>
          </ul>
        </Slide>
      </div>
    </main>
  )
}
