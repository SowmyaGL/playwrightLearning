import { test, expect } from '@playwright/test';
// import jobtitledata from "./testdata/addjobtitle.json";
import employeedetails from "./testdata/addemployee.json"


test('add employee', { tag: "@smoke" }, async ({ page }) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee")
    await page.getByRole('textbox', { name: "first Name" }).click();
    console.log('employeedetails')
    console.log('sowmemployeedetailsya', employeedetails);
    await page.getByRole('textbox', { name: "first Name" }).fill(employeedetails.firstname);
    // await page.getByRole('textbox', { name: "first Name" }).fill(employeedetails.firstName);
    await page.getByRole('textbox', { name: "last Name" }).click();
    await page.getByRole('textbox', { name: "last Name" }).fill(employeedetails.lastname);
    await page.getByRole('button', { name: "save" }).click();
    await expect(page.getByRole('heading', { name: 'personal deatails' })).toBeVisible();
});

// test('add jobtitle', { tag: "@smoke" }, async ({ page }) => {

//     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList');
//     const random5char = Math.random().toString(36).substring(2, 7);
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobtitle + random5char);
//     await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobdescription);
//     await page.locator('input[type="file"]').setInputFiles(jobtitledata.jobfile);
//     await page.locator("//button[@type='submit']").click();
//     await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList')
// });


 test('Add job title ', { tag: "@smoke" }, async ({ page }) => {


        await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveJobTitle")
        const random5Char = Math.random().toString(36).substring(2, 7); // 5 chars 

        await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill(jobtitledata.jobTitle)

        await page.locator("//textarea[@placeholder='Type description here']").fill(jobtitledata.jobDescription)

        await page.locator('input[type="file"]').setInputFiles("./testdata/files/Gemini_Generated_Image.png")

        await page.locator("//button[@type='submit']").click();

        await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

    });
