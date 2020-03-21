import express from 'express';
import config from './config';
import api from './api';

const app = express();

app.use('/api/v1', api);

app.listen(config.port, () => console.log(`App listening at http://localhost:${config.port}`));
