const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../../pages/Common/LoginPage');

test.describe('SauceDemo Login', () => {
  test('User should see error message with invalid credentials', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.open();

  await loginPage.login('invalid_user', 'invalid_password');

  await expect(loginPage.getErrorMessage()).toBeVisible();
  const errorMessage = await loginPage.getErrorMessage().innerText();

    console.log('Login Error Message:', errorMessage);
});
});



