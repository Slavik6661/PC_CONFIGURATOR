import {Request, Response} from 'express';
import GPU from '../dataBase/dbShema/GPU';
export const getGpu = async (req: Request, res: Response) => {
  const gpuGet = await GPU.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(gpuGet);
};
