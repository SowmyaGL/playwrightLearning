const { test, expect } = require('@playwright/test');

import { dashBoardpage } from "./pageObjects/dashboardpage.po";

import { loginpage } from "./pageobjects/loginpage.po";

import logindata from "./testdata/login.json";

import { userdetails } from "./testdata/login";

import { addEmployeepage } from "./pageObjects/addemployeepage.po";

test("veryfy add employee", async ({ page }) => {
    const login = new loginpage(page)
    const dashboard = new dashBoardpage(page)
    const addemp = new addEmployeepage(page) //instance

    await login.launchApplication()
    await login.loginwithcreds(login.username, userdetails.password)
    await login.veryfyLoginSuccess()
    await dashBoardpage.clickonPIM()
    await addemp.addemployee(addemployeedata.Firstname, addemployeedata.lastname)
    await addemp.veryfyemployeecreated()
    console.log('arun')
    await page.locator('submit-button').click();
})