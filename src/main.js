import 'dotenv/config';
import express from 'express';

const app = express();
 

const PORT = process.env.PORT;




app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(cors());



app.listen(PORT, () =>
  console.log(` Running on port ${PORT} `),
);
