 🩺 Health Care Assessment App

A full-stack health quiz application where users can enter their details, take a quiz, and receive personalized health recommendations via email.  

- **Frontend:** Next.js (TypeScript, Tailwind CSS)  
- **Backend:** Node.js + Express + MongoDB  

---

## 📂 Project Structure

Health-quiz/
│── backend/ # Node.js + Express API
│── client/ # Next.js frontend

yaml
Copy code

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/sangam0207/Health-quiz.git
cd Health-quiz
2. Backend Setup
Go to backend folder:

bash
Copy code
cd backend
npm install
Create a .env file inside backend/:

env
Copy code
PORT=5000
MONGO_URI=mongodb://localhost:27017/health-assessment
SMTP_HOST=smtp.example.com
SMTP_PORT=587
SMTP_USER=your_email@example.com
SMTP_PASS=your_password
Start the backend:

bash
Copy code
npm run dev
Server runs on 👉 http://localhost:5000

3. Frontend Setup
Go to client folder:

bash
Copy code
cd client
npm install
Create .env.local inside client/:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:5000
Start the frontend:

bash
Copy code
npm run dev
App runs on 👉 http://localhost:3000

📦 Build for Production
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
📝 Notes
Make sure MongoDB is running locally, or update MONGO_URI to use a cloud DB like Atlas.

Update your SMTP credentials (SMTP_HOST, SMTP_USER, SMTP_PASS) to send emails.

Frontend expects the backend URL in NEXT_PUBLIC_API_URL.

✅ Now your README is complete in one single file for both frontend and backend.
