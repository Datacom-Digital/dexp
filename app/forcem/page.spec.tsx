import { test, expect } from "@playwright/test"

test.describe("@smoke /forcem", () => {
  test("render with title", async ({ page }) => {
    await page.goto("/forcem")

    await page.getByRole("button", { name: "Generate" }).click()

    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole("heading", { name: /Episade/ })).toBeVisible()
  })
})
