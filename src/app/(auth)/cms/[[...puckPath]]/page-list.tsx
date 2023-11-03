"use client"

import { Route } from "next"
import { Fragment } from "react"

import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { deletePage } from "@/server/puck/actions"
import { Prose } from "@/components/ui/prose"
import { PuckMenu } from "@/app/(auth)/puck-menu"

export function PageList({ paths }: { paths: Route[] }) {
  return (
    <>
      <PuckMenu title="All Pages" />
      <Prose className="mx-auto">
        <div className="grid w-fit grid-cols-[auto_auto_auto_auto] items-center gap-1">
          {paths.map((path) => (
            <Fragment key={path}>
              <Link className="pr-6" href={path} prefetch={false}>
                {path}
              </Link>

              <Link
                className={buttonVariants({
                  size: "sm",
                  className: "no-underline",
                })}
                href={`/cms${path}?mode=edit`}
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
      </Prose>
    </>
  )
}
