import puppeteer from 'puppeteer';
import * as cheerio from 'cheerio';
import axios from 'axios';
import fs from 'fs';
import {join} from 'path';

export const test = () => {
  const writeObjData = async res => {
    await fs.writeFile('output.html', JSON.stringify({data: res}), err => {
      if (err) throw err;
      console.log('File saved!');
    });
  };
  (async () => {
    let numPage = 1;
    let flag = true;
    let res: Array<unknown> = [];
    const url =
      'https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D1%8B%20intel&p=';
    const browser = await puppeteer.launch({
      headless: false,
      ignoreHTTPSErrors: true,
      args: ['--no-sandbox'],
    });
    const page = await browser.newPage();
    await page.setRequestInterception(true);

    await page.setViewport({width: 1400, height: 800});
    while (flag) {
      await page.goto(`${url}${numPage}`);
      await page.waitForSelector('e798o580.app-catalog-1bvjdtk.e1x8kbo0');
      const html = await page.evaluate(async () => {
        const page: Array<unknown> = [];
        try {
          const divs = document.querySelectorAll(
            'div .e1lqnfu30.app-catalog-d9ddvy.ejdpak00'
          );
          divs.forEach(async div => {
            const link = div.querySelector(
              'a.app-catalog-fjtfe3.e1lhaibo0'
            ).href;

            let title = div.querySelector(
              'a.app-catalog-9gnskf.e1259i3g0'
            ).title;

            const price = div.querySelector(
              'span.e1j9birj0.e106ikdt0.app-catalog-175fskm.e1gjr6xo0'
            ).innerText;

            const obj: Record<string, unknown> = {};
            title = title.split('Процессор')[1];
            title = title.split(',')[0];
            page.push((obj.title = {name: title, link: link, price: price}));
          });
        } catch (error) {
          console.log(error);
        }
        return page;
      });

      await res.push(html);
      numPage++;
      if (numPage === 3) {
        flag = false;
      }
    }
    res = res.flat();
    writeObjData(res);
    console.log(res);

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
