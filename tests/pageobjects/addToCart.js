
export async function addToCart(page, productName) {
  await page
    .locator('.product', {
      has: page.locator('.product-name', { hasText: productName })
    })
    .locator('.product-action button')
    .click();
}

export async function Abcd(page, productName) {
  console.log('abcd fn')
}

export async function Abcd2(page, productName) {
  console.log('abcd fn 2')
}

export async function Abcd3(page, productName) {
  console.log('abcd fn3')
}
