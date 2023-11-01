"use client"

import { ComponentConfig } from "@measured/puck"

export const Text: ComponentConfig<{ text: string; className?: string }> = {
  fields: {
    text: {
      type: "textarea",
    },

    className: {
      type: "text",
    },
  },
  defaultProps: {
    text: "Text",
  },
  render: ({ text, className }) => {
    return <div className={className}>{text}</div>
  },
}
