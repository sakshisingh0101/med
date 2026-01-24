import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "@/components/MedGuard/Header";
import ResultCard from "@/components/MedGuard/ResultCard";
import Footer from "@/components/MedGuard/Footer";

type SafetyLevel = "safe" | "caution" | "danger";

interface ResultData {
  safetyLevel: SafetyLevel;
  medicineName: string;
  reasons: string[];
  explanation: string;
}

const Result = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const resultData = location.state as ResultData | null;

  useEffect(() => {
    // Redirect to home if no result data
    if (!resultData) {
      navigate("/");
    }
  }, [resultData, navigate]);

  const handleBack = () => {
    navigate("/");
  };

  if (!resultData) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8">
        <ResultCard
          result={resultData.safetyLevel}
          medicineName={resultData.medicineName}
          reasons={resultData.reasons}
          explanation={resultData.explanation}
          onBack={handleBack}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Result;
