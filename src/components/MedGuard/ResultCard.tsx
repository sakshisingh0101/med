// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { useNavigate } from "react-router-dom";
// import { useMedicine } from "@/context/MedicineContext";
// import MedicineResultCard from "@/components/MedGuard/MedicineResultCard";

// const ResultPage = () => {
//   const navigate = useNavigate();
//   const { processedResult } = useMedicine();
 


//   if (!processedResult) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <p>No result found</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-background px-4 py-6">
//       <div className="max-w-4xl mx-auto space-y-6">
//         <Button
//           variant="ghost"
//           className="gap-2"
//           onClick={() => navigate("/")}
//         >
//           <ArrowLeft className="w-4 h-4" />
//           Scan another
//         </Button>

//         {processedResult.medicines.map((med, idx) => (
//           <MedicineResultCard key={idx} medicine={med} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ResultPage;


import { ArrowLeft, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useMedicine } from "@/context/MedicineContext";
import MedicineResultCard from "@/components/MedGuard/MedicineResultCard";

const confidenceMap: Record<string, string> = {
  low: "Low confidence — follow doctor advice strictly",
  medium: "Medium confidence — review instructions carefully",
  high: "High confidence — safe if followed correctly",
};

const ResultPage = () => {
  const navigate = useNavigate();
  const { processedResult } = useMedicine();

  if (!processedResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No result found. Please scan a prescription first.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="max-w-5xl mx-auto space-y-8">
        
        {/* Back */}
        <Button
          variant="ghost"
          className="gap-2"
          onClick={() => navigate("/dashboard")}
        >
          <ArrowLeft className="w-4 h-4" />
          Scan another prescription
        </Button>

        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <ShieldCheck className="w-7 h-7 text-primary" />
            Medicine Safety Report
          </h1>

          <p className="text-muted-foreground">
            Personalized analysis based on your prescription and health context
          </p>
        </div>

        {/* Confidence */}
        <div className="rounded-xl border bg-muted/40 p-4 text-sm">
          <span className="font-medium">Overall Confidence: </span>
          {confidenceMap[processedResult.confidence] ??
            "Confidence level unavailable"}
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {processedResult.medicines.map((med, idx) => (
            <MedicineResultCard key={idx} medicine={med} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResultPage;
