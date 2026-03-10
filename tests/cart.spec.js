import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import ProductPage from '../pages/productPage.js';
import CartPage from '../pages/cartPage.js';

test('add then remove product from cart', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');

  const product = new ProductPage(page);
  await product.addProductByName('Sauce Labs Backpack');
  await product.openCart();

  const cart = new CartPage(page);
  const names = await cart.getItemNames();
  expect(names).toContain('Sauce Labs Backpack');

  await cart.removeItem('Sauce Labs Backpack');
  expect(await cart.items.count()).toBe(0);
});
