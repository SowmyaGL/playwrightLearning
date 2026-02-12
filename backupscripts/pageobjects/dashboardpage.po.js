const { test, expect } = require('@playwright/test');
class DashBoardPage {
    constructor(page) {

        this.page = page

        this.pim = page.locator('a[href="/web/index.php/pim/viewPimModule"]')


    }
    async clickonPIM() {
        await this.pim.click();

    }
}

export default DashBoardPage();