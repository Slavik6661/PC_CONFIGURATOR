import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import {router} from './routs/routs';
import {mongoConnect} from './dataBase/connection';
const app = express();
dotenv.config({path: path.join(__dirname, '../.env')});
const PORT = process.env.PORT;
mongoConnect();
app.use(router);
app.get('/', (req, res) => {
  res.send('hello world!!');
});

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
