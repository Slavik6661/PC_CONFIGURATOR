import {Request, Response} from 'express';
import CPU from '../dataBase/dbShema/CPU';
import Motherboards from '../dataBase/dbShema/motherboards';
import GPU from '../dataBase/dbShema/GPU';
import Frame from '../dataBase/dbShema/Frame';
import RAM from '../dataBase/dbShema/RAM';
import PowerIN from '../dataBase/dbShema/PowerIN';
import CPU_FAN from '../dataBase/dbShema/CPU_FAN';
import HDD from '../dataBase/dbShema/HDD';
import SSD_SATA from '../dataBase/dbShema/SSD_SATA';
import M2_SSD from '../dataBase/dbShema/M2_SSD';
import jsonCPU from '../data/dataCPU.json';

export const getCpu = async (req: Request, res: Response) => {
  // const cpuFind = await CPU.find({model: 'AMD Ryzen 7 5800X'});
  const m2_ssd = new M2_SSD({
    Type: 'Solid State Drive',
    Model: 'Samsung 970 PRO',
    Manufacturer_company: 'Samsung',
    Volume: '1 TB',
    Key_M2_connector: 'M-Key',
    NVMe: true,
  });
  m2_ssd.save();
  res.send('OK');
};
