"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = __importDefault(require("express"));
var cpuData_1 = require("../controllerts/cpuData");
exports.router = express_1.default.Router();
exports.router.post('/cpu', cpuData_1.getCpu);
///router.get('/cpu', (req, res) => {});
module.exports = exports.router;