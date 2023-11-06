import { z } from "zod"

/*
 * Pages
 */

/*
 * Assets
 */

export const AssetSchema = z.object({
  key: z.string(),
  url: z.string().url(),
  size: z.number(),
  name: z.string(),
})

export const DeleteAssetSchema = AssetSchema.pick({ key: true })

export type Asset = z.infer<typeof AssetSchema>

/*
 * Users
 */

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  role: z.enum(["user", "admin"]),
})
export const AddUserSchema = UserSchema.pick({ email: true, role: true })
export const ChangeRoleSchema = UserSchema.pick({ id: true, role: true })
export const DeleteUserSchema = UserSchema.pick({ id: true })

export type User = z.infer<typeof UserSchema>

export const roles = ["user", "admin"] as const
