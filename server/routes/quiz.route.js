import express from 'express';
const router = express.Router();
import { getQuestions, submitQuiz } from '../controllers/quiz.controller.js';

router.get('/questions', getQuestions);
router.post('/submit', submitQuiz);

export default router;
