
import path from 'path';
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
import swaggerOptions from './config/swagger.config.js';
import connectDB from './config/db.config.js';


const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();
const swaggerSpec = swaggerJSDoc(swaggerOptions);
connectDB();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('tiny'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', function (req, res) {
    return res.sendFile(path.join(__dirname + '/src/templates/index.html'));
});


app.listen(PORT, () =>
  console.log(`Running on port ${PORT} `),
);
