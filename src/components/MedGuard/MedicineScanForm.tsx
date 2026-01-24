import { useState, useRef } from "react";
import { Camera, Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CameraCapture from "./CameraCapture";

interface MedicineScanFormProps {
  onSubmit: (data: FormData) => void;
  isSubmitting: boolean;
}

export interface FormData {
  capturedImage: string | null;
  uploadedFile: File | null;
  age: string;
  conditions: string[];
  medicines: string[];
  foodStatus: "empty" | "after";
}

const commonConditions = [
  "Diabetes",
  "High Blood Pressure",
  "Heart Disease",
  "Kidney Issues",
  "Liver Problems",
  "Pregnancy",
  "Allergies",
];

const MedicineScanForm = ({ onSubmit, isSubmitting }: MedicineScanFormProps) => {
  // Image state
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [age, setAge] = useState("");
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [medicines, setMedicines] = useState<string[]>([]);
  const [medicineInput, setMedicineInput] = useState("");
  const [foodStatus, setFoodStatus] = useState<"empty" | "after">("empty");

  const handleCameraCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setUploadedFile(null);
    setPreviewUrl(imageData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFile(file);
      setCapturedImage(null);
      const url = URL.createObjectURL(file);
      setPreviewUrl(url);
    }
  };

  const clearImage = () => {
    setCapturedImage(null);
    setUploadedFile(null);
    if (previewUrl && !capturedImage) {
      URL.revokeObjectURL(previewUrl);
    }
    setPreviewUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) =>
      prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition]
    );
  };

  const addMedicine = () => {
    if (medicineInput.trim() && !medicines.includes(medicineInput.trim())) {
      setMedicines((prev) => [...prev, medicineInput.trim()]);
      setMedicineInput("");
    }
  };

  const removeMedicine = (medicine: string) => {
    setMedicines((prev) => prev.filter((m) => m !== medicine));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      e.preventDefault();
      addMedicine();
    }
  };

  const handleSubmit = () => {
    onSubmit({
      capturedImage,
      uploadedFile,
      age,
      conditions: selectedConditions,
      medicines,
      foodStatus,
    });
  };

  const hasImage = capturedImage || uploadedFile;

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
        {/* Left Side - Scan/Upload Card */}
        <div className="card-elevated p-6 md:p-8 space-y-6">
          <div className="text-center">
            <h2 className="font-display text-title text-foreground">Scan Medicine</h2>
            <p className="text-muted-foreground mt-1">Take a photo or upload an image</p>
          </div>

          {/* Image Preview or Actions */}
          {previewUrl ? (
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20">
                <img
                  src={previewUrl}
                  alt="Medicine preview"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={clearImage}
                  className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition-colors shadow-md"
                  aria-label="Remove image"
                >
                  <X className="w-5 h-5 text-foreground" />
                </button>
              </div>
              <p className="text-sm text-muted-foreground text-center">
                {capturedImage ? "Photo captured" : uploadedFile?.name}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {/* Camera icon illustration */}
              <div className="flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
                  <Camera className="w-12 h-12 text-primary" />
                </div>
              </div>

              {/* Scan button */}
              <Button
                variant="scan"
                size="xl"
                className="w-full"
                onClick={() => setIsCameraOpen(true)}
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

              {/* Upload button */}
              <Button
                variant="outline"
                size="lg"
                className="w-full"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload className="w-5 h-5" />
                Upload image instead
              </Button>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />

              <p className="text-sm text-muted-foreground text-center">
                Camera access may be required for scanning
              </p>
            </div>
          )}
        </div>

        {/* Right Side - User Context Form */}
        <div className="card-elevated p-6 md:p-8 space-y-6">
          <div className="text-center">
            <h2 className="font-display text-title text-foreground">Your Details</h2>
            <p className="text-muted-foreground mt-1">Help us give you accurate results</p>
          </div>

          {/* Age Input */}
          <div className="space-y-3">
            <Label htmlFor="age" className="text-base font-medium">
              Your Age
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="Enter your age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="h-14 text-lg rounded-xl"
              min={0}
              max={120}
            />
          </div>

          {/* Conditions Multi-select */}
          <div className="space-y-3">
            <Label className="text-base font-medium">
              Existing Health Conditions
            </Label>
            <div className="flex flex-wrap gap-2">
              {commonConditions.map((condition) => (
                <button
                  key={condition}
                  type="button"
                  onClick={() => toggleCondition(condition)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedConditions.includes(condition)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {condition}
                </button>
              ))}
            </div>
          </div>

          {/* Medicines Taken Today */}
          <div className="space-y-3">
            <Label htmlFor="medicines" className="text-base font-medium">
              Medicines Taken Today
            </Label>
            <div className="flex gap-2">
              <Input
                id="medicines"
                type="text"
                placeholder="Type and press Enter"
                value={medicineInput}
                onChange={(e) => setMedicineInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="h-12 text-base rounded-xl flex-1"
              />
              <Button
                type="button"
                variant="secondary"
                size="default"
                onClick={addMedicine}
              >
                Add
              </Button>
            </div>
            {medicines.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                {medicines.map((medicine) => (
                  <span
                    key={medicine}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
                  >
                    {medicine}
                    <button
                      type="button"
                      onClick={() => removeMedicine(medicine)}
                      className="hover:text-danger transition-colors"
                      aria-label={`Remove ${medicine}`}
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Food Status */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Food Status</Label>
            <RadioGroup
              value={foodStatus}
              onValueChange={(value) => setFoodStatus(value as "empty" | "after")}
              className="flex gap-4"
            >
              <label
                className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  foodStatus === "empty"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="empty" id="empty" />
                <span className="text-base font-medium">Empty Stomach</span>
              </label>
              <label
                className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
                  foodStatus === "after"
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary/30"
                }`}
              >
                <RadioGroupItem value="after" id="after" />
                <span className="text-base font-medium">After Food</span>
              </label>
            </RadioGroup>
          </div>
        </div>
      </div>

      {/* Submit Button - Full Width Below Both Cards */}
      <div className="max-w-5xl mx-auto mt-8">
        <Button
          variant="default"
          size="xl"
          className="w-full"
          onClick={handleSubmit}
          disabled={!hasImage || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-6 h-6 animate-spin" />
              Checking Safety...
            </>
          ) : (
            "Check Safety"
          )}
        </Button>
        {!hasImage && (
          <p className="text-sm text-muted-foreground text-center mt-3">
            Please scan or upload a medicine image to continue
          </p>
        )}
      </div>

      {/* Camera Dialog */}
      <CameraCapture
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />
    </>
  );
};

export default MedicineScanForm;
