🩺 Health Care Assessment App

This project is a full-stack application with a Next.js frontend and a Node.js + Express backend.
Users can enter personal details, take a quiz, and receive a health assessment with recommendations.

📂 Project Structure
health-care-assessment/
│── backend/   # Node.js + Express API
│── client/    # Next.js frontend

⚙️ Setup Instructions
1. Clone the repository
git clone https://github.com/<sangam0207>/health-care-assessment.git
cd health-care-assessment

2. Backend Setup
cd backend
npm install


Create a .env file inside backend/:

PORT=5000
MONGO_URI=mongodb://localhost:27017/health-assessment
SMTP_HOST=smtp.example.com
SMTP_PORT=465
SMTP_USER=your_email@example.com
SMTP_PASS=your_password


Run the backend:

npm run dev

3. Frontend Setup
cd client
npm install


Create a .env.local file inside client/:

NEXT_PUBLIC_API_URL=http://localhost:5000


Run the frontend:

npm run dev


App will be available at: http://localhost:3000

📦 Build for Production

Frontend:

cd client
npm run build
npm run dev


Backend:

cd backend
npm run build
npm start


✅ That’s it — both frontend and backend are ready to run!
