import {Request, Response} from 'express';
import HDD from '../dataBase/dbShema/HDD';
export const getHdd = async (req: Request, res: Response) => {
  const hddGet = await HDD.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(hddGet);
};
