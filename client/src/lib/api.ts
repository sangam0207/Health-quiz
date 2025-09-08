const API_URL = process.env.NEXT_PUBLIC_API_URL||"https://health-quiz.onrender.com/api";

export async function fetchQuestions() {
  const res = await fetch(`${API_URL}/quiz/questions`);
  if (!res.ok) throw new Error("Failed to fetch questions");
  return res.json();
}

export async function submitQuiz(data: any) {
  const res = await fetch(`${API_URL}/quiz/submit`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to submit quiz");
  return res.json();
}
