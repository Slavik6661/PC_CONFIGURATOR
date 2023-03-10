import path from 'path';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

dotenv.config({path: path.join(__dirname, '../.env')});

import express from 'express';
import router from './routs/routs';
import {mongoConnect} from './dataBase/connection';
const app = express();
const PORT = process.env.PORT;
mongoConnect();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../../frontend/dist')));

app.use('/', router);

app.listen(PORT, () => {
  console.log(`${PORT} Server is running....`);
});
