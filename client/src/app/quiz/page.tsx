import QuizForm from "@/components/QuizForm";
import { fetchQuestions } from "@/lib/api";

export default async function QuizPage() {
  const data = await fetchQuestions();
  return (
    <div className="p-8">
      <QuizForm questions={data.data} />
    </div>
  );
}
