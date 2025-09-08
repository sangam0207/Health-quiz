"use client";
import { QuizResult } from "@/types/quiz";
import { useState } from "react";

// interface Props {
//   result: QuizResult;
// }

export default function ResultCard({ result }:any) {
  const { totalScore, riskLevel, recommendation } = result;
  const [copiedToClipboard, setCopiedToClipboard] = useState(false);
  
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'My Health Assessment Results',
          text: `I just completed a health assessment and got a ${riskLevel} risk level! Check out this health quiz.`,
          url: window.location.href,
        });
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      // Fallback to copying URL
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopiedToClipboard(true);
        setTimeout(() => setCopiedToClipboard(false), 2000);
      } catch (err) {
        console.log('Error copying to clipboard:', err);
      }
    }
  };

  const handleRetakeQuiz = () => {
    localStorage.removeItem('quizResult');
    window.location.href = '/quiz';
  };

  const scorePercentage = Math.round((totalScore / 15) * 100);

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <div
        className="rounded-xl shadow-lg p-8 text-center relative overflow-hidden"
        style={{ backgroundColor: recommendation.bg }}
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 50%, white 1px, transparent 1px)`,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        <div className="relative z-10">
          {/* Score Icon */}
          <div className="mb-6">
            <div className="text-6xl mb-4 animate-bounce">
              {recommendation.emoji}
            </div>
            <h2 className="text-3xl font-bold mb-2" style={{ color: recommendation.color }}>
              {recommendation.title}
            </h2>
            <p className="text-gray-600 text-lg">{recommendation.subtitle}</p>
          </div>

          {/* Score Metrics */}
          <div className="flex justify-center gap-6 mb-6">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-6 py-4 min-w-[120px]">
              <p className="text-sm text-gray-500 mb-1">Total Score</p>
              <p className="text-2xl font-bold text-indigo-600">{totalScore}/15</p>
              <p className="text-xs text-gray-400">{scorePercentage}%</p>
            </div>
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md px-6 py-4 min-w-[120px]">
              <p className="text-sm text-gray-500 mb-1">Risk Level</p>
              <p className="text-2xl font-bold" style={{ color: recommendation.color }}>
                {riskLevel}
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={handleShare}
              className="bg-white/20 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white/30 transition-all flex items-center gap-2"
            >
              {copiedToClipboard ? (
                <>
                  <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Copied!
                </>
              ) : (
                <>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                  </svg>
                  Share Results
                </>
              )}
            </button>
            <button
              onClick={handleRetakeQuiz}
              className="bg-white/20 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-lg hover:bg-white/30 transition-all flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Retake Quiz
            </button>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-2xl">💡</div>
          <h3 className="font-bold text-xl text-indigo-700">Personalized Tips for You</h3>
        </div>
        <div className="grid gap-3">
          {recommendation.tips.map((tip: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3 p-3 bg-indigo-50 rounded-lg">
              <div className="flex-shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center text-xs font-bold text-indigo-700">
                {idx + 1}
              </div>
              <p className="text-gray-700 leading-relaxed">{tip}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Products Section */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="text-2xl">🛍️</div>
          <h3 className="font-bold text-xl text-indigo-700">Recommended Products</h3>
        </div>
        <div className="grid gap-4">
          {recommendation.products.map((prod: any, idx: number) => (
            <div
              key={idx}
              className="border-2 border-gray-100 rounded-xl p-5 hover:border-indigo-200 hover:shadow-md transition-all duration-200 bg-gradient-to-r from-gray-50 to-white"
            >
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-bold text-gray-800 text-lg">{prod.name}</h4>
                <span className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs font-medium">
                  Recommended
                </span>
              </div>
              <p className="text-gray-600 mb-2">{prod.short}</p>
              <div className="bg-blue-50 border-l-4 border-blue-400 p-3 mb-3">
                <p className="text-sm text-blue-800">
                  <span className="font-medium">Why this helps:</span> {prod.why}
                </p>
              </div>
              {prod.link && (
                <a
                  href={prod.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                >
                  Learn More
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      {recommendation.ctaUrl && (
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl shadow-lg p-6 text-center text-white">
          <h3 className="text-xl font-bold mb-2">Ready to Take Action?</h3>
          <p className="mb-4 opacity-90">Start your journey to better health today</p>
          <a
            href={recommendation.ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            {recommendation.ctaText || "Get Started"}
          </a>
        </div>
      )}
    </div>
  );
}