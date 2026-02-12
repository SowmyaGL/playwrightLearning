// const { test, expect } = require('@playwright/test');

// import { loginpage } from "./pageobjects/loginpage.po";


// import {logindata} from "..testdat/login.json"

// let page;
// let login;

// test.beforeEach(async({browser})=>{
//     page = await browser.newPage()
//     login = new loginPage(page)
//     await login.launchApplication()
//     await login.verifyLogoVisibility()
//     await login.logoVisibility()
// })

// test("verify login with valid credentials", async({page}) =>{

//     await login.loginwithCreds(logindata.username,logindata.password)
//     await login.verifyLoginSuccess()

// })
// test("verify login with valid username and Invalid password", async({page}) =>{

//     await login.loginwithCreds(logindata.username,logindata.wrongpassword)
//     await login.verifyErrorMessage()
    
// })
// test("verify login with Invalid username and Valid password", async({page}) =>{

//     await login.loginwithCreds(logindata.wrongusername,logindata.password)
//     await login.verifyLoginSuccess()
    
// })
// test("verify login with invalid username Invalid password", async({page}) =>{

//     await login.loginwithCreds(logindata.wrongusername,logindata.wrongpassword)
//     await login.verifyLoginSuccess()
    
// })


//===================================================
const { test, expect } = require('@playwright/test');

import { loginPage } from "./pageobjects/loginpage.po"

import logindata from './testdata/login.json'


let page;

let login;

test.beforeEach(async ({browser})=>{

    page = await browser.newPage()

   login = new loginPage(page)

  await  login.launchApplication()

  await login.verifyLogoVisibility()

})

test("Verify login with valid credentials", async () =>{
  
    await login.loginwithCreds(logindata.username, logindata.password)

    await login.verifyLoginSuccess()
    
})


test("Verify login with valid username and Invalid Password", async () =>{
  
    await login.loginwithCreds(logindata.username, logindata.wrongpassword)

    await login.verifyErrorMessage()
    
})


test("Verify login with Invalid username and Valid Password", async () =>{
  
    await login.loginwithCreds(logindata.wrongusername, logindata.password)

    await login.verifyErrorMessage()
    
})

test("Verify login with Invalid username and InValid Password", async () =>{
  
    await login.loginwithCreds(logindata.wrongusername, logindata.wrongpassword)

    await login.verifyErrorMessage()
    
})