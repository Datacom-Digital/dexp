"use client"

import { Route } from "next"
import Link from "next/link"
import { Fragment } from "react"
import { Button, buttonVariants } from "@/components/ui/button"
import { deletePage } from "@/puck/src/actions"

export function AllPages({ keys }: { keys: Route[] }) {
  return (
    <>
      <div className="mx-auto grid w-fit grid-cols-[auto_auto_auto] items-center gap-1 pt-3">
        {keys.map((path) => (
          <Fragment key={path}>
            <Link className="pr-6" href={path} prefetch={false}>
              {path}
            </Link>

            <Link
              className={buttonVariants({
                size: "sm",
                className: "no-underline",
              })}
              href={`/cms/edit/${path}`}
              target="_blank"
              prefetch={false}
            >
              Edit
            </Link>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => deletePage(path)}
            >
              Delete
            </Button>
          </Fragment>
        ))}
      </div>
    </>
  )
}
