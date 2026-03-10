import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';
import ProductPage from '../pages/productPage.js';

test.beforeEach(async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
});

test('add product to cart increases badge', async ({ page }) => {
  const product = new ProductPage(page);
  await product.addProductByName('Sauce Labs Backpack');
  const count = await product.getCartCount();
  expect(count).toBe(1);
});
