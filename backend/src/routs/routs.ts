import express from 'express';
import {getCpu} from '../controllerts/cpuData';
import {getCpuFan} from '../controllerts/cpuFanData';
import {getFrame} from '../controllerts/frameData';
import {getGpu} from '../controllerts/gpuData';
import {getHdd} from '../controllerts/hddData';
import {getM2Ssd} from '../controllerts/m2SsdData';
import {getMotherboards} from '../controllerts/motherboardData';
import {getPowerIN} from '../controllerts/powerInData';
import {getRam} from '../controllerts/ramData';
import {getSsdSata} from '../controllerts/ssdData';
export const router = express.Router();

router.get('/cpu', getCpu);
router.get('/mb', getMotherboards);
router.get('/frame', getFrame);
router.get('/gpu', getGpu);
router.get('/ram', getRam);
router.get('/power', getPowerIN);
router.get('/hdd', getHdd);
router.get('/ssdSata', getSsdSata);
router.get('/ssdM2', getM2Ssd);

//router.get('/cpu', (req, res) => {});
export default router;
