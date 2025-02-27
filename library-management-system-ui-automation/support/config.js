require('dotenv').config(); // Load variables from .env file

module.exports = {
  // URLs for different pages
  urls: {
    //baseUrl: process.env.BASE_URL,
    bookUrl: process.env.BOOK_URL,
    homeUrl: process.env.HOME_URL,
    baseUrl: process.env.BASE_URL,
  },

  // Browser settings
  browser: {
    type: process.env.BROWSER || 'chromium', // chromium, firefox, webkit
    headless: process.env.HEADLESS === 'true', // true for headless, false otherwise
  },

  // Test-specific settings
  testSettings: {
    slowMo: parseInt(process.env.SLOW_MO || '0', 10), // Slow down Playwright actions for debugging
    timeout: parseInt(process.env.TIMEOUT || '50000', 10), // Default timeout for actions
  },
};