# 🧪 Health Care Assessment App

A simple health quiz app where users answer questions and get health recommendations by email.

## What it does
- Users fill out a health quiz
- App analyzes their answers  
- Sends personalized health tips via email
- Shows results instantly on screen

## Tech Stack
- **Frontend:** Next.js + TypeScript + Tailwind CSS
- **Backend:** Node.js + Express + MongoDB
- **Email:** Nodemailer

## Project Structure
```
Health-quiz/
├── backend/    # API server
└── client/     # Next.js app
```

## Setup Instructions

### What you need first
- Node.js 18+
- MongoDB running locally

### 1. Download the project
```bash
git clone https://github.com/sangam0207/Health-quiz.git
cd Health-quiz
```

### 2. Setup Backend
```bash
cd backend
npm install
```

Create a file called `.env` in the backend folder:
```
PORT=5000
MONGO_URI=mongodb://localhost:27017/health-assessment
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_password
```

Start the backend:
```bash
npm run dev
```
Backend runs at: http://localhost:5000

### 3. Setup Frontend
```bash
cd ../client
npm install
```

Create a file called `.env.local` in the client folder:
```
NEXT_PUBLIC_API_URL=http://localhost:5000
```

Start the frontend:
```bash
npm run dev
```
Frontend runs at: http://localhost:3000

## How to use
1. Go to http://localhost:3000
2. Click "Start Quiz"
3. Fill in your name, email, age
4. Answer the health questions
5. See your results instantly
6. Check your email for detailed report

## Main Features
- ✅ Quick health quiz (5 minutes)
- ✅ Instant results
- ✅ Email report with recommendations
- ✅ Works on mobile and desktop
- ✅ Secure and private

## API Endpoints

**Submit Quiz:**
```
POST /api/quiz/submit
```
Send quiz answers and get results

**Get Questions:**
```
GET /api/quiz/questions  
```
Get all quiz questions

## For Production

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
cd client
npm run build
npm run dev
```




---
Made with ❤️ for better health
