import express from 'express';
import {getCpu} from '../controllerts/cpuData';
export const router = express.Router();

router.get('/cpu', getCpu);

//router.get('/cpu', (req, res) => {});
export default router;
