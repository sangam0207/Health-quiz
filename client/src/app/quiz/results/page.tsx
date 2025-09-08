"use client";
import { useEffect, useState } from "react";
import ResultCard from "@/components/ResultCard";
import { QuizResult } from "@/types/quiz";

export default function ResultsPage() {
  const [result, setResult] = useState<QuizResult | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const loadResult = async () => {
      try {
        // Simulate loading delay for better UX
        await new Promise(resolve => setTimeout(resolve, 800));
        
        const stored = localStorage.getItem("quizResult");
        if (stored) {
          const parsedResult = JSON.parse(stored);
          setResult(parsedResult);
        } else {
          setError("No quiz results found. Please complete the quiz first.");
        }
      } catch (err) {
        console.error("Error loading results:", err);
        setError("There was an error loading your results. Please try taking the quiz again.");
      } finally {
        setIsLoading(false);
      }
    };

    loadResult();
  }, []);

  // Loading State
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            {/* Animated Spinner */}
            <div className="w-20 h-20 border-4 border-indigo-200 border-t-indigo-600 rounded-full animate-spin mx-auto mb-4"></div>
            
            {/* Pulsing Dots */}
            <div className="flex justify-center space-x-1 mb-4">
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            </div>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Analyzing Your Results...
          </h2>
          <p className="text-gray-600">
            We're preparing your personalized health assessment
          </p>
          
          {/* Progress steps */}
          <div className="mt-8 space-y-2 text-sm text-gray-500">
            <p className="animate-pulse">✓ Processing your responses</p>
            <p className="animate-pulse" style={{ animationDelay: '0.3s' }}>✓ Calculating health score</p>
            <p className="animate-pulse" style={{ animationDelay: '0.6s' }}>⏳ Generating recommendations</p>
          </div>
        </div>
      </div>
    );
  }

  // Error State
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center px-6">
        <div className="max-w-md mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Oops! Something went wrong
            </h2>
            <p className="text-gray-600 mb-6">
              {error}
            </p>
            <div className="space-y-3">
              <a
                href="/quiz"
                className="block w-full bg-indigo-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Take Quiz Again
              </a>
              <a
                href="/"
                className="block w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Go Home
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Success State with Results
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <div className="py-10 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600 mb-4">
              Your Health Assessment Results
            </h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Based on your responses, we've created a personalized health profile with 
              recommendations tailored specifically for you.
            </p>
          </div>

          {/* Results Card */}
          <div className="animate-fade-in">
            <ResultCard result={result} />
          </div>

          {/* Additional Actions */}
          <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-lg font-semibold mb-4 text-gray-800">What's Next?</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl mb-2">📊</div>
                <h4 className="font-medium mb-2">Track Progress</h4>
                <p className="text-sm text-gray-600 mb-3">Monitor your health improvements over time</p>
                <button className="text-blue-600 text-sm font-medium hover:underline">
                  Set Reminders
                </button>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl mb-2">🏥</div>
                <h4 className="font-medium mb-2">Consult Professional</h4>
                <p className="text-sm text-gray-600 mb-3">Share results with your healthcare provider</p>
                <button className="text-green-600 text-sm font-medium hover:underline">
                  Download PDF
                </button>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl mb-2">👥</div>
                <h4 className="font-medium mb-2">Join Community</h4>
                <p className="text-sm text-gray-600 mb-3">Connect with others on similar health journeys</p>
                <button className="text-purple-600 text-sm font-medium hover:underline">
                  Find Groups
                </button>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="text-yellow-600 flex-shrink-0">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium text-yellow-800 mb-1">Important Disclaimer</h4>
                <p className="text-sm text-yellow-700">
                  This assessment is for informational purposes only and should not replace professional medical advice. 
                  Always consult with qualified healthcare providers for personalized medical guidance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </main>
  );
}