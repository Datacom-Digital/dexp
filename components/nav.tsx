import Link from "next/link"
import cx from "classix"
import { ComponentProps } from "react"

const NavLink = ({ className, ...rest }: ComponentProps<typeof Link>) => (
  <Link
    className={cx(
      className,
      " text-light bg-dark-primary hover:bg-dark-secondary px-3 py-1",
    )}
    {...rest}
  />
)

export const Nav = ({ className }: { className?: string }) => {
  return (
    <div className={cx(className, "float-left w-min")}>
      <NavLink href="/">Slides</NavLink>
      <NavLink href="/forcem">Episodes</NavLink>
    </div>
  )
}
