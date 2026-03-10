export default class ProductPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.inventory_item');
    this.cartLink = page.locator('.shopping_cart_link');
    this.cartBadge = page.locator('.shopping_cart_badge');
  }

  async addProductByName(name) {
    const item = this.page.locator('.inventory_item', { hasText: name });
    const btn = item.locator('button');
    await btn.click();
  }

  async openCart() {
    await this.cartLink.click();
  }

  async getCartCount() {
    if (await this.cartBadge.count() === 0) return 0;
    return Number(await this.cartBadge.innerText());
  }
}
