"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { PropsWithChildren } from "react"
import { Route } from "next"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeEditorMenu } from "@/components/theme/theme-editor-menu"

export const PuckMenu = ({
  title,
  path,
  children,
}: PropsWithChildren<{ title: string; path: string }>) => {
  const { data: session } = useSession()
  const isAdmin = session?.user.role === "admin"

  return (
    <header className="grid w-full grid-cols-3 items-center bg-background p-2 text-foreground">
      <div className="flex justify-start gap-1">{children}</div>
      <div className="flex justify-center">
        <Link href={path as Route} target="_blank" prefetch={false}>
          {title || path}
        </Link>
      </div>
      <div className="flex justify-end gap-1">
        <Link
          className={buttonVariants({ variant: "outline", size: "sm" })}
          href="/cms"
        >
          Pages
        </Link>
        {isAdmin && (
          <Link
            className={buttonVariants({ variant: "outline", size: "sm" })}
            href="/cms?mode=assets"
          >
            Assets
          </Link>
        )}
        {isAdmin && (
          <Link
            className={buttonVariants({ variant: "outline", size: "sm" })}
            href="/cms?mode=users"
          >
            Users
          </Link>
        )}
        <ThemeEditorMenu className="h-6" />
        <Button size="sm" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    </header>
  )
}
