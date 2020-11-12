import express from 'express';

import cors from 'cors';

import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

// Usar a porta que esta dentro do paramêtro
app.listen(3333)