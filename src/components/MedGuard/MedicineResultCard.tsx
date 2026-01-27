import { AlertTriangle, CheckCircle, XCircle } from "lucide-react";

interface MedicineCardProps {
  medicine: {
    name: string;
    dosage: string;
    purpose: string;
    riskLevel: string;
    schedule: {
      time: string;
      relation: string;
      message_en: string;
    }[];
    warnings: {
      level: string;
      message_en: string;
    }[];
  };
}

const riskConfig: Record<string, any> = {
  LOW: {
    label: "Low Risk",
    icon: CheckCircle,
    color: "text-green-600",
    bg: "bg-green-50",
    border: "border-green-200",
  },
  MEDIUM: {
    label: "Moderate Risk",
    icon: AlertTriangle,
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    border: "border-yellow-200",
  },
  HIGH: {
    label: "High Risk",
    icon: XCircle,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
};

const MedicineResultCard = ({ medicine }: MedicineCardProps) => {
  const config = riskConfig[medicine.riskLevel] || riskConfig.MEDIUM;
  const Icon = config.icon;

  return (
    <div className={`rounded-2xl border ${config.border} ${config.bg} p-6 space-y-5`}>
      {/* Header */}
      <div className="flex items-center gap-4">
        <Icon className={`w-8 h-8 ${config.color}`} />
        <div>
          <h2 className="text-xl font-semibold">{medicine.name}</h2>
          <p className="text-sm text-muted-foreground">{medicine.dosage}</p>
        </div>
      </div>

      {/* Purpose */}
      <p className="text-sm">
        <span className="font-medium">Purpose:</span> {medicine.purpose}
      </p>

      {/* Schedule */}
      <div>
        <h3 className="font-medium mb-2">How to take</h3>
        <ul className="space-y-2">
          {medicine.schedule.map((s, i) => (
            <li key={i} className="text-sm text-muted-foreground">
              • {s.message_en}
            </li>
          ))}
        </ul>
      </div>

      {/* Warnings */}
      {medicine.warnings.length > 0 && (
        <div>
          <h3 className="font-medium mb-2 text-red-600">Warnings</h3>
          <ul className="space-y-2">
            {medicine.warnings.map((w, i) => (
              <li key={i} className="text-sm">
                ⚠ {w.message_en}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MedicineResultCard;
