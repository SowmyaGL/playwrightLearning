import { test, expect } from '@playwright/test';

test('add emplyoee creatipon validation',async({page})=> {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("input[name='username']").fill('Admin');
    await page.locator("input[name='password']").fill('admin123');
    await page.locator("button[type='submit']").click();
    await page.locator("//span[text()='PIM']").click();
    await page.locator("(//a[@class='oxd-topbar-body-nav-tab-item'])[2]").click();
    await page.locator("input[name='firstName']").fill('sowmya');
    
    await page.locator("input[name='lastName']").fill('GL');

    await page.locator("//button[contains(.,'Save')]").click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/213')


});