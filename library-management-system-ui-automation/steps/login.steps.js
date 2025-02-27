  const {Given, When, Then} = require ('@cucumber/cucumber');
  const {expect} = require('@playwright/test');

  Given('the user is on the login page', async function () {
      await this.pageObjects.loginPage.navigate();
    });

    Given('the user enters username {string} and a {string}', async function (Username,Password ) {
      await this.pageObjects.loginPage.fillInUsername(Username);
      await this.pageObjects.loginPage.fillInPassword(Password);
  });

  When('the user clicks on login button', async function () {
    await this.pageObjects.loginPage.clickOnSignInButton();
  });

  Then('the user is redirected to the books catalog page with a {string} and logout button is displayed', async function (Message) {
    //Check for homepage welcome message  
    const welcomeMessage = await this.pageObjects.homePage.getLoginWelcomeMessage();
      expect(welcomeMessage).toBe(Message);

    // Check if the logout button displayed 
     const isVisible = await this.pageObjects.homePage.isLogoutButtonDisplayed();
    expect(isVisible).toBe(true);
  });

   
  Given('the user enters invalid username {string} and a {string}', async function (Username,Password) {
    await this.pageObjects.loginPage.fillInUsername(Username);
    await this.pageObjects.loginPage.fillInPassword(Password);
  });

  Then('an {string} shall be displayed to the user', async function (ErrorMessage) {
    // Check for error messages displayed on the login page 
    const errorMessage = await this.pageObjects.loginPage.getErrorMessage();
      expect(errorMessage).toBe(ErrorMessage);
  });


  