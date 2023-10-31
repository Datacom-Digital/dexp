"use client"
import Error from "next/error"

export default function Unauthorised() {
  return <Error statusCode={401} />
}
