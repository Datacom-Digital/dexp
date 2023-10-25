import "server-only"

import { Resend } from "resend"
import NextAuth from "next-auth"

import { NextRequest, NextResponse } from "next/server"
import { adapter } from "@/server/auth/next-auth-adapter"

const masterEmail = process.env.MASTER_EMAIL || null
const emailFrom = process.env.EMAIL_FROM || "noreply@dexp.nz"
const resend = new Resend(process.env.RESEND_SECRET)

export const { handlers, auth } = NextAuth({
  providers: [
    {
      id: "email",
      type: "email",
      from: "notused",
      server: {},
      maxAge: 24 * 60 * 60,
      name: "Email",
      options: {},
      sendVerificationRequest: async ({ identifier: email, url }) => {
        if (process.env.NODE_ENV !== "production") {
          console.log(
            `sendVerificationRequest email not sent in ${process.env.NODE_ENV}`,
            { email, url },
          )
          return
        }

        try {
          const data = await resend.emails.send({
            from: emailFrom,
            to: email,
            subject: "One time login to dexp.nz",
            text: `Sign in to dexp.nz\n ${url} \n\n`,
          })
          if (!data?.id) {
            console.log("Resend did return valid response")
          }
          console.log(`Sent email id ${data.id}`)
        } catch (error) {
          console.log("Signin email failed to send")
        }
      },
    },
  ],
  session: {
    strategy: "jwt",
  },
  adapter,
  callbacks: {
    async signIn({ user, profile }) {
      // Existing user or email verification
      if (user?.role) {
        return true
      }
      // OAuth account first log in
      if (
        profile?.email_verified &&
        profile.email &&
        (await adapter.getUserByEmail?.(profile.email))
      ) {
        return true
      }
      // Master user override
      if (user?.email && masterEmail && user.email === masterEmail) {
        user.role = "admin"
        return true
      }

      return false
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role
      }
      return token
    },
    session({ session, token }) {
      session.user.role = token.role
      return session
    },
  },
})

export const authorize = (handler: (req: NextRequest) => Response) =>
  auth((req) => {
    if (!req.auth?.user) {
      return NextResponse.json(null, { status: 401 })
    }
    return handler(req)
  })
