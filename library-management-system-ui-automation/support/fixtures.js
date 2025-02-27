const { setWorldConstructor } = require('@cucumber/cucumber');
const { chromium, firefox, webkit } = require('playwright');
const config = require('../support/config');
const LoginPage = require('../pages/loginPage');
const BookPage = require('../pages/bookPage');
const HomePage = require('../pages/homePage');


class CustomWorld {
  constructor() {
    this.browser = null;
    this.page = null;
    this.pageObjects = {};
  }

  async initPageObjects() {
    const browserType = { chromium, firefox, webkit }[config.browser.type];
    this.browser = await browserType.launch({ headless: config.browser.headless });

    const context = await this.browser.newContext();
    this.page = await context.newPage();

    // Initialize page objects
    this.pageObjects.homePage = new HomePage(this.page, config.urls.homeUrl);
    this.pageObjects.loginPage = new LoginPage(this.page, config.urls.baseUrl);
    this.pageObjects.bookPage = new BookPage(this.page, config.urls.bookUrl);

  }

  getPageObject(pageName){
    const page = this.pageObjects[pageName];
    if(!page){
        throw new Error(`Page Object "${pageName}" does not exist.`)
    }
    return page;
  }

  async closeBrowser() {
    if (this.browser) {
      await this.browser.close();
    }
  }
}

setWorldConstructor(CustomWorld);
