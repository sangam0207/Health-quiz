// controllers/quiz.controller.js
import nodemailer from "nodemailer";
import Quiz from "../models/quiz.model.js";
import { zeptoTransporter as mailer } from "../config/mailer.js"; // your Gmail transport
import { quizQuestions, getRiskLevel, getRecommendation } from "../utils/quiz.helper.js";
import { quizEmail } from "../utils/email.templates.js";

// GET: Questions
export const getQuestions = (req, res) => {
  res.json({ success: true, data: quizQuestions });
};

// POST: Submit Quiz
export const submitQuiz = async (req, res) => {
  try {
    const { userEmail, userName, age, responses } = req.body;

    // Basic validation
    if (!userEmail || !userName || !age || !responses || typeof responses !== "object") {
      return res.status(400).json({ success: false, message: "Missing or invalid fields" });
    }

    // Score
    let totalScore = 0;
    const processedResponses = {};

    for (const [qid, ans] of Object.entries(responses)) {
      const q = quizQuestions[qid];
      const score = q?.options?.[ans] ?? 0;
      processedResponses[qid] = {
        question: q?.question || qid,
        answer: ans,
        score,
      };
      totalScore += Number(score) || 0;
    }

    const riskLevel = getRiskLevel(totalScore);
    const recommendation = getRecommendation(riskLevel);

    // Save
    const quiz = await Quiz.create({
      userEmail,
      userName,
      age: Number(age),
      responses: processedResponses,
      totalScore,
      riskLevel,
      recommendation,
    });

    // Build pretty email (HTML + text)
    const answers = Object.keys(processedResponses).map((k) => processedResponses[k]);
    const { subject, text, html } = quizEmail({
      userName,
      totalScore,
      riskLevel,
      recommendation,
      answers,
      brand: {
        name: process.env.BRAND_NAME || "Pharma Quiz",
        support: process.env.BRAND_SUPPORT || "support@example.com",
      },
    });

    let emailSent = false;
    let previewUrl = null;

    try {
      const info = await mailer.sendMail({
        from: `"${process.env.FROM_NAME || "Health Quiz"}" <${process.env.FROM_EMAIL || process.env.GMAIL_USER || process.env.SMTP_USER}>`,
        to: userEmail,
        subject,
        text,
        html,
        headers: { "X-Entity-Ref-ID": String(quiz._id) },
      });
      emailSent = true;
      previewUrl = nodemailer.getTestMessageUrl?.(info) || null;
      console.log("Email sent:", info.messageId, previewUrl ? `Preview: ${previewUrl}` : "");
    } catch (mailErr) {
      console.error("Email send failed:", mailErr.message);
    }

    return res.status(201).json({
      success: true,
      data: { quizId: quiz._id, totalScore, riskLevel, recommendation, emailSent, previewUrl },
    });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Internal server error", error: err.message });
  }
};
