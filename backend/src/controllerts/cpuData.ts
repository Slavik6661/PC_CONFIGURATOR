import {Request, Response} from 'express';
import CPU from '../dataBase/dbShema/CPU';

import jsonCPU from '../data/dataCPU.json';

export const getCpu = async (req: Request, res: Response) => {
  const cpuGet = await CPU.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(cpuGet);
};
