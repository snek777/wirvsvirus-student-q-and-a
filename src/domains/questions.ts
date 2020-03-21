import { Router } from 'express';
import getDb from '../database';

const questionsController = Router();

questionsController.post('/create', async (req, res) => {
  // Needs authentication and input validation in the future
  await (await getDb()).collection('questions').insertOne(req.body);
  res.json(req.body);
});

questionsController.get('/list', async (req, res) => {
  const questions = await (await getDb())
    .collection('questions')
    .find({})
    .toArray();
  res.json(questions);
});

export default questionsController;
