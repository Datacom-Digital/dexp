import { createUploadthing, type FileRouter } from "uploadthing/next"
import { getToken } from "@auth/core/jwt"
import { db } from "@/db/client"
import { assets } from "@/db/schema"

const f = createUploadthing()

const imageMiddleware = async ({ req }: { req: Request }) => {
  // This code runs on your server before upload
  const user = await getToken({ req })

  // If you throw, the user will not be able to upload
  if (!user) throw new Error("Unauthorized")

  // Whatever is returned here is accessible in onUploadComplete as `metadata`
  return { creator: user.email }
}

// TODO dry

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    // Set permissions and file types for this FileRoute
    .middleware(({ req }) => {
      return imageMiddleware({ req })
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      db.insert(assets)
        .values({
          key: file.key,
          url: file.url,
          name: file.name,
          size: file.size,
        })
        .execute()
      console.log("Upload complete for userId:", metadata.creator)
    }),
  singleImageUploader: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(imageMiddleware)
    .onUploadComplete(async ({ metadata, file }) => {
      // This code RUNS ON YOUR SERVER after upload
      db.insert(assets)
        .values({
          key: file.key,
          url: file.url,
          name: file.name,
          size: file.size,
        })
        .execute()
      console.log("Upload complete for userId:", metadata.creator)
    }),
} satisfies FileRouter

export type OurFileRouter = typeof ourFileRouter
