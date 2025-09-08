
"use client";
import { useState } from "react";
import { QuizQuestions, QuizResponses } from "@/types/quiz";
import { submitQuiz } from "@/lib/api";
import { useRouter } from "next/navigation";

interface QuizFormProps {
  questions: QuizQuestions;
}

export default function QuizForm({ questions }: QuizFormProps) {
  const [responses, setResponses] = useState<QuizResponses>({});
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [age, setAge] = useState<number>(25);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [completionPercentage, setCompletionPercentage] = useState(0);
  
  const router = useRouter();
  
  const totalQuestions = Object.keys(questions).length + 3; 
  
  // Calculate completion percentage
  const calculateCompletion = () => {
    let completed = 0;
    if (userName.trim()) completed++;
    if (userEmail.trim()) completed++;
    if (age >= 1) completed++;
    completed += Object.keys(responses).length;
    
    const percentage = Math.round((completed / totalQuestions) * 100);
    setCompletionPercentage(percentage);
  };

  const handleChange = (q: string, value: string) => {
    setResponses((prev) => ({ ...prev, [q]: value }));
    setTimeout(calculateCompletion, 0);
  };

  const handleInputChange = (field: string, value: string | number) => {
    switch (field) {
      case 'name':
        setUserName(value as string);
        break;
      case 'email':
        setUserEmail(value as string);
        break;
      case 'age':
        setAge(value as number);
        break;
    }
    setTimeout(calculateCompletion, 0);
  };

  const validateForm = () => {
    if (!userName.trim()) return "Please enter your name";
    if (!userEmail.trim()) return "Please enter your email";
    if (age < 1 || age > 150) return "Please enter a valid age";
    
    const answeredQuestions = Object.keys(responses).length;
    if (answeredQuestions < Object.keys(questions).length) {
      return `Please answer all questions (${answeredQuestions}/${Object.keys(questions).length} completed)`;
    }
    
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const result = await submitQuiz({
        userName,
        userEmail,
        age,
        responses,
      });
      
      // Store result in localStorage (note: this won't work in Claude.ai artifacts)
      localStorage.setItem("quizResult", JSON.stringify(result.data));
      
      // Add a small delay for better UX
      await new Promise(resolve => setTimeout(resolve, 500));
      
      router.push("/quiz/results");
    } catch (err: any) {
      console.error("Quiz submission error:", err);
      setError(
        err?.response?.data?.message || 
        "Failed to submit quiz. Please check your connection and try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = validateForm() === null;

  return (
    <div className="max-w-2xl mx-auto p-6">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold text-gray-800">Health Assessment Quiz</h2>
          <span className="text-sm text-gray-500">{completionPercentage}% Complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${completionPercentage}%` }}
          />
        </div>
      </div>

      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl p-8 space-y-6">
        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-red-700">{error}</p>
              </div>
            </div>
          </div>
        )}

        {/* Personal Information Section */}
        <div className="bg-gray-50 p-6 rounded-lg border">
          <h3 className="text-lg font-semibold mb-4 text-gray-700">Personal Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                value={userName}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                value={userEmail}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                required
                disabled={isSubmitting}
              />
            </div>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Age *
            </label>
            <input
              type="number"
              min="1"
              max="150"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => handleInputChange('age', Number(e.target.value))}
              className="w-full md:w-32 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
              required
              disabled={isSubmitting}
            />
          </div>
        </div>

        {/* Questions Section */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-700">Health Assessment Questions</h3>
          {Object.entries(questions).map(([key, q], index) => (
            <div key={key} className="bg-gray-50 p-6 rounded-lg border">
              <div className="flex items-start justify-between mb-4">
                <p className="font-medium text-gray-800 pr-4">
                  {index + 1}. {q.question}
                </p>
                {responses[key] && (
                  <span className="text-green-500 flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="space-y-3">
                {Object.keys(q.options).map((opt) => (
                  <label 
                    key={opt} 
                    className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      responses[key] === opt
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    } ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    <input
                      type="radio"
                      name={key}
                      value={opt}
                      checked={responses[key] === opt}
                      onChange={() => handleChange(key, opt)}
                      className="sr-only"
                      required
                      disabled={isSubmitting}
                    />
                    <div className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center ${
                      responses[key] === opt ? 'border-blue-500' : 'border-gray-300'
                    }`}>
                      {responses[key] === opt && (
                        <div className="w-2 h-2 rounded-full bg-blue-500" />
                      )}
                    </div>
                    <span className={`${
                      responses[key] === opt ? 'text-blue-700 font-medium' : 'text-gray-700'
                    }`}>
                      {opt}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <div className="pt-6">
          <button
            type="submit"
            disabled={isSubmitting || !isFormValid}
            className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-200 ${
              isSubmitting || !isFormValid
                ? 'bg-gray-400 cursor-not-allowed'
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-[1.02] shadow-lg hover:shadow-xl'
            }`}
          >
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing Your Results...
              </div>
            ) : (
              'Get My Health Assessment Results'
            )}
          </button>
          
          {!isFormValid && completionPercentage < 100 && (
            <p className="text-center text-sm text-gray-500 mt-2">
              Complete all fields to submit your assessment
            </p>
          )}
        </div>
      </form>
    </div>
  );
}