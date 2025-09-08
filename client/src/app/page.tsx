import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center min-h-screen p-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Main Title */}
          <div className="space-y-4">
            <div className="text-6xl ">🧪</div>
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
              Health Assessment
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover your health potential with our comprehensive assessment. Get personalized 
              supplement recommendations based on your lifestyle, habits, and health goals.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto my-12">
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Quick & Easy</h3>
              <p className="text-gray-600 text-sm">Complete assessment in under 5 minutes with our streamlined questionnaire</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Personalized</h3>
              <p className="text-gray-600 text-sm">Receive tailored recommendations based on your unique health profile</p>
            </div>
            <div className="bg-white/70 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105">
              <div className="text-3xl mb-3">🔬</div>
              <h3 className="font-bold text-lg mb-2 text-gray-800">Science-Based</h3>
              <p className="text-gray-600 text-sm">Evidence-backed recommendations from nutrition and health experts</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="space-y-6">
            <Link
              href="/quiz"
              className="inline-block group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-indigo-700 transform hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                Start Your Health Assessment
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
              
              {/* Animated background */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-400 to-indigo-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <p className="text-gray-500 text-sm">
              ✓ Free assessment • ✓ Instant results • ✓ No registration required
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">10K+</div>
              <div className="text-sm text-gray-600">Assessments Completed</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">98%</div>
              <div className="text-sm text-gray-600">User Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">15+</div>
              <div className="text-sm text-gray-600">Health Categories</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-indigo-600">24/7</div>
              <div className="text-sm text-gray-600">Available Access</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white/50 backdrop-blur-sm py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Answer Questions</h3>
              <p className="text-gray-600">
                Complete our comprehensive questionnaire about your lifestyle, diet, exercise habits, and health concerns.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Get Analysis</h3>
              <p className="text-gray-600">
                Our algorithm analyzes your responses and calculates your personalized health risk profile instantly.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-indigo-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-800">Receive Recommendations</h3>
              <p className="text-gray-600">
                Get personalized supplement recommendations, lifestyle tips, and actionable health advice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Preview */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Is this assessment medically accurate?</h3>
              <p className="text-gray-600">
                Our assessment is designed for educational purposes and general wellness guidance. It should not replace professional medical advice or diagnosis.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">How long does it take to complete?</h3>
              <p className="text-gray-600">
                The assessment typically takes 3-5 minutes to complete, with instant results provided immediately after submission.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2 text-gray-800">Is my information secure?</h3>
              <p className="text-gray-600">
                Yes, we take privacy seriously. Your responses are processed securely and are not shared with third parties.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="mb-4">© 2025 Pharma Health Assessment. All rights reserved.</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="hover:text-indigo-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-300 transition-colors">Contact Us</a>
          </div>
        </div>
      </footer>
    </main>
  );
}