const { test, expect } = require('@playwright/test');
const { CustomerHomePage } = require('../../pages/customer/CustomerHomePage');

test.describe('NEXORA Customer Portal', () => {
  test('Customer should be able to open the application', async ({ page }) => {
    const customerHomePage = new CustomerHomePage(page);

    await customerHomePage.open();

    await expect(customerHomePage.getPageTitle()).toHaveText(
      'Swag Labs'
    );
  });
});