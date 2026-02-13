const { test, expect } = require('@playwright/test');

test('add  items to cart ', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/");
    const addToCartItems = ["Brocolli - 1 Kg", "Cauliflower - 1 Kg", "Cucumber - 1 Kg"];

    let expectedTotal = 0;

    for (const item of addToCartItems) {

        const product = page.locator('.product', {
            has: page.locator('.product-name', { hasText: item })
        });

        const priceText = await product.locator('.product-price').textContent();

        // convert string to number
        const price = parseInt(priceText.trim());

        expectedTotal += price;   // ✅ add to total

        await product.locator('.product-action button').click();
    }

    const cartTotalLocator = page.locator(
        '.cart-info > table > tbody > tr:nth-child(2) > td:nth-child(3)'
    );

    await expect(cartTotalLocator).toHaveText(expectedTotal.toString());

    console.log("Total price:", expectedTotal);

    // login
    // items list
    // all selected items add to card
    // selected items price = add to cart price
    // no of selected items = add to cart selected items

    // address 
    // pay
    // verify price as same as in the add to cart
    // UPI 
    // verifying success message
})