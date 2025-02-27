//const {expect} = require('@playwright/test');
const {test, expect,locator,page} = require('@playwright/test'); 
 class BookPage{
        constructor(page)
        {
            this.page = page;
            this.title = page.locator("[id='title']");
            this.author = page.locator("[id='author']");
            this.isbn = page.locator("[id='isbn']");
            this.selectGenreOption = page.locator("[id='genre']");
            this.publicationDate = page.locator("[id='publicationDate']");
            this.price = page.locator("[id='price']");
            this.addBook = page.locator("[type='submit']");
            this.assertiveErrorMessage = page.locator("[aria-live='assertive'] li");
            this.saveChanges = page.locator("[id='save-changes']");
            this.editTitle = page.locator("[id='edit-title']")

        }

        async navigate()
        {
            await this.page.goto(process.env.BOOK_URL);
        }

        async fillInTitle(titleName)
        {
          await this.title.fill(titleName)
        }

        async fillInAuthor(authorName)
        {
            await this.author.fill(authorName);
        }  

        async fillInISBNNumber(isbnNumber)
        {
            await this.isbn.fill(isbnNumber);
        }

        async selectAGenre(optionValue)
        {
            await this.selectGenreOption.selectOption(optionValue);
        }

        async fillInpublicationdate(publicationDate) {
            await this.publicationDate.fill(publicationDate);
        }
        
        async fillInPrice(price)
        {
            await this.price.fill(price);
        }

        async clickOnAddBookButton()
        {
            await this.addBook.click();
        }

        async getErrorMessage() {
            return await this.assertiveErrorMessage.textContent();
        }

        async clickOnSaveChangesBtn(){
            await this.saveChanges.click();
        }

        async fillInNewTitle(newTitle)
        {
            await this.editTitle.fill(newTitle);
        }



    }
    module.exports =BookPage;
