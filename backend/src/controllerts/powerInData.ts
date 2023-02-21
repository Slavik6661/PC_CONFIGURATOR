import {Request, Response} from 'express';
import PowerIN from '../dataBase/dbShema/PowerIN';
export const getPowerIN = async (req: Request, res: Response) => {
  const powerInGet = await PowerIN.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(powerInGet);
};
