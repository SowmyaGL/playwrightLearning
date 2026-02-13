export async function addToCart(page, productName) {
  await page
    .locator('.product', {
      has: page.locator('.product-name', { hasText: productName })
    })
    .locator('.product-action button')
    .click();
}
