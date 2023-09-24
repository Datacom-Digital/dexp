import { test, expect } from "@playwright/test"

test.describe("@smoke /slides", () => {
  test("render with title", async ({ page }) => {
    await page.goto("/slides")

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole("heading", { name: /Episode/ })).toBeVisible()
  })
})
