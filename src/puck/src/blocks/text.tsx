"use client"

import { ComponentConfig } from "@measured/puck"
import React from "react"

const primitives = ["p", "h1", "h2", "h3", "div"] as const
type Primitive = (typeof primitives)[number]

export const Text: ComponentConfig<{
  text: string
  primitive?: Primitive
  className?: string
}> = {
  fields: {
    text: {
      type: "textarea",
    },
    primitive: {
      type: "select",
      options: primitives.map((p) => ({ label: p, value: p })),
    },
    className: {
      type: "text",
    },
  },
  defaultProps: {
    text: "Text",
    primitive: "p",
  },
  render: ({ text, className, primitive }) => {
    const Comp = primitive || "div"
    return <Comp className={className}>{text}</Comp>
  },
}
