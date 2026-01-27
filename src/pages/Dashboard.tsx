// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "@/components/MedGuard/Header";
// import HeroSection from "@/components/MedGuard/HeroSection";
// import MedicineScanForm, { FormData } from "@/components/MedGuard/MedicineScanForm";
// import Footer from "@/components/MedGuard/Footer";
// import { checkMedicineSafety, MedicineSafetyRequest } from "@/services/api";


// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//  const handleFormSubmit = async (data: FormData) => {
//   setIsSubmitting(true);

//   try {
//     const payload: MedicineSafetyRequest = {
//       userContext: {
//         age: data.age,
//         conditions: data.conditions,
//         foodState: data.foodStatus,
//         time: "morning", // or dynamic
//       },
//       document: {
//         type: "MEDICINE",
//         medicines: data.medicines.map((m) => ({ name: m, dosage: "", frequency: "", durationDays: "" })),
//         confidence: "high",
//       },
//     };

//     // ✅ call API
//     const result = await checkMedicineSafety(payload);

//     // ✅ navigate with structured data
//     navigate("/result", { state: result });
//   } catch (err) {
//     console.error("Error checking medicine safety:", err);
//     alert("Failed to check medicine safety. Please try again.");
//   } finally {
//     setIsSubmitting(false);
//   }
// };

//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       <Header />
//       <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-8">
//         <HeroSection />
//         <div className="mt-8">
//           <MedicineScanForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;


// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import Header from "@/components/MedGuard/Header";
// import HeroSection from "@/components/MedGuard/HeroSection";
// import MedicineScanForm, { FormData } from "@/components/MedGuard/MedicineScanForm";
// import Footer from "@/components/MedGuard/Footer";
// import { checkMedicineSafety, MedicineSafetyRequest } from "@/services/api";
// import { useMedicine } from "@/context/MedicineContext";

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const { ocrResult, userContext, setProcessedResult } = useMedicine();
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const handleFormSubmit = async (_: FormData) => {
//     if (!ocrResult) return;

//     setIsSubmitting(true);

//     try {
//       const payload: MedicineSafetyRequest = {
//         userContext: {
//           age: userContext.age,
//           conditions: userContext.conditions,
//           foodState: userContext.foodState,
//           time: userContext.time,
//         },
//         document: ocrResult,
//       };

//       const result = await checkMedicineSafety(payload);

//       setProcessedResult(result);

//       navigate("/result", { state: result });
//     } catch (err) {
//       console.error("Medicine safety check failed:", err);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col bg-background">
//       <Header />
//       <main className="flex-1 w-full max-w-6xl mx-auto px-4 pb-8">
//         <HeroSection />
//         <div className="mt-8">
//           <MedicineScanForm
//             onSubmit={handleFormSubmit}
//             isSubmitting={isSubmitting}
//           />
//         </div>
//       </main>
//       <Footer />
//     </div>
//   );
// };

// export default Dashboard;




import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "@/components/MedGuard/Header";
import HeroSection from "@/components/MedGuard/HeroSection";
import MedicineScanForm from "@/components/MedGuard/MedicineScanForm";
import Footer from "@/components/MedGuard/Footer";
import { checkMedicineSafety } from "@/services/api";
import { useMedicine } from "@/context/MedicineContext";

const Dashboard = () => {
  const navigate = useNavigate();
  const { ocrResult, userContext, setProcessedResult } = useMedicine();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async () => {
    if (!ocrResult) return;

    setIsSubmitting(true);

    try {
      const payload = {
        userContext,
        document: ocrResult,
      };

      const result = await checkMedicineSafety(payload);

      setProcessedResult(result);
      console.log("result" , result)
      navigate("/result", { state: { fromDashboard: true } });

      // navigate("/result");
    } catch (err) {
      console.error("Medicine safety check failed:", err);
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
          <MedicineScanForm
            onSubmit={handleFormSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
