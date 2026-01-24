import { CheckCircle, AlertTriangle, XCircle, Volume2, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

type SafetyLevel = "safe" | "caution" | "danger";

interface ResultCardProps {
  result: SafetyLevel;
  medicineName: string;
  reasons: string[];
  explanation: string;
  onBack: () => void;
}

const resultConfig = {
  safe: {
    label: "SAFE TO TAKE",
    icon: CheckCircle,
    bgClass: "bg-safe-bg",
    borderClass: "border-safe",
    iconClass: "text-safe",
    labelClass: "text-safe",
  },
  caution: {
    label: "TAKE WITH CAUTION",
    icon: AlertTriangle,
    bgClass: "bg-caution-bg",
    borderClass: "border-caution",
    iconClass: "text-caution",
    labelClass: "text-caution",
  },
  danger: {
    label: "DO NOT TAKE",
    icon: XCircle,
    bgClass: "bg-danger-bg",
    borderClass: "border-danger",
    iconClass: "text-danger",
    labelClass: "text-danger",
  },
};

const ResultCard = ({ result, medicineName, reasons, explanation, onBack }: ResultCardProps) => {
  const config = resultConfig[result];
  const Icon = config.icon;

  return (
    <div className="max-w-lg mx-auto space-y-6 animate-fade-in px-4">
      {/* Back button */}
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={onBack}
        className="gap-2"
      >
        <ArrowLeft className="w-4 h-4" />
        Check another medicine
      </Button>

      {/* Main Result Card */}
      <div className={`rounded-3xl border-2 ${config.bgClass} ${config.borderClass} p-8 space-y-6`}>
        {/* Medicine Name */}
        <p className="text-center text-muted-foreground font-medium">
          Results for: <span className="text-foreground">{medicineName}</span>
        </p>

        {/* Safety Status */}
        <div className="text-center space-y-4">
          <div className={`inline-flex items-center justify-center w-20 h-20 rounded-full ${config.bgClass}`}>
            <Icon className={`w-12 h-12 ${config.iconClass}`} strokeWidth={2.5} />
          </div>
          <h2 className={`font-display text-2xl md:text-3xl font-bold ${config.labelClass}`}>
            {config.label}
          </h2>
        </div>

        {/* Reasons */}
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground text-lg">Why?</h3>
          <ul className="space-y-2">
            {reasons.map((reason, index) => (
              <li 
                key={index} 
                className="flex items-start gap-3 text-foreground"
              >
                <span className="w-2 h-2 mt-2 rounded-full bg-current opacity-60 shrink-0" />
                <span className="text-base">{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Explanation */}
        <div className="pt-4 border-t border-border/50">
          <p className="text-foreground text-base leading-relaxed">
            {explanation}
          </p>
        </div>

        {/* Audio option (visual only) */}
        <button 
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mx-auto"
          aria-label="Listen to explanation"
        >
          <Volume2 className="w-5 h-5" />
          <span className="text-sm font-medium">Listen to this</span>
        </button>
      </div>
    </div>
  );
};

export default ResultCard;
