import { test, expect } from '@playwright/test';
import LoginPage from '../pages/loginPage.js';

test('valid login navigates to inventory', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login('standard_user', 'secret_sauce');
  await expect(page).toHaveURL(/inventory.html/);
});
