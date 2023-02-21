"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var cpuData_1 = require("../controllerts/cpuData");
var frameData_1 = require("../controllerts/frameData");
var gpuData_1 = require("../controllerts/gpuData");
var hddData_1 = require("../controllerts/hddData");
var m2SsdData_1 = require("../controllerts/m2SsdData");
var motherboardData_1 = require("../controllerts/motherboardData");
var powerInData_1 = require("../controllerts/powerInData");
var ramData_1 = require("../controllerts/ramData");
var ssdData_1 = require("../controllerts/ssdData");
exports.router = express_1.default.Router();
exports.router.get('/cpu', cpuData_1.getCpu);
exports.router.get('/mb', motherboardData_1.getMotherboards);
exports.router.get('/frame', frameData_1.getFrame);
exports.router.get('/gpu', gpuData_1.getGpu);
exports.router.get('/ram', ramData_1.getRam);
exports.router.get('/power', powerInData_1.getPowerIN);
exports.router.get('/hdd', hddData_1.getHdd);
exports.router.get('/ssdSata', ssdData_1.getSsdSata);
exports.router.get('/ssdM2', m2SsdData_1.getM2Ssd);
//router.get('/cpu', (req, res) => {});
exports.default = exports.router;
