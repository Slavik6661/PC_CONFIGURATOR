import {Request, Response} from 'express';
import M2_SSD from '../dataBase/dbShema/M2_SSD';
export const getM2Ssd = async (req: Request, res: Response) => {
  const m2SsdGet = await M2_SSD.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(m2SsdGet);
};
