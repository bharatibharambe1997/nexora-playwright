const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/Common/LoginPage');

test.describe('SauceDemo Login', () => {
  test('Standard user should be able to login successfully', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.open();

    await loginPage.login('standard_user', 'secret_sauce');

    await expect(page).toHaveURL(/inventory\.html/);
    await expect(page.getByText('Products')).toBeVisible();
  });
});