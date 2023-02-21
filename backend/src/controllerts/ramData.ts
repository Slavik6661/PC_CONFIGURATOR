import {Request, Response} from 'express';
import RAM from '../dataBase/dbShema/RAM';
export const getRam = async (req: Request, res: Response) => {
  const ramGet = await RAM.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(ramGet);
};
