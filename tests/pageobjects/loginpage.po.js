export class LoginPage {

    constructor(page){

        this.page= page
        this.logo = page.locator('img[alt="company-branding"]')
        this.usernameInput = page.locator('//input[@name="username"]')
        this.passwordInput = page.locator('input[name="password"]')
        this,loginButton = page.locator('button[type="submit"]')
        
    }

    async launchApplication(){
       await this.page.goto("/web/index.php/auth/login")
    }

    async veryfylogo(){
        await expect (this.logo).visible()
    }

    async loginwithCreds(username,password){
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()


    }

    async verifyloginsuccess(){
        await expect(this.page).tohaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    }
}