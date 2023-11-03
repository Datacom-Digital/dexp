"use client"

import { signOut, useSession } from "next-auth/react"
import Link from "next/link"
import { PropsWithChildren } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { ThemeEditorMenu } from "@/components/theme/theme-editor-menu"

export const PuckMenu = ({
  title,
  children,
}: PropsWithChildren<{ title: string }>) => {
  const { data: session } = useSession()
  const isAdmin = session?.user.role === "admin"

  return (
    <header className="grid w-full grid-cols-3 items-center bg-background p-2 text-foreground">
      <div className="flex justify-start gap-1">{children}</div>
      <div className="flex justify-center">{title}</div>
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
            href="/cms/users"
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
