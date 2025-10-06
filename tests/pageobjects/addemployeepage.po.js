


const { test, expect } = require('@playwright/test');
exports.addEmployeepage = class addEmployeepage {
    constructor(page) {

        this.page = page

        this.addemployeesubmenu = page.locator("//a[text()='Add Employee']")
        this.firstnameInput = page.getByplaceholder("First Name")
        this.lastnameInput = page.getByplaceholder("lastName")
        this.savebutton = page.locator(`button[type="submit"]`)
        this.successmessage = page.locator("//h6[text()='personal Details']")




    }
        async addEmployee(firstname,lastname){
            await this.addemployeesubmenu.click()
           await  this.firstnameInput.fill(firstname)
           await this.lastnameInput.fill(lastname)
            await this.savebutton.click()
        }

    async veryfyEmployeecreated(){
        await expect(this.successmessage).toBeVisibvle()
    }
}   