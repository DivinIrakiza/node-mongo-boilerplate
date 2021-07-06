
import path from 'path';
import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import swaggerJSDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();


const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Node Express API Documentation',
            version: '1.0.0',
            description: 'Node Express API Documentation',
        },
        schemes: ['http'],
        host: 'localhost:4008',
        basePath: '/',
        securityDefinitions: {
            bearerAuth: {
                type: 'apiKey',
                name: 'Authorization',
                scheme: 'bearer',
                in: 'header',
            },
        },
    },
    apis: ["main.js", "./routes/**/*.js", "./routes/**/**/*.js", "./models/**/*.js", "./models/**/**/*.js"],
};

  
  
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'))
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));


app.get('/', function (req, res) {
    // return res.send('Jeesh! You reached the server 😊😊')
    return res.sendFile(path.join(__dirname + '/src/templates/index.html'));
});


app.listen(PORT, () =>
  console.log(` Running on port ${PORT} `),
);
