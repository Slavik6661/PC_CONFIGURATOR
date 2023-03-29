import {Request, Response} from 'express';
import puppeteer from 'puppeteer';
import axios from 'axios';
import fs from 'fs';
import CPU from '../dataBase/dbShema/CPU';

export const getCpu = async (req: Request, res: Response) => {
  const cpuGet = await CPU.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(cpuGet);
};

export const parsDataCpu = async (req: Request, res: Response) => {
  const writeObjData = async (data: unknown[]) => {
    await fs.writeFile('output.json', JSON.stringify({data}), err => {
      if (err) throw err;
      console.log('File saved!');
    });
  };

  (async () => {
    let numPage = 1;
    let flag = true;
    let resData: Array<unknown> = [];
    const decoded = await decodeURIComponent(
      '%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D1%8B%20'
    );
    console.log(decoded);
    encodeURIComponent;

    const url =
      'https://www.citilink.ru/search/?text=%D0%BF%D1%80%D0%BE%D1%86%D0%B5%D1%81%D1%81%D0%BE%D1%80%D1%8B%20intel&p=';
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
            title = title.split('Процессор')[1];
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
      if (numPage === 1) {
        flag = false;
      }
      numPage++;
    }
    resData = resData.flat();
    writeObjData(resData);
  })();
};
