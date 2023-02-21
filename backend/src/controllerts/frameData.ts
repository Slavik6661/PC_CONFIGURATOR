import {Request, Response} from 'express';
import Frame from '../dataBase/dbShema/Frame';
export const getFrame = async (req: Request, res: Response) => {
  const frameGet = await Frame.find({});
  // const m2_ssd = new CPU({});
  // m2_ssd.save();
  res.send(frameGet);
};
