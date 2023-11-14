"use client"

import { generateComponents } from "@uploadthing/react"
import { OurFileRouter } from "@/puck/src/uploadthing/file-router"

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>()
