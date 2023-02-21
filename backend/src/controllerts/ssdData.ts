import {Request, Response} from 'express';
import SSD_SATA from '../dataBase/dbShema/SSD_SATA';
export const getSsdSata = async (req: Request, res: Response) => {
  const ssdSataGet = await SSD_SATA.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(ssdSataGet);
};
