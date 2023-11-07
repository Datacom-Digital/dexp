import NextAuth, { DefaultUser } from "next-auth"

declare module "next-auth" {
  interface Session {
    user: DefaultUser["user"]
  }

  interface User {
    role: "user" | "admin"
  }
}
