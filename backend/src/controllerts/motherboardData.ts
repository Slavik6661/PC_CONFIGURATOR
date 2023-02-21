import {Request, Response} from 'express';
import motherboards from '../dataBase/dbShema/motherboards';
export const getMotherboards = async (req: Request, res: Response) => {
  const motherboardGet = await motherboards.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(motherboardGet);
};
