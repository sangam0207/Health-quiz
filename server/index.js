import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

import { connectDB } from './config/db.js';
import quizRoutes from './routes/quiz.route.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB();


app.use('/api/quiz', quizRoutes);


app.get('/api/health', (req, res) => {
  res.json({ success: true, message: 'Pharma Quiz API is running' });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: 'Endpoint not found' });
});


app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ success: false, message: 'Internal Server Error' });
});

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
