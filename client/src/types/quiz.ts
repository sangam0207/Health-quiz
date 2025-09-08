export interface QuizQuestion {
  question: string;
  options: Record<string, number>;
}

export interface QuizQuestions {
  [key: string]: QuizQuestion;
}

export interface QuizResponses {
  [key: string]: string;
}

export interface Product {
  name: string;
  short: string;
  why: string;
  link: string;
}

export interface Recommendation {
  riskLevel: string;
  emoji: string;
  color: string;
  bg: string;
  title: string;
  subtitle: string;
  tips: string[];
  products: Product[];
  ctaText?: string;
  ctaUrl?: string;
}

export interface QuizResult {
  quizId: string;
  totalScore: number;
  riskLevel: string;
  recommendation: Recommendation;
  emailSent: boolean;
  previewUrl: string | null;
}
