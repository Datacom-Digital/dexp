"use client"

import Link from "next/link"

import { useState, useEffect } from "react"
import { Route } from "next"
import { technologies } from "@/lib/technologies"
import { getRandomInt } from "@/lib/utils"

const textSizes = ["text-lg", "text-xl", "text-2xl", "text-3xl"]

export function WordCloud() {
  const [cloud, setCloud] = useState<
    Array<{ href: Route; label: string; textSize: string }>
  >([])

  useEffect(() => {
    setCloud(
      technologies
        .map((item) => ({ sort: Math.random(), ...item }))
        .sort((a, b) => a.sort - b.sort)
        .map((tech) => ({
          ...tech,
          textSize: textSizes[getRandomInt(0, textSizes.length)],
        })),
    )
  }, [])

  return (
    <ul className="mx-auto flex max-w-sm flex-wrap place-content-center place-items-center gap-x-3">
      {cloud.map(({ href, label, textSize }) => (
        <li key={label} className={textSize}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </ul>
  )
}
