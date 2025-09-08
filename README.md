┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃                    HEALTH CARE ASSESSMENT APP (README)              ┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
Simple health quiz: users enter details, take a quiz, and receive an email
recommendation.

STACK
  • Backend: Node.js + Express + MongoDB
  • Frontend: Next.js (TypeScript, Tailwind CSS)

FOLDER TREE
  Health-quiz/
  ├─ backend/   (API server)
  └─ client/    (Next.js app)

PREREQUISITES
  • Node.js 18+
  • MongoDB running locally (or MongoDB Atlas URL)

────────────────────────────────────────────────────────────────────────
QUICK START
1) Clone
   $ git clone https://github.com/sangam0207/Health-quiz.git
   $ cd Health-quiz

2) Backend Setup
   $ cd backend
   $ npm install

   Create file: backend/.env
   --------------------------------------------------------------------
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/health-assessment
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_password
   --------------------------------------------------------------------

   Start backend
   $ npm run dev
   API → http://localhost:5000

3) Frontend Setup
   $ cd ../client
   $ npm install

   Create file: client/.env.local
   --------------------------------------------------------------------
   NEXT_PUBLIC_API_URL=http://localhost:5000
   --------------------------------------------------------------------

   Start frontend
   $ npm run dev
   App → http://localhost:3000

────────────────────────────────────────────────────────────────────────
BUILD (PRODUCTION)

Backend
  $ cd backend
  $ npm run build
  $ npm start

Frontend
  $ cd client
  $ npm run build
  $ npm start

────────────────────────────────────────────────────────────────────────


