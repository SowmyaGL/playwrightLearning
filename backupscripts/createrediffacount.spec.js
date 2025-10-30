import { test, expect } from '@playwright/test';

test("verify create a reddif email account", async ({ page })=>{
    await page.goto("https://register.rediff.com/register/register.php?FormName=user_details");
    await page.locator("//input[@placeholder='Enter your full name']").fill("Sowmya GL");
    await page.locator("//input[@placeholder='Enter Rediffmail ID']").fill("Sowmyatester");
    await page.locator("#newpasswd").fill("sowmya@123");
    await page.locator("#newpasswd1").fill("sowmya@123");
    await page.locator("select.day").selectOption("10");
    await page.locator("select.middle.month").selectOption("AUG");
    await page.locator("select.year").selectOption("2000");
    await page.locator("div#div_city>div>select").selectOption('Bangalore');
    await page.pause();
    await page.locator("div#div_city>div>select").selectOption({ index: 10 });
    await page.pause();
    await page.locator("div#div_city>div>select").selectOption({ label: 'Chennai' });


});