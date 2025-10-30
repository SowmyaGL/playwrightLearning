const { test, expect } = require('@playwright/test');

test.describe('read Env file', () => {
    test('verify login with valid credentials-env', async ({ page }) => {
        await page.goto('https://demo.applitools.com/index.html')
        // await page.locator('#username').fill("jackG_REG")
        // await page.locator("#possword").fill("jack@123")

        // await page.goto(process.env.WEB_URL)
        await page.locator('#username').fill(process.env.RAJU_USERNAME)
        await page.locator("#password").fill(process.env.RAJU_PASSWORD)
        await page.locator("#log-in").click()

        // await page.waitForTimeout(5000)



    })
})