"use client";
import React from 'react';
import { Heart, Shield, Users, Award, ArrowRight, CheckCircle, Clock, Lock } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function HospitalHealthApp() {
  const router = useRouter();

  const handleGetStarted = () => {
    router.push('/quiz');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">MedAssess</h1>
                <p className="text-xs text-slate-600">Professional Health Assessment</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center space-x-2 text-sm text-slate-600">
                <Shield className="w-4 h-4 text-green-600" />
                <span>HIPAA Compliant</span>
              </div>
              <button className="text-blue-600 hover:text-blue-700 font-medium text-sm">
                Healthcare Provider
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Clinically Validated</span>
                </div>
                <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-tight">
                  Comprehensive
                  <span className="text-blue-600 block">Health Assessment</span>
                </h1>
                <p className="text-lg lg:text-xl text-slate-600 leading-relaxed">
                  Advanced AI-powered health evaluation tool used by healthcare professionals. 
                  Get personalized insights and evidence-based recommendations in minutes.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">FDA guidelines compliant assessment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">Used by 500+ healthcare facilities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-slate-700">Bank-grade security & privacy</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group bg-blue-600 hover:bg-blue-700 text-white hover:cursor-pointer px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2" onClick={handleGetStarted }>
                  <span>Start Assessment</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
               
              </div>

              {/* end buttons */}
              <div className="flex items-center space-x-6 text-sm text-slate-500">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>5-7 minutes</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Secure & Private</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Instant Results</span>
                </div>
              </div>
            </div>

            <div className="relative lg:pl-8">
              <div className="bg-white rounded-2xl shadow-2xl p-8 relative z-10">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-slate-800">Assessment Overview</h3>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Heart className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Cardiovascular Risk</p>
                        <p className="text-sm text-slate-600">Blood pressure, cholesterol, family history</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-600 font-semibold text-sm">✓</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Metabolic Health</p>
                        <p className="text-sm text-slate-600">Diabetes risk, weight management</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold text-sm">→</span>
                      </div>
                      <div>
                        <p className="font-medium text-slate-800">Nutritional Analysis</p>
                        <p className="text-sm text-slate-600">Deficiencies, supplement recommendations</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-slate-700">Assessment Progress</span>
                      <span className="text-sm text-slate-600">0/15</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-0 transition-all duration-300"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Background decorative elements */}
              <div className="absolute top-4 right-4 w-24 h-24 bg-blue-100 rounded-full opacity-60 -z-10"></div>
              <div className="absolute bottom-8 left-4 w-16 h-16 bg-cyan-100 rounded-full opacity-60 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="bg-white py-12 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">25K+</div>
              <div className="text-sm text-slate-600">Assessments Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-slate-600">Healthcare Partners</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">99.8%</div>
              <div className="text-sm text-slate-600">Accuracy Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">24/7</div>
              <div className="text-sm text-slate-600">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Clinical-Grade Assessment Process
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Our evidence-based methodology follows established clinical protocols to provide 
              accurate and actionable health insights.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Comprehensive Intake</h3>
                <p className="text-slate-600 mb-6">
                  Complete medical history, lifestyle factors, symptoms, and risk assessment questionnaire 
                  based on clinical guidelines.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Medical history review</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Lifestyle assessment</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Symptom evaluation</span>
                  </li>
                </ul>
              </div>
            
            </div>

            <div className="relative">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
                <div className="w-16 h-16 bg-cyan-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Analysis</h3>
                <p className="text-slate-600 mb-6">
                  Advanced algorithms trained on clinical data analyze your responses using 
                  established medical protocols and risk stratification models.
                </p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Risk stratification</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Pattern recognition</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span>Evidence correlation</span>
                  </li>
                </ul>
              </div>
              
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200">
              <div className="w-16 h-16 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Detailed Report</h3>
              <p className="text-slate-600 mb-6">
                Receive comprehensive health insights, risk assessments, and personalized 
                recommendations backed by medical literature.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Personalized recommendations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Risk assessment scores</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Action plan</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Medical Disclaimer */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
            <Shield className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-4">Important Medical Disclaimer</h3>
            <p className="text-slate-600 leading-relaxed">
              This assessment is designed for educational and informational purposes only. 
              It does not constitute medical advice, diagnosis, or treatment. Always consult with 
              qualified healthcare professionals for medical decisions. Results should be discussed 
              with your healthcare provider before making any health-related changes.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <span className="text-lg font-bold">MedAssess</span>
              </div>
              <p className="text-slate-400 text-sm">
                Professional health assessment platform trusted by healthcare providers worldwide.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Patients</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Start Assessment</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Sample Reports</a></li>
                <li><a href="#" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#" className="hover:text-white transition-colors">FAQ</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">For Healthcare Providers</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Provider Portal</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Integration API</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Clinical Evidence</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Training Resources</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">HIPAA Compliance</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
            <p className="text-sm text-slate-400">
              © 2025 MedAssess Professional Health Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-4 text-sm text-slate-400 mt-4 sm:mt-0">
              <span className="flex items-center space-x-1">
                <Shield className="w-4 h-4" />
                <span>HIPAA Compliant</span>
              </span>
              <span className="flex items-center space-x-1">
                <Award className="w-4 h-4" />
                <span>FDA Guidelines</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
