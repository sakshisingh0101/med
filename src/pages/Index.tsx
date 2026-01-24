import { useState } from "react";
import Header from "@/components/MedGuard/Header";
import HeroSection from "@/components/MedGuard/HeroSection";
import ScanCard from "@/components/MedGuard/ScanCard";
import UserContextForm, { UserContextData } from "@/components/MedGuard/UserContextForm";
import ResultCard from "@/components/MedGuard/ResultCard";
import Footer from "@/components/MedGuard/Footer";

type AppState = "landing" | "form" | "result";
type SafetyLevel = "safe" | "caution" | "danger";

// Demo result data for UI showcase
const demoResults: Record<SafetyLevel, { reasons: string[]; explanation: string }> = {
  safe: {
    reasons: [
      "No known interactions with your current medications",
      "Suitable for your age group",
      "Safe to take after food as selected",
    ],
    explanation: "Based on the information you provided, this medicine appears safe for you to take. However, always follow the dosage instructions on the packaging and stop immediately if you notice any unusual symptoms.",
  },
  caution: {
    reasons: [
      "May cause drowsiness — avoid driving",
      "Take with plenty of water",
      "Possible mild interaction with blood pressure medication",
    ],
    explanation: "You can take this medicine, but please be careful. Monitor how you feel over the next few hours. If you experience dizziness, nausea, or any discomfort, stop taking it and consult your doctor.",
  },
  danger: {
    reasons: [
      "Known interaction with Metformin (Diabetes medication)",
      "Not recommended for kidney conditions",
      "Should not be taken on empty stomach",
    ],
    explanation: "We strongly advise against taking this medicine based on your health profile. The combination with your current medications could be harmful. Please consult your doctor before proceeding.",
  },
};

const Index = () => {
  const [appState, setAppState] = useState<AppState>("landing");
  const [, setUserData] = useState<UserContextData | null>(null);
  const [currentResult, setCurrentResult] = useState<SafetyLevel>("safe");

  const handleScanOrUpload = () => {
    setAppState("form");
  };

  const handleFormSubmit = (data: UserContextData) => {
    setUserData(data);
    // Demo: cycle through results for showcase
    const results: SafetyLevel[] = ["safe", "caution", "danger"];
    const randomResult = results[Math.floor(Math.random() * results.length)];
    setCurrentResult(randomResult);
    setAppState("result");
  };

  const handleBack = () => {
    setAppState("landing");
    setUserData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 pb-8">
        {appState === "landing" && (
          <div className="space-y-8">
            <HeroSection />
            <ScanCard 
              onScanClick={handleScanOrUpload} 
              onUploadClick={handleScanOrUpload} 
            />
          </div>
        )}

        {appState === "form" && (
          <div className="py-8">
            <UserContextForm onSubmit={handleFormSubmit} />
          </div>
        )}

        {appState === "result" && (
          <div className="py-8">
            <ResultCard
              result={currentResult}
              medicineName="Paracetamol 500mg"
              reasons={demoResults[currentResult].reasons}
              explanation={demoResults[currentResult].explanation}
              onBack={handleBack}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Index;
