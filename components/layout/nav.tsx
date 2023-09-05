import Link from "next/link"

export const Nav = () => {
  return (
    <div className="float-left w-min opacity-0 transition-all duration-300 group-hover:opacity-100">
      <Link href="/" className="navlink">
        Slides
      </Link>
      <Link href="/forcem" className="navlink">
        Episodes
      </Link>
    </div>
  )
}
