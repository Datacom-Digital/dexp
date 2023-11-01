import NextAuth, { DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"]
  }

  interface User {
    role: "user" | "admin"
  }
}
