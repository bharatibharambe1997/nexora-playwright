
export class ProductsPage {
  constructor(page) {
    this.page = page;

    this.pageTitle = page.getByText('Products', {
      exact: true,
    });

    this.productCards = page.locator('.inventory_item');
    this.productNames = page.locator('.inventory_item_name');
    this.cartIcon = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  getPageTitle() {
    return this.pageTitle;
  }

  getProductCards() {
    return this.productCards;
  }

  getProductNames() {
    return this.productNames;
  }

  getCartIcon() {
    return this.cartIcon;
  }

  getCartBadge() {
    return this.cartBadge;
  }

  async getAllProductNames() {
    console.log('[ACTION] Fetching all product names');

    return await this.productNames.allTextContents();
  }

  getProductCardByName(productName) {
    console.log(`[ACTION] Locating product card: ${productName}`);

    return this.productCards.filter({
      has: this.page.getByText(productName, { exact: true }),
    });
  }

  async addProductToCart(productName) {
    console.log(`[ACTION] Adding product to cart: ${productName}`);

    const productCard = this.getProductCardByName(productName);

    await productCard
      .getByRole('button', { name: 'Add to cart' })
      .click();

    console.log(`[SUCCESS] Product added to cart: ${productName}`);
  }

  async removeProductFromCart(productName) {
    console.log(`[ACTION] Removing product from cart: ${productName}`);

    const productCard = this.getProductCardByName(productName);

    await productCard
      .getByRole('button', { name: 'Remove' })
      .click();

    console.log(`[SUCCESS] Product removed from cart: ${productName}`);
  }
}