import { Nav } from "@/components/nav"

export default function SlidesLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <div className="">
        <Nav className="transition-all duration-300" />
      </div>
      {children}
    </>
  )
}
