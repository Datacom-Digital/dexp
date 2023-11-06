import { generateComponents } from "@uploadthing/react"
import { OurFileRouter } from "@/puck/uploadthing/file-router"

export const { UploadButton, UploadDropzone, Uploader } =
  generateComponents<OurFileRouter>()
