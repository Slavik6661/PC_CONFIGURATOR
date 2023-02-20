import path from 'path';
import dotenv from 'dotenv';
dotenv.config({path: path.join(__dirname, '../.env')});

import express from 'express';
import router from './routs/routs';
import {mongoConnect} from './dataBase/connection';
const app = express();
const PORT = process.env.PORT;
mongoConnect();
app.use('/', router);
// app.get('/', (req, res) => {
//   res.send('hello world!!');
// });

app.listen(PORT, () => {
  console.log(`${PORT} Server is running....`);
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
