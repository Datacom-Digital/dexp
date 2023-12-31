"use client"

import { Fragment, useState } from "react"

import { filesize } from "filesize"
import Link from "next/link"
import { Route } from "next"
import { UploadFileResponse } from "uploadthing/client"
import { Button } from "@/components/ui/button"

import { UploadDropzone } from "@/puck/src/uploadthing/components"
import { Asset } from "@/puck/types"
import { deleteAsset } from "@/puck/src/actions"

export function Assets({ assets: initialAssets }: { assets: Asset[] }) {
  const [assets, setAssets] = useState(initialAssets)

  return (
    <div className="mx-auto grid w-fit grid-cols-[auto_auto_auto] items-center gap-3 pt-3">
      {assets.map(({ key, name, size, url }) => {
        return (
          <Fragment key={key}>
            <div>
              <Link href={url as Route} prefetch={false} target="_blank">
                {name}
              </Link>
            </div>
            <div>{filesize(size)}</div>
            <Button
              variant="destructive"
              size="sm"
              onClick={async () => {
                await deleteAsset({ key })

                setAssets(assets.filter((asset) => asset.key !== key))
              }}
            >
              Delete
            </Button>
          </Fragment>
        )
      })}

      <div className="col-span-3">
        <UploadDropzone
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            if (res) {
              setAssets([
                ...assets,
                ...res.map(({ key, name, size, url }: UploadFileResponse) => ({
                  key,
                  name,
                  size,
                  url,
                })),
              ])
            }
          }}
          onUploadError={(error: Error) => {
            alert(`ERROR! ${error.message}`)
          }}
          onUploadBegin={(name) => {
            // Do something once upload begins
            console.log("Uploading: ", name)
          }}
        />
      </div>
    </div>
  )
}
