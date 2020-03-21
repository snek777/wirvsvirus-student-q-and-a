import express, { Router } from 'express';
import questionsController from './domains/questions';

const api = Router();

api.use(express.json());
api.use('/questions', questionsController);

export default api;
