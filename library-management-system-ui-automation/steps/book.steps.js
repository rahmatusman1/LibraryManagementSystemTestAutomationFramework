const {Given, When, Then} = require ('@cucumber/cucumber');
const {expect} = require('@playwright/test');

Given('the user login with username {string} and password {string} successfully', async function (Username,Password) {
    await this.pageObjects.loginPage.navigate();
    await this.pageObjects.loginPage.fillInUsername(Username);
    await this.pageObjects.loginPage.fillInPassword(Password);
    await this.pageObjects.loginPage.clickOnSignInButton();
    expect(await this.pageObjects.homePage.isLogoutButtonDisplayed()).toBe(true);
  });

  Then('the user is displayed with the list of books available', async function () {
    const isBookListDisplayed = await this.pageObjects.homePage.isTheBookListDisplayed();
    expect(isBookListDisplayed).toBe(true);
});

  Given('the user clicks on add book button on home page', async function () {
      // Get initial book count
       //const initialCount = await this.pageObjects.homPage.getTotalBooksCount();
       this.initialBookCount = await this.pageObjects.homePage.getTotalBooksCount();
       await this.pageObjects.homePage.clickOnAddBook();
  });

  When('the user add a new book {string}, {string}, {string}, {string}, {string} and {string}', async function (Title, Author, Genre, ISBN, PublicationDate, Price) {
      await this.pageObjects.bookPage.navigate();
      await this.pageObjects.bookPage.fillInTitle(Title);
      await this.pageObjects.bookPage.fillInAuthor(Author);
      await this.pageObjects.bookPage.selectAGenre(Genre);
      await this.pageObjects.bookPage.fillInISBNNumber(ISBN);
      await this.pageObjects.bookPage.fillInpublicationdate(PublicationDate);
      await this.pageObjects.bookPage.fillInPrice(Price);

  });

  When('the user clicks on add book button', async function () {
        await this.pageObjects.bookPage.clickOnAddBookButton();
  });

  Then('a new book should be added to the book catalog', async function () {
       //Get the updated new book count
        const newBookCount = await this.pageObjects.homePage.getTotalBooksCount();

      // Assert that the count increased by 1
      expect(newBookCount).toBe(this.initialBookCount + 1);
  });

  Given('the user clicks on edit button', async function () {
    await this.pageObjects.homePage.clickOnFirstRowEditButton(); 
  });

  When('the user change existing title to a new title {string}', async function (NewTitle) {
    
    await this.pageObjects.bookPage.fillInNewTitle(NewTitle); 
  });

  When('the user clicks on saves changes button', async function () {
    await this.pageObjects.bookPage.clickOnSaveChangesBtn();
  });

  Then('the book title {string} is updated and should displayed', async function (NewTitle) {
    const updatedTitle = await this.pageObjects.homePage.getFirstRowTitle(); // Get title
    expect(updatedTitle).toBe(NewTitle); // Validate the title update
  });

  When('the user clicks on delete button', async function () {
    await this.pageObjects.homePage.clickOnFirstRowDeleteButton(); 
  });

  Then('the book should be deleted from the books list', async function () {
    //Get the updated new book count
    const newBookCount = await this.pageObjects.homePage.getTotalBooksCount();

    // Assert that the count reduced by 1
    expect(newBookCount).toBe(this.initialBookCount - 1);
  });


  Then('a validation error message "{string}" indicating the fields are required', async function (ErrorMessage) {
     // Check for
     const errorMessage = await this.pageObjects.bookPage.getErrorMessage();
      expect(errorMessage).toBe(ErrorMessage);
  });
