# Health Care Assessment App

A simple health quiz app. Users enter basic details, take a quiz, and get a recommendation by email.

TECH
- Backend: Node.js + Express + MongoDB
- Frontend: Next.js (TypeScript, Tailwind CSS)

FOLDER STRUCTURE
Health-quiz/
├─ backend/   (API server)
└─ client/    (Next.js app)

PREREQUISITES
- Node.js 18+
- MongoDB running locally (or a MongoDB Atlas URL)

SETUP

1) Clone
$ git clone https://github.com/sangam0207/Health-quiz.git
$ cd Health-quiz

2) Backend Setup
$ cd backend
$ npm install
Create file backend/.env with:
PORT=5000
MONGO_URI=mongodb://localhost:27017/health-assessment
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
Start the backend:
$ npm run dev
API: http://localhost:5000

3) Frontend Setup
$ cd ../client
$ npm install
Create file client/.env.local with:
NEXT_PUBLIC_API_URL=http://localhost:5000
Start the frontend:
$ npm run dev
App: http://localhost:3000

BUILD FOR PRODUCTION

Backend:
$ cd backend
$ npm run build
$ npm start

Frontend:
$ cd client
$ npm run build
$ npm start


