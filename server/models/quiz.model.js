import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema({
  userEmail: { type: String, required: true, lowercase: true, trim: true },
  userName: { type: String, required: true, trim: true },
  age: { type: Number, required: true, min: 18, max: 100 },
  responses: Object, // store question, answer, score
  totalScore: { type: Number, required: true },
  riskLevel: { type: String, enum: ['Low', 'Medium', 'High'], required: true },
  recommendation: Object,
  completedAt: { type: Date, default: Date.now },
});

const quiz=mongoose.model('Quiz', quizSchema);
export default quiz;
