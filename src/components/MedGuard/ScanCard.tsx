import { Camera, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ScanCardProps {
  onScanClick: () => void;
  onUploadClick: () => void;
}

const ScanCard = ({ onScanClick, onUploadClick }: ScanCardProps) => {
  return (
    <div className="card-elevated p-8 max-w-md mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
      <div className="text-center space-y-6">
        {/* Camera icon illustration */}
        <div className="flex items-center justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Camera className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* Main scan button */}
        <Button 
          variant="scan" 
          size="xl" 
          className="w-full"
          onClick={onScanClick}
        >
          <Camera className="w-6 h-6" />
          Scan Medicine
        </Button>

        {/* Divider */}
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-sm text-muted-foreground">or</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Upload option */}
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full"
          onClick={onUploadClick}
        >
          <Upload className="w-5 h-5" />
          Upload image instead
        </Button>

        {/* Camera permission note */}
        <p className="text-sm text-muted-foreground">
          Camera access may be required for scanning
        </p>
      </div>
    </div>
  );
};

export default ScanCard;
