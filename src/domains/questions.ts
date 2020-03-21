import express, { Router } from 'express';
import getDb from '../database';

const questionsController = Router();

questionsController.post('/create', async (req, res) => {
  // Needs authentication and input validation in the future
  await (await getDb()).collection('questions').insertOne(req.body);
  res.json(req.body);
});

export default questionsController;
