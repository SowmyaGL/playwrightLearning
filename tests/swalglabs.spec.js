const { test, expect } = require('@playwright/test');

test('login with standard_user credentials', async ({ page }) => {
    await page.goto("https://www.saucedemo.com/");
    await page.locator("input[name='user-name']").fill("standard_user");
    await page.locator("input[name='password']").fill("secret_sauce");
    await page.locator("input[type='submit']").click();
    await page.locator("button[name='add-to-cart-sauce-labs-backpack']").click();
    await page.locator(".shopping_cart_link").click();
    await expect(page.locator(".cart_quantity")).toHaveText('1')
    await page.locator("button[name='continue-shopping']").click();
    const element = page.locator('.inventory_list');
    await expect(element).toBeVisible();



});
