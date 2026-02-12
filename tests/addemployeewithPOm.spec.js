
const { test, expect } = require('@playwright/test');
import { dashBoardpage } from "./pageobjects/dshboardpage.po";

import { loginpage } from "./pageobjects/loginpage.po";

import logindata from "./testdata/login.json";

import { addemployeepage } from "./pageObjects/addemployeepage.po";


test("veryfy add employee", async ({ page }) => {
    const login = new loginpage(page)
    const dashboard = new dashBoardpage(page)
    const addemp = new addemployeepage(page)

    await login.launchApplication()
    await login.loginwithcreds(login.username, logindata.password)
    await login.veryfyLoginSuccess()
    await dashBoardpage.clickonPIM()
    await addemp.addemployee(addemployeedata.Firstname, adeemployeedata.lastname)
    await addemp.veryfyemployeecreated()



})