const {test, expect,locator,page} = require('@playwright/test');
 class HomePage{
        constructor(page)
        {
            this.page = page;
            this.logout = page.locator(".logout-button");
            this.loginWelcomeMessage = page.locator("h2.text-lg");
            this.addBook = page.locator(".add-book-button");
            this.editBtn = page.locator("[id='edit-book-1']");
            this.deleteBtn = page.locator("[id='delete-book-1']");
            this.totalBookTitle = page.locator(".total-book-title");
            this.firstRowTitle = page.locator("table tbody tr:nth-child(1) td:nth-child(1)");
            //this.editBtn = page.locator("table tbody tr:nth-child(1) td:last-child button:text('Edit')");
        }

        async navigate()
        {
            await this.page.goto(process.env.HOME_URL);
        }

        async getLoginWelcomeMessage() {
            return await this.loginWelcomeMessage.textContent();
        }

        async isLogoutButtonDisplayed()
        {
            return await this.logout.isVisible();

        }
       
        async clickOnAddBook()
        {
            await this.addBook.click();
            await this.page.waitForLoadState('networkidle');
        }  

        async clickOnDeleteButton()
        {
            await this.deleteBtn.click();
        }

        async clickOnEditButton()
        {
            await this.editBtn.click();
        }

        async isTheBookListDisplayed() {
            const text = await this.totalBookTitle.textContent();
            return text.includes("Total Book Titles");
        }

        async getTotalBooksCount() {
            const text = await this.totalBookTitle.textContent(); 
            const match = text.match(/\d+/); // Extract number from text
            return match ? parseInt(match[0], 10) : 0;
        }

        async clickOnFirstRowEditButton(){
            await this.editBtn.click();
        }

        async getFirstRowTitle() {
            return await this.firstRowTitle.textContent();
        }

        async clickOnFirstRowDeleteButton(){
            await this.deleteBtn.click();
        }


    }
    module.exports = HomePage;
