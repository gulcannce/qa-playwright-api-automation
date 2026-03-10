export default class CartPage {
  constructor(page) {
    this.page = page;
    this.items = page.locator('.cart_item');
  }

  async getItemNames() {
    return await this.items.locator('.inventory_item_name').allInnerTexts();
  }

  async removeItem(name) {
    const item = this.page.locator('.cart_item', { hasText: name });
    await item.locator('button').click();
  }
}
