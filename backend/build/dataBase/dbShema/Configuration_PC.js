"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var Configuration_PC = new mongoose_1.Schema({
    Email: { type: String, unique: true },
    Password: String,
    Configuration_PC: [],
});
exports.default = (0, mongoose_1.model)('Configuration_PC', Configuration_PC);
