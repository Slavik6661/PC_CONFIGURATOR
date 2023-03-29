import puppeteer from 'puppeteer';
import axios from 'axios';
import fs from 'fs';
import {join} from 'path';

export const test = () => {
  const writeObjData = async (data: unknown[], company: string) => {
    await fs.writeFile(`output${company}.json`, JSON.stringify({data}), err => {
      if (err) throw err;
      console.log('File saved!');
    });
  };
  (async () => {
    let numPage = 1;
    let flag = true;
    let resData: Array<unknown> = [];
    const company = 'motherBord';
    const decoded = await decodeURIComponent(
      '%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D1%8B%20'
    );
    console.log(decoded);
    encodeURIComponent;

    const url =
      'https://www.citilink.ru/search/?text=%D0%BC%D0%B0%D1%82%D0%B5%D1%80%D0%B8%D0%BD%D1%81%D0%BA%D0%B8%D0%B5%20%D0%BF%D0%BB%D0%B0%D1%82%D1%8B&p=';
    const browser = await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      args: ['--no-sandbox'],
    });
    const page = await browser.newPage();

    await page.setViewport({width: 1400, height: 800});

    while (flag) {
      await page.goto(`${url}${numPage}`);

      const html = await page.evaluate(async () => {
        const page: Array<unknown> = [];
        try {
          const divs = document.querySelectorAll(
            'div .e1lqnfu30.app-catalog-d9ddvy.ejdpak00'
          );

          divs.forEach(async div => {
            const link = (
              div.querySelector(
                'a.app-catalog-fjtfe3.e1lhaibo0'
              ) as HTMLAnchorElement
            )?.href;

            let title = (
              div.querySelector(
                'a.app-catalog-9gnskf.e1259i3g0'
              ) as HTMLAnchorElement
            )?.title;

            const price = (
              div.querySelector(
                'span.e1j9birj0.e106ikdt0.app-catalog-175fskm.e1gjr6xo0'
              ) as HTMLAnchorElement
            )?.innerText;

            let obj: Record<string, unknown> = {};
            title = title.split('Материнская плата')[1];
            title = title.split(',')[0];
            obj = {name: title, link: link, price: price};
            page.push(obj);
          });
        } catch (error) {
          console.log(error);
        }
        return page;
      });

      await resData.push(html);
      if (numPage === 8) {
        flag = false;
        await browser.close();
      }
      numPage++;
    }
    resData = resData.flat();
    writeObjData(resData, company);
  })();
};

// const numPage = 1;
// const flag = true;
// const res = [];
// const browser = await puppeteer.launch({
//   headless: false,
//   ignoreHTTPSErrors: true,
//   args: ['--no-sandbox'], ///'--proxy-server=socks5://98.162.25.7:31653' ----///'--proxy-server=https://20.111.54.16:80'
// });
//const page = await browser.newPage();
//await page.setRequestInterception(true);
//await page.goto(`https://www.citilink.ru/catalog/processory/?p=${numPage}`);
// await page.goto(
//('https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80+amd');
//);
// await page.setViewport({width: 1400, height: 800});
// await page.waitForSelector('input[name="text"]');
// await page.type('input[name="text"]', 'amd ryzen 5 5600x', {
//   delay: 100,
// });
// await page.waitForSelector('.css-c064wa.ebli37a0');
// await page.click('.css-c064wa.ebli37a0', {
//   button: 'left',
//   clickCount: 1,
//   delay: 100,
// });
// await page.waitForNavigation();
// await page.screenshot({path: 'google.png'});
// await browser.close();

// await page.waitForSelector('input[name="text"]');
// await page.type('input[name="text"]', 'amd ryzen 5 5600x', {
//   delay: 100,
// });
// await page.waitForSelector('.app-catalog-sjv9i2 e8bog4b0');
// await page.click('.css-c064wa.ebli37a0', {
//   button: 'left',
//   clickCount: 1,
//   delay: 100,
// });
// await page.waitForNavigation();
// await page.screenshot({path: 'google.png'});
// await browser.close();

//const html = await fs.promises.readFile('output.html', 'utf8');
//const $ = await cheerio.load(html.data);
// const productItems = $('.product-item__content');
// console.log(productItems);
// const data: Record<string, unknown> = {};
// productItems.each((i, element) => {
//   data['href'] = {href: $(element).find('a').attr('href')};
// });
// console.log(data);

// const htmlWrte = $.html();
// await fs.writeFile('output2.html', htmlWrte, err => {
//   if (err) throw err;
//   console.log('File saved!');
// });
