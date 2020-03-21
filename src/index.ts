import express from 'express';
import config from './config';

const main = async () => {
  const app = express();

  app.get('/api/test', (req, res) => res.json({ test: 'TEST' }));

  app.listen(config.port, () => console.log(`App listening at http://localhost:${config.port}`));
};

main();
