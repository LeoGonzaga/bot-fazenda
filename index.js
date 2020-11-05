const puppeteer = require("puppeteer");

(async () => {
  let count = 0;
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto("https://afazenda.r7.com/a-fazenda-12/votacao");

  await page.waitForSelector('[data-id="619"]');
  await page.click('[data-id="619"]');

  await page.waitForSelector(".voting-button");
  await page.click(".voting-button");

  while (1) {
    await page.waitForSelector('[data-element="button-vote-again"]');
    await page.click('[data-element="button-vote-again"]');

    await page.waitForSelector('[id="619"]');
    await page.click('[id="619"]');

    await page.waitForSelector('[data-element="card-selectable-vote"]');
    await page.click('[data-element="card-selectable-vote"]');
    count++;
    console.log(count);
  }

  //await browser.close();
})();
