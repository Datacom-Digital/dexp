"use client"

import React from "react"
import { ComponentConfig, DropZone } from "@measured/puck"

export type ColumnsProps = {
  columns: {
    span?: number
  }[]
}

export const Columns: ComponentConfig<ColumnsProps> = {
  fields: {
    columns: {
      type: "array",
      getItemSummary: (col, id) =>
        `Column ${id + 1}, span ${
          col.span ? Math.max(Math.min(col.span, 12), 1) : "auto"
        }`,
      arrayFields: {
        span: {
          label: "Span (1-12)",
          type: "number",
        },
      },
    },
  },
  defaultProps: {
    columns: [{}, {}],
  },
  render: ({ columns }) => {
    //span ${Math.max(Math.min(span, 12), 1)}
    return (
      <div className="flex flex-auto gap-6">
        {columns.map(({ span }, idx) => {
          return (
            <div key={idx}>
              <DropZone zone={`column-${idx}`} />
            </div>
          )
        })}
      </div>
    )
  },
}
