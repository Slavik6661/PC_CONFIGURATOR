import {Request, Response} from 'express';
import jsonCPU from '../data/dataCPU.json';
//import CPU from '../dataBase/dbShema/CPU';
export const getCpu = async (req: Request, res: Response) => {
  console.log(jsonCPU);
  res.send();
  //const findCpu = await CPU.find({});
};
