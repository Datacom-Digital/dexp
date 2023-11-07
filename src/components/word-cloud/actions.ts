"use server"

import { technologies } from "@/lib/technologies"
import { getRandomInt } from "@/lib/utils"

const textSizes = ["text-lg", "text-xl", "text-2xl", "text-3xl"]

export const getRandomTechnologies = async () => {
  return technologies
    .map((item) => ({ sort: Math.random(), ...item }))
    .sort((a, b) => a.sort - b.sort)
    .map((tech) => ({
      ...tech,
      textSize: textSizes[getRandomInt(0, textSizes.length)],
    }))
}
