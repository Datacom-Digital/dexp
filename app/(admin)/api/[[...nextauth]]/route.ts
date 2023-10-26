// TODO edge runtime?
import { NextRequest } from "next/server"

import { redirect } from "next/navigation"
import { handlers } from "@/server/auth/auth"

export const POST = handlers.POST

export const GET = (req: NextRequest) => {
  // safe links bot workaround https://github.com/nextauthjs/next-auth/issues/4965
  if (
    req.method === "GET" &&
    req.nextUrl.pathname === "/api/auth/callback/email" &&
    !req.nextUrl.searchParams.has("confirmed")
  ) {
    return new Response(
      redirect(
        `/api/confirm?${new URLSearchParams(
          req.nextUrl.searchParams,
        ).toString()}`,
      ),
    )
  }

  return handlers.GET(req)
}
