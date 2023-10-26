"use client"
import { redirect, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

// safe links bot workaround https://github.com/nextauthjs/next-auth/issues/4965
export default function Confirm({
  searchParams: { callbackUrl, email, token },
}: {
  searchParams: {
    callbackUrl: string
    email: string
    token: string
  }
}) {
  const router = useRouter()
  if (callbackUrl && email && token) {
    // TODO: add recaptcha or similar to automate this
    return (
      <div className="grid h-screen w-full place-content-center">
        <Button
          onClick={() => {
            router.replace(
              `/api/auth/callback/email?${new URLSearchParams({
                callbackUrl,
                email,
                token,
                confirmed: "true",
              }).toString()}`,
            )
          }}
        >
          Confirm Email Validation
        </Button>
      </div>
    )
  }

  return redirect("/cms")
}
