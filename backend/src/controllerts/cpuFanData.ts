import {Request, Response} from 'express';
import CPU_FAN from '../dataBase/dbShema/CPU_FAN';
export const getCpuFan = async (req: Request, res: Response) => {
  const cpuFanGet = await CPU_FAN.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(cpuFanGet);
};
