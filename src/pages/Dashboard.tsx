import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/MedGuard/Header";
import HeroSection from "@/components/MedGuard/HeroSection";
import MedicineScanForm, { FormData } from "@/components/MedGuard/MedicineScanForm";
import Footer from "@/components/MedGuard/Footer";
import { checkMedicineSafety } from "@/services/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Call the placeholder API
      const response = await checkMedicineSafety({
        imageData: data.capturedImage,
        imageFile: data.uploadedFile,
        userContext: {
          age: data.age,
          conditions: data.conditions,
          medicines: data.medicines,
          foodStatus: data.foodStatus,
        },
      });

      // Navigate to result page with the response data
      navigate("/result", {
        state: {
          safetyLevel: response.safetyLevel,
          medicineName: response.medicineName,
          reasons: response.reasons,
          explanation: response.explanation,
        },
      });
    } catch (error) {
      console.error("Error checking medicine safety:", error);
      // TODO: Show error toast/message to user
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-8">
        <HeroSection />
        <div className="mt-8">
          <MedicineScanForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;
