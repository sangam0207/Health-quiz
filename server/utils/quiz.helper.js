
export const quizQuestions = {
  q1: { question: "How often do you exercise per week?", options: { "Never": 0, "1-2 times": 1, "3-4 times": 2, "5+ times": 3 } },
  q2: { question: "How would you rate your stress levels?", options: { "Very High": 0, "High": 1, "Moderate": 2, "Low": 3 } },
  q3: { question: "How many hours of sleep do you get nightly?", options: { "Less than 5": 0, "5-6 hours": 1, "7-8 hours": 3, "More than 8": 2 } },
  q4: { question: "How often do you consume processed foods?", options: { "Daily": 0, "Few times a week": 1, "Rarely": 2, "Never": 3 } },
  q5: { question: "Do you have any chronic health conditions?", options: { "Multiple conditions": 0, "One condition": 1, "Occasional issues": 2, "No conditions": 3 } },
};

// Risk level
export function getRiskLevel(totalScore) {
  if (totalScore >= 12) return "Low";
  if (totalScore >= 7) return "Medium";
  return "High";
}

// Pretty recommendations (title, subtitle, color, tips, products)
export function getRecommendation(riskLevel) {
  const palette = {
    Low:    { emoji: "✅", color: "#16a34a", bg: "#eaf7ee", title: "Excellent Health!", subtitle: "Keep doing what works and refine the basics." },
    Medium: { emoji: "⚠️", color: "#f59e0b", bg: "#fff7e6", title: "Good, but can improve", subtitle: "Small, consistent changes will move you to Low risk." },
    High:   { emoji: "🚩", color: "#ef4444", bg: "#feecec", title: "Health Needs Attention", subtitle: "Start with fundamentals—sleep, stress, and routine." },
  }[riskLevel];

  const base = {
    Low: {
      tips: [
        "Maintain 150–300 min/week of moderate activity.",
        "Prioritize whole foods; keep processed snacks for rare occasions.",
        "Keep a stable sleep window (7–8 hours/night).",
      ],
      products: [
        { name: "Multivitamin", short: "Daily micronutrient support", why: "Covers minor dietary gaps.", link: "#" },
        { name: "Omega-3", short: "EPA/DHA for heart & brain", why: "Supports cardio-metabolic health.", link: "#" },
        { name: "Probiotics", short: "Gut health support", why: "May aid digestion and immunity.", link: "#" },
      ],
    },
    Medium: {
      tips: [
        "Add 2 × 20-min brisk walks weekly on top of current routine.",
        "Adopt a simple meal pattern (protein + veg + whole-grain).",
        "Wind-down ritual 45 min before bed; limit screens.",
      ],
      products: [
        { name: "Stress Support", short: "Adaptogen blend", why: "Helps manage daytime stress.", link: "#" },
        { name: "Energy Booster", short: "B-complex + electrolytes", why: "Counters mid-day dips.", link: "#" },
        { name: "Sleep Formula", short: "Melatonin-free herbs", why: "Promotes quality sleep onset.", link: "#" },
      ],
    },
    High: {
      tips: [
        "Begin with 10-minute walks after meals—habit first, intensity later.",
        "Reduce ultra-processed foods; batch-cook 2 simple meals/week.",
        "Keep a fixed sleep schedule; aim for 7 hours minimum.",
      ],
      products: [
        { name: "Health Support Kit", short: "Foundational bundle", why: "Covers core gaps while habits form.", link: "#" },
        { name: "Stress Management", short: "Magnesium + L-theanine", why: "Helps relax without sedation.", link: "#" },
        { name: "Cardio Support", short: "CoQ10 + Omega-3", why: "Supports heart & energy metabolism.", link: "#" },
      ],
    },
  }[riskLevel];

  return {
    riskLevel,
    ...palette,
    ...base,
    ctaText: "View Your Full Plan",
    ctaUrl: "#",
  };
}
