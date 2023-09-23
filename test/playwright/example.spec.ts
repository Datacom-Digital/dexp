import { test, expect } from "@playwright/test"

test("@smoke has title", async ({ page }) => {
  await page.goto("/")

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Any Old Type/)
})

test("@smoke link", async ({ page }) => {
  await page.goto("/")

  // Click the get started link.
  await page.getByRole("link", { name: "Slides" }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole("heading", { name: /Episode/ })).toBeVisible()
})
