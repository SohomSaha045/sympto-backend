// Import required modules
const puppeteer = require('puppeteer-core');
const chromium = require('@sparticuz/chromium-min');
const cheerio = require("cheerio");


// Define the scraper function
async function scrapeWebsite() {
    // Launch a headless browser
    const browser = await puppeteer.launch(
        {
            args: [...chromium.args, '--hide-scrollbars', '--disable-web-security'],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath(
      `https://github.com/Sparticuz/chromium/releases/download/v116.0.0/chromium-v116.0.0-pack.tar`
    ),
    headless: chromium.headless,
    ignoreHTTPSErrors: true,
        }
    );

    // Create a new page
    const page = await browser.newPage();

    // Navigate to the target website
    await page.goto('https://google.com');

    // Extract desired information
    const $ = cheerio.load(html);

    // Close the browser
    await browser.close();

    // Return the scraped data
    console.log($);
    return {
        "status":"success"
    };
}

// Export the scraper function for use in other modules
module.exports = scrapeWebsite;
