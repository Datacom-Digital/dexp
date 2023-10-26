// TODO edge runtime?
import { NextRequest } from "next/server"
import { headers } from "next/headers"
import { handlers } from "@/server/auth/auth"

export const POST = handlers.POST

export const GET = (req: NextRequest) => {
  if (req.nextUrl.search && (req.method === "GET" || req.method === "HEAD")) {
    console.log(req.method, {
      userAgent: headers().get("user-agent"),
      native: headers().get("x-native-host"),
      search: req.nextUrl.searchParams,
    })
  }
  // Work around safe links scanning https://github.com/nextauthjs/next-auth/issues/1840#issuecomment-1746608163
  if (
    headers().get("user-agent")?.toLowerCase().includes("oneoutlook") ||
    headers().get("x-native-host")?.toLowerCase().includes("oneoutlook") ||
    req.method === "HEAD"
  ) {
    console.log("Safelink bot detected")
    return new Response("OK", {
      status: 200,
    })
  }

  return handlers.GET(req)
}
