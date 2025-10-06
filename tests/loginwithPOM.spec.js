
const { test, expect } = require('@playwright/test');

import { LoginPage } from "./pageobjects/loginpage.po";

import logindata from "./testdata/login.json"

let page;

let login;

test.beforeEach(async ({browser}) =>{
    page = await browser.newPage()

    const login = new LoginPage(page)
    await login.launchApplication()

})
test("verify login with valid credentials", async({page}) =>{
    await login.veryfylogo(logindata.username,logindata.password)

    await login.veryfylogosuccess()

})

test("verify login with valid username and invalid password",async({page}) =>{
    await login.loginwithcreds(logindata.username,logindata.wrongpassword)
    await login.veryfyerrormessage()
})

test("verify login with invalid username and valid password",async({page}) =>{
       await login.loginwithcreds(logindata.wrongusername,logindata.validpassword)
       await login.veryfyerrormessage()
})

test("verify login with invalid username and invalid password",async({page}) =>{
       await login.loginwithcreds(logindata.wrongusername,logindata.wrongpassword)
       await login.veryfyerrormessage()
})