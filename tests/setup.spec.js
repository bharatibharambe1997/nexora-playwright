const { test, expect } = require('@playwright/test');

test('Playwright should launch Chromium successfully', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Example Domain/);
});