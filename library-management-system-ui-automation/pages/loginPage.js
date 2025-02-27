const {test, expect,Locator,Page} = require('@playwright/test');
 class LoginPage
    {
        constructor(page)
        {
            this.page = page;
            this.userName = page.locator("[id='username']");
            this.password = page.locator("[id='password']");
            this.signInbutton= page.locator("[id='login-button']");
            this.assertiveErrorMessage = page.locator("[aria-live='assertive'] li");
           
        }
        
        async navigate()
        {
            await this.page.goto(process.env.BASE_URL);
        }
        
        async fillInUsername(username)
        {
            await this.userName.fill(username);
        }  

        async fillInPassword(password)
        {
            await this.password.fill(password);
        }

        async clickOnSignInButton()
        {
            await this.signInbutton.click();
            await this.page.waitForLoadState('networkidle');
        }
        
        async getErrorMessage() {
            return await this.assertiveErrorMessage.textContent();
        }

    }
    module.exports = LoginPage;