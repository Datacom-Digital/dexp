"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Fragment } from "react"
import { addUser, changeRole, deleteUser } from "./actions"

import { AddUserSchema, User, roles } from "./page"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"

export default function UserForm({ users }: { users: User[] }) {
  const form = useForm<z.infer<typeof AddUserSchema>>({
    resolver: zodResolver(AddUserSchema),
    defaultValues: {
      email: "",
      role: "user",
    },
  })

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((data) => addUser(data))}
        className="space-y-8"
      >
        <div className="grid grid-cols-[auto_auto_auto_minmax(0,1fr)] items-baseline gap-1">
          {users.map(({ role, id, email }) => {
            return (
              <Fragment key={id}>
                <div>{email}</div>
                <Select onValueChange={(role) => changeRole({ id, role })}>
                  <SelectTrigger>
                    <SelectValue placeholder={role} />
                  </SelectTrigger>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Button onClick={() => deleteUser(id)}>Delete</Button>
                <div></div>
              </Fragment>
            )
          })}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <Select
                  onValueChange={field.onChange}
                  value={field.value.toString()}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {roles.map((role) => (
                      <SelectItem key={role} value={role}>
                        {role}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit">Add</Button>
        </div>
      </form>
    </Form>
  )
}
