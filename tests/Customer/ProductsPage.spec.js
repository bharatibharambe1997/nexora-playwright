const { test, expect } = require('../../fixtures/testFixtures');
const { ProductsPage } = require('../../pages/Common/ProductsPage');

test.describe('SauceDemo Products Page', () => {

  test('User should see products and manage cart successfully', async ({ page, loginAs }) => {
    const productsPage = new ProductsPage(page);

    await test.step('Step 1: Open application and login as standard user', async () => {
      await loginAs('standardUser');
    });

    await test.step('Step 2: Verify Products page heading', async () => {
      await expect(productsPage.getPageTitle()).toBeVisible();

      console.log('[SUCCESS] Products page heading is visible');
    });

    await test.step('Step 3: Verify total product count', async () => {
      await expect(productsPage.getProductCards()).toHaveCount(6);

      const totalProducts = await productsPage.getProductCards().count();

      console.log(`[INFO] Total Products: ${totalProducts}`);
    });

    await test.step('Step 4: Verify first product name', async () => {
      await expect(productsPage.getProductNames().first())
        .toHaveText('Sauce Labs Backpack');

      console.log('[SUCCESS] First product name verified');
    });

    await test.step('Step 5: Verify all product names', async () => {
      const productNames = await productsPage.getAllProductNames();

      console.log('[INFO] All Product Names:', productNames);

      expect(productNames).toEqual([
        'Sauce Labs Backpack',
        'Sauce Labs Bike Light',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket',
        'Sauce Labs Onesie',
        'Test.allTheThings() T-Shirt (Red)',
      ]);

      console.log('[SUCCESS] All product names verified');
    });

    await test.step('Step 6: Verify Backpack product card and Add to cart button', async () => {
      const backpackCard = productsPage.getProductCardByName(
        'Sauce Labs Backpack'
      );

      await expect(backpackCard).toHaveCount(1);

      await expect(
        backpackCard.getByRole('button', { name: 'Add to cart' })
      ).toBeVisible();

      console.log('[SUCCESS] Backpack product card and button verified');
    });

    await test.step('Step 7: Add Backpack to cart', async () => {
      await productsPage.addProductToCart('Sauce Labs Backpack');

      await expect(productsPage.getCartBadge()).toHaveText('1');

      console.log('[SUCCESS] Cart badge updated to 1');
    });

    await test.step('Step 8: Remove Backpack from cart', async () => {
      await productsPage.removeProductFromCart('Sauce Labs Backpack');

      await expect(productsPage.getCartBadge()).toHaveCount(0);

      console.log('[SUCCESS] Cart badge disappeared after removal');
    });

  });

});