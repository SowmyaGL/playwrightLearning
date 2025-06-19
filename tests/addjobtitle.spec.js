const { test, expect } = require('@playwright/test');



test('verify add job title with mandatory field', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    await page.locator("input[name='username']").fill("admin");
    await page.locator("input[type='password']").fill("admin123");
    await page.locator("button[type='submit']").click();

    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await page.locator("//span[text()='Admin']").click();
    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
    await page.locator("//li[contains(.,'Job')]").click();
    await page.locator("//a[normalize-space(text())='Job Titles']").click();
    await page.locator("//button[contains(.,'Add')]").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle');
    const randomNumber = Math.floor(Math.random() * 100);
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(`SDET ${randomNumber}`)
    await page.locator("//textarea[@placeholder='Type description here']").fill(`SDET ${randomNumber}`)
    await page.locator("//button[@type='submit']").click();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");

});

