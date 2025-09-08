"use client";
import { useState, useEffect } from "react";
import { User, Mail, Calendar, CheckCircle2, AlertCircle, Clock, Shield } from "lucide-react";
import { submitQuiz } from "@/lib/api";
import { useRouter } from "next/navigation";

const AGE_MIN = 18;
const AGE_MAX = 120; // keep this consistent everywhere

interface QuizQuestions {
  [key: string]: {
    question: string;
    options: { [key: string]: any };
  };
}

interface QuizResponses {
  [key: string]: string;
}

interface QuizFormProps {
  questions: QuizQuestions;
}

export default function QuizForm({ questions }: QuizFormProps) {
  const [responses, setResponses] = useState<QuizResponses>({});
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [age, setAge] = useState<number>(0); // keep numeric state
  const [ageTouched, setAgeTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string>("");
  const [completionPercentage, setCompletionPercentage] = useState(0);

  const router = useRouter();
  const totalQuestions = Object.keys(questions).length + 3;

  const isAgeValid = Number.isFinite(age) && age >= AGE_MIN && age <= AGE_MAX;


  useEffect(() => {
    let completed = 0;
    if (userName.trim()) completed++;
    if (userEmail.trim()) completed++;
    if (isAgeValid) completed++;                
    completed += Object.keys(responses).length;

    setCompletionPercentage(Math.round((completed / totalQuestions) * 100));
  }, [userName, userEmail, age, isAgeValid, responses, totalQuestions]);

  const handleChange = (q: string, value: string) => {
    setResponses((prev) => ({ ...prev, [q]: value }));
  };

  const handleInputChange = (field: string, value: string | number) => {
    switch (field) {
      case "name":
        setUserName(value as string);
        break;
      case "email":
        setUserEmail(value as string);
        break;
      case "age": {
        setAgeTouched(true);
        const n = Number(value);
      
        setAge(Number.isFinite(n) ? n : 0);
        break;
      }
    }
  };


  const handleAgeBlur = () => {
    setAgeTouched(true);
    if (!Number.isFinite(age) || age === 0) return;
    if (age < AGE_MIN) setAge(AGE_MIN);
    if (age > AGE_MAX) setAge(AGE_MAX);
  };

  const validateForm = () => {
    if (!userName.trim()) return "Please enter your name";
    if (!userEmail.trim()) return "Please enter your email";
    if (!isAgeValid) return `Please enter a valid age (${AGE_MIN}+ only)`;

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
      const result = await submitQuiz({ userName, userEmail, age, responses });
      localStorage.setItem("quizResult", JSON.stringify(result.data));
      await new Promise((r) => setTimeout(r, 500));
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Shield className="w-4 h-4" />
            <span>HIPAA Compliant Assessment</span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">
            Clinical Health Assessment
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Complete this comprehensive evaluation to receive personalized health insights and recommendations.
          </p>
        </div>

        {/* Progress */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Clock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-semibold text-slate-900">Health Assessment Quiz</h2>
                <p className="text-sm text-slate-600">Estimated time: 5-7 minutes</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-blue-600">{completionPercentage}%</div>
              <div className="text-xs text-slate-500">Complete</div>
            </div>
          </div>
          <div className="w-full bg-slate-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-600 to-cyan-600 h-3 rounded-full transition-all duration-500"
              style={{ width: `${completionPercentage}%` }}
            />
          </div>
        </div>

        <div className="bg-white shadow-2xl rounded-2xl overflow-hidden border border-slate-200">
          <form onSubmit={handleSubmit} className="p-8 space-y-8">
            {/* Error */}
            {error && (
              <div className="bg-red-50 border-l-4 border-red-400 rounded-lg p-4">
                <div className="flex items-center">
                  <AlertCircle className="h-5 w-5 text-red-400 mr-3" />
                  <p className="text-sm text-red-700 font-medium">{error}</p>
                </div>
              </div>
            )}

            {/* Personal Info */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl border border-slate-200 overflow-hidden">
              <div className="px-6 py-4 border-b border-slate-200 bg-white/50">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center">
                  <User className="w-5 h-5 mr-2 text-blue-600" />
                  Personal Information
                </h3>
                <p className="text-sm text-slate-600 mt-1">
                  Please provide your basic information for personalized results
                </p>
              </div>

              <div className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={userName}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={userEmail}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all bg-white"
                        required
                        disabled={isSubmitting}
                      />
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Age *</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="number"
                      inputMode="numeric"
                      min={AGE_MIN}
                      max={AGE_MAX}
                      step={1}
                      placeholder={`Enter your age (${AGE_MIN}+)`}
                      value={age === 0 ? "" : age}          
                      onChange={(e) => handleInputChange("age", e.target.value)}
                      onBlur={handleAgeBlur}               
                      className={[
                        "w-full md:w-56 pl-10 pr-4 py-3 border rounded-lg transition-all bg-white",
                        ageTouched && !isAgeValid
                          ? "border-red-400 focus:ring-2 focus:ring-red-500 focus:border-red-500"
                          : "border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500",
                      ].join(" ")}
                      required
                      disabled={isSubmitting}
                    />
                  </div>
               
                  <p
                    className={`mt-2 text-sm ${
                      ageTouched && !isAgeValid ? "text-red-600" : "text-slate-500"
                    }`}
                  >
                    {ageTouched && !isAgeValid
                      ? `Age must be ${AGE_MIN} or above.`
                      : `You must be ${AGE_MIN}+ to take this assessment.`}
                  </p>
                </div>
              </div>
            </div>

          
            <div className="space-y-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">Health Assessment Questions</h3>
                  <p className="text-sm text-slate-600">
                    Please answer all questions to receive accurate recommendations
                  </p>
                </div>
              </div>

              {Object.entries(questions).map(([key, q], index) => (
                <div
                  key={key}
                  className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow"
                >
                  <div className="px-6 py-4 bg-slate-50 border-b border-slate-200">
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-sm font-semibold text-blue-600">{index + 1}</span>
                        </div>
                        <p className="font-semibold text-slate-900 text-base leading-relaxed">
                          {q.question}
                        </p>
                      </div>
                      {responses[key] && (
                        <div className="flex items-center space-x-1 text-green-600 bg-green-50 px-2 py-1 rounded-full">
                          <CheckCircle2 className="w-4 h-4" />
                          <span className="text-xs font-medium">Answered</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    {Object.keys(q.options).map((opt) => (
                      <label
                        key={opt}
                        className={`group block w-full p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          responses[key] === opt
                            ? "border-blue-500 bg-blue-50 shadow-sm"
                            : "border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                        } ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <div className="flex items-center">
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
                          <div
                            className={`w-5 h-5 rounded-full border-2 mr-4 flex items-center justify-center transition-colors ${
                              responses[key] === opt
                                ? "border-blue-500 bg-blue-500"
                                : "border-slate-300 group-hover:border-slate-400"
                            }`}
                          >
                            {responses[key] === opt && <div className="w-2 h-2 rounded-full bg-white" />}
                          </div>
                          <span
                            className={`text-base transition-colors ${
                              responses[key] === opt ? "text-blue-900 font-medium" : "text-slate-700 group-hover:text-slate-900"
                            }`}
                          >
                            {opt}
                          </span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>

           
            <div className="pt-6">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-slate-900">Ready to Get Your Results?</h3>
                  <p className="text-slate-600">
                    You'll receive a comprehensive health assessment report with personalized recommendations.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid}
                  className={`w-full max-w-md mx-auto py-4 px-8 rounded-lg font-semibold text-lg transition-all duration-300 ${
                    isSubmitting || !isFormValid
                      ? "bg-slate-300 text-slate-500 cursor-not-allowed"
                      : "bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg hover:shadow-xl transform hover:scale-[1.02]"
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3"></div>
                      Processing Your Results...
                    </div>
                  ) : (
                    <div className="flex items-center justify-center">
                      <CheckCircle2 className="w-5 h-5 mr-2" />
                      Get My Health Assessment Results
                    </div>
                  )}
                </button>

                {!isFormValid && completionPercentage < 100 && (
                  <p className="text-center text-sm text-slate-500 mt-2">
                    Complete all fields to submit your assessment
                  </p>
                )}

                <div className="flex items-center justify-center space-x-6 text-sm text-slate-500 pt-4">
                  <div className="flex items-center space-x-1">
                    <Shield className="w-4 h-4" />
                    <span>HIPAA Protected</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Instant Results</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>5 Min Assessment</span>
                  </div>
                </div>
              </div>
            </div>
          </form>
        
        </div>
      </div>
    </div>
  );
}
