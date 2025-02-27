const {Before, After, setDefaultTimeout, AfterStep} = require ('@cucumber/cucumber');
const fs = require('fs');

setDefaultTimeout(60000); // Set timeout to 60 seconds

Before(async function(){
    await this.initPageObjects();
   
});

After(async function(){
    await this.closeBrowser();
});

AfterStep(async function (scenario) {
    const screenshotPath = `screenshots/step-${Date.now()}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
    console.log(`📸 Screenshot saved: ${screenshotPath}`);
});
