import { test, expect } from "@playwright/test"

test.describe("@smoke /", () => {
  test("render with title", async ({ page }) => {
    await page.goto("/")

    await expect(page).toHaveTitle(/Any Old Type/)

    // Expects page to have a heading with the name of Installation.
    await expect(
      page.getByRole("heading", { name: /Datacom Digital/ }),
    ).toBeVisible()
  })
})
