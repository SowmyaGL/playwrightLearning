import { test, expect } from '@playwright/test';

test("verify login with valid credentials", async ({ page })=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');

});

test("verify login with valid username and invalid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.locator("input[name='username']").fill("Admin");
    await page.locator("input[type='password']").fill("admin1234");
    await page.locator("button[type='submit']").click();
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
    //await page.close()


})

test("verify login with valid username invalid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("Admin")
    await page.locator("input[type='password']").fill("huyfytuihb")
    await page.locator("button[type='submit']").click()
    await expect(page.locator(".oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible();
})

test("verify login with invalid user name and valid password", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator(".oxd-input").first().fill("abcde")
    await page.locator("input[type='password']").fill("admin123")
    await page.locator("button[type='submit']").click()
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()

})

test("verifying login with invalid user name and invalid user name", async ({page})=>{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.locator("input[name='username']").fill("abcde")
    await page.locator("input[type='password']").fill("fghijk")
    await page.locator("button[type='submit']").click()
    await expect(page.locator("p.oxd-text.oxd-text--p.oxd-alert-content-text")).toBeVisible()
})