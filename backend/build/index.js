"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: path_1.default.join(__dirname, '../.env') });
var express_1 = __importDefault(require("express"));
var routs_1 = __importDefault(require("./routs/routs"));
var connection_1 = require("./dataBase/connection");
var app = (0, express_1.default)();
var PORT = process.env.PORT;
(0, connection_1.mongoConnect)();
app.use('/', routs_1.default);
// app.get('/', (req, res) => {
//   res.send('hello world!!');
// });
app.listen(PORT, function () {
    console.log("".concat(PORT, " Server is running...."));
});
// "allowUnreachableCode": false,
//     "allowUnusedLabels": false,
//     "declaration": true,
//     "forceConsistentCasingInFileNames": true,
//     "lib": ["es2018"],
//     "module": "commonjs",
//     "noEmitOnError": true,
//     "noFallthroughCasesInSwitch": true,
//     "noImplicitReturns": true,
//     "pretty": true,
//     "sourceMap": true,
//     "strict": true,
//     "target": "es2018"
