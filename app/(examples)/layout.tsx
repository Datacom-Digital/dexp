import { Nav } from "@/components/nav"

export default function SlidesLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Nav className="transition-all duration-300 md:fixed" />
      {children}
    </>
  )
}
