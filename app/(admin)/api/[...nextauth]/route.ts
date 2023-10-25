// TODO edge runtime?
import { NextRequest } from "next/server"
import { headers } from "next/headers"
import { handlers } from "@/server/auth/auth"

export const POST = handlers.POST

export const GET = (req: NextRequest) => {
  // Work around safe links scanning https://github.com/nextauthjs/next-auth/issues/1840#issuecomment-1746608163
  if (
    headers().get("user-agent")?.toLowerCase().includes("oneoutlook") ||
    headers().get("x-native-host")?.toLowerCase().includes("oneoutlook")
  ) {
    return new Response("OK", {
      status: 200,
    })
  }

  return handlers.GET(req)
}
