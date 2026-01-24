import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface UserContextFormProps {
  onSubmit: (data: UserContextData) => void;
}

export interface UserContextData {
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

const UserContextForm = ({ onSubmit }: UserContextFormProps) => {
  const [age, setAge] = useState("");
  const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
  const [medicines, setMedicines] = useState<string[]>([]);
  const [medicineInput, setMedicineInput] = useState("");
  const [foodStatus, setFoodStatus] = useState<"empty" | "after">("empty");

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
      age,
      conditions: selectedConditions,
      medicines,
      foodStatus,
    });
  };

  return (
    <div 
      className="card-elevated p-8 max-w-lg mx-auto space-y-8 animate-fade-in" 
      style={{ animationDelay: "0.2s" }}
    >
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
            placeholder="Type medicine name and press Enter"
            value={medicineInput}
            onChange={(e) => setMedicineInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="h-14 text-lg rounded-xl flex-1"
          />
          <Button 
            type="button" 
            variant="secondary" 
            size="lg"
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

      {/* Submit Button */}
      <Button 
        variant="default" 
        size="xl" 
        className="w-full"
        onClick={handleSubmit}
      >
        Check Safety
      </Button>
    </div>
  );
};

export default UserContextForm;
