import express from 'express';
import {getCpu} from '../controllerts/cpuData';
export const router = express.Router();

router.post('/cpu', getCpu);

///router.get('/cpu', (req, res) => {});
module.exports = router;
