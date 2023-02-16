import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
const app = express();
dotenv.config({path: path.join(__dirname, '../.env')});
const PORT = process.env.PORT;
app.get('/', (req, res) => {
  res.send('hello world!');
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
