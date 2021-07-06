
import path from 'path';
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))


app.get('/', function (req, res) {
    // return res.send('Jeesh! You reached the server 😊😊')
    return res.sendFile(path.join(__dirname + '/src/templates/index.html'));
});


app.listen(PORT, () =>
  console.log(` Running on port ${PORT} `),
);
