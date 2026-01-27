import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { useMedicine } from "@/context/MedicineContext";
import MedicineResultCard from "@/components/MedGuard/MedicineResultCard";

const ResultPage = () => {
  const navigate = useNavigate();
  const { processedResult } = useMedicine();
 


  if (!processedResult) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>No result found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background px-4 py-6">
      <div className="max-w-4xl mx-auto space-y-6">
        <Button
          variant="ghost"
          className="gap-2"
          onClick={() => navigate("/")}
        >
          <ArrowLeft className="w-4 h-4" />
          Scan another
        </Button>

        {processedResult.medicines.map((med, idx) => (
          <MedicineResultCard key={idx} medicine={med} />
        ))}
      </div>
    </div>
  );
};

export default ResultPage;
