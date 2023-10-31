"use client"

import { Route } from "next"
import React from "react"

import { Button } from "@/components/ui/button"
import { deletePage } from "@/server/puck/actions"

export function PageActions({ path }: { path: Route }) {
  const edit = `/cms${path}` as Route
  return (
    <>
      <div className="pr-6">{path}</div>
      <Button
        variant="outline"
        size="sm"
        onClick={() => window.open(path, "_blank")?.focus()}
      >
        View
      </Button>
      <Button size="sm" onClick={() => window.open(edit, "_blank")?.focus()}>
        Edit
      </Button>
      <Button variant="destructive" size="sm" onClick={() => deletePage(path)}>
        Delete
      </Button>
    </>
  )
}
