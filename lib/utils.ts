import { type ClassValue, clsx } from "clsx"
import { PropsWithChildren } from "react"
import { twMerge } from "tailwind-merge"

export type CNProps<T = unknown> = PropsWithChildren<T & { className?: string }>
export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))
