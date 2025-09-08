# 🩺 Health Care Assessment App

![Node](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-6.x-47A248?logo=mongodb&logoColor=white)
![Next.js](https://img.shields.io/badge/Next.js-14+-000000?logo=nextdotjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-00B16A)

A full-stack health quiz where users enter details, take a quick assessment, and receive **personalized health recommendations via email**.

**Monorepo**
- `Health-quiz/`
  - `backend/` — Node.js + Express + MongoDB
  - `client/` — Next.js (TypeScript, Tailwind CSS)

---

## ✨ Features

- 🔐 Simple user intake (name, email, age)
- 🧩 Quiz → score → risk level → recommendation
- 📬 Email delivery via SMTP (configurable)
- 🗃️ MongoDB persistence for responses
- ⚡ Clean REST API with CORS-ready setup
- 🎨 Next.js (TS + Tailwind) frontend

---

## 🗂️ Project Structure

Health-quiz/
├── backend/ # Node.js + Express API
│ ├── src/
│ │ ├── config/ # db, mailer, env
│ │ ├── controllers/ # request handlers
│ │ ├── models/ # Mongoose schemas
│ │ ├── routes/ # /api endpoints
│ │ ├── utils/ # quiz logic, helpers
│ │ └── server.ts # app bootstrap
│ ├── package.json
│ └── .env.example
└── client/ # Next.js frontend (TS + Tailwind)
├── app/ or pages/
├── components/
├── lib/
├── package.json
└── .env.local.example

yaml
Copy code

---

## 🧭 Architecture

```mermaid
flowchart LR
  A[User] --> B[Next.js Client]
  B -->|POST /api/quiz/submit| C[Express API]
  C --> D[(MongoDB)]
  C --> E[SMTP Server]
  C -->|JSON response| B
  E -->|Email with recommendation| A
🚀 Quick Start
1) Clone
bash
Copy code
git clone https://github.com/sangam0207/Health-quiz.git
cd Health-quiz
2) Backend Setup
bash
Copy code
cd backend
npm install
Create .env in backend/:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/health-assessment
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
Run dev server:

bash
Copy code
npm run dev
# ➜ http://localhost:5000
3) Frontend Setup
bash
Copy code
cd ../client
npm install
Create .env.local in client/:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000
Run dev app:

bash
Copy code
npm run dev
# ➜ http://localhost:3000
📦 Production
Backend

bash
Copy code
cd backend
npm run build
npm start
Frontend

bash
Copy code
cd client
npm run build
npm start
