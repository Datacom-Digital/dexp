import { test, expect } from "@playwright/test"

test.describe("@smoke /", () => {
  test("render with title", async ({ page }) => {
    await page.goto("/")

    await expect(page).toHaveTitle(/Datacom Digital Experience Platforms/)

    await expect(
      page.getByRole("heading", { name: /Datacom Digital/ }),
    ).toBeVisible()
  })
})
