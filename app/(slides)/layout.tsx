import { Nav } from "@/components/nav"
import { ShowOnHover } from "@/components/ui/show-on-hover"

export default function SlidesLayout({ children }: React.PropsWithChildren) {
  return (
    <>
      <ShowOnHover>
        <Nav className="fixed" />
      </ShowOnHover>

      {children}
    </>
  )
}
