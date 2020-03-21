import express from 'express';

const main = async () => {
  const app = express();

  app.get('/api/test', (req, res) => res.json({ test: 'TEST' }));

  app.listen(5000, () => console.log('App listening at http://localhost:5000'));
};

main();