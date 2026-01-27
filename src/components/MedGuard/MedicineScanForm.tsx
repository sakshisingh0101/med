// import { useState, useRef } from "react";
// import { Camera, Upload, X, Image as ImageIcon, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import CameraCapture from "./CameraCapture";

// interface MedicineScanFormProps {
//   onSubmit: (data: FormData) => void;
//   isSubmitting: boolean;
// }

// export interface FormData {
//   capturedImage: string | null;
//   uploadedFile: File | null;
//   age: string;
//   conditions: string[];
//   medicines: string[];
//   foodStatus: "empty" | "after";
// }

// const commonConditions = [
//   "Diabetes",
//   "High Blood Pressure",
//   "Heart Disease",
//   "Kidney Issues",
//   "Liver Problems",
//   "Pregnancy",
//   "Allergies",
// ];

// const MedicineScanForm = ({ onSubmit, isSubmitting }: MedicineScanFormProps) => {
//   // Image state
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Form state
//   const [age, setAge] = useState("");
//   const [selectedConditions, setSelectedConditions] = useState<string[]>([]);
//   const [medicines, setMedicines] = useState<string[]>([]);
//   const [medicineInput, setMedicineInput] = useState("");
//   const [foodStatus, setFoodStatus] = useState<"empty" | "after">("empty");

//   const handleCameraCapture = (imageData: string) => {
//     setCapturedImage(imageData);
//     setUploadedFile(null);
//     setPreviewUrl(imageData);
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setUploadedFile(file);
//       setCapturedImage(null);
//       const url = URL.createObjectURL(file);
//       setPreviewUrl(url);
//     }
//   };

//   const clearImage = () => {
//     setCapturedImage(null);
//     setUploadedFile(null);
//     if (previewUrl && !capturedImage) {
//       URL.revokeObjectURL(previewUrl);
//     }
//     setPreviewUrl(null);
//     if (fileInputRef.current) {
//       fileInputRef.current.value = "";
//     }
//   };

//   const toggleCondition = (condition: string) => {
//     setSelectedConditions((prev) =>
//       prev.includes(condition)
//         ? prev.filter((c) => c !== condition)
//         : [...prev, condition]
//     );
//   };

//   const addMedicine = () => {
//     if (medicineInput.trim() && !medicines.includes(medicineInput.trim())) {
//       setMedicines((prev) => [...prev, medicineInput.trim()]);
//       setMedicineInput("");
//     }
//   };

//   const removeMedicine = (medicine: string) => {
//     setMedicines((prev) => prev.filter((m) => m !== medicine));
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addMedicine();
//     }
//   };

//   const handleSubmit = () => {
//     onSubmit({
//       capturedImage,
//       uploadedFile,
//       age,
//       conditions: selectedConditions,
//       medicines,
//       foodStatus,
//     });
//   };

//   const hasImage = capturedImage || uploadedFile;

//   return (
//     <>
//       <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
//         {/* Left Side - Scan/Upload Card */}
//         <div className="card-elevated p-6 md:p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="font-display text-title text-foreground">Scan Medicine</h2>
//             <p className="text-muted-foreground mt-1">Take a photo or upload an image</p>
//           </div>

//           {/* Image Preview or Actions */}
//           {previewUrl ? (
//             <div className="space-y-4">
//               <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20">
//                 <img
//                   src={previewUrl}
//                   alt="Medicine preview"
//                   className="w-full h-full object-cover"
//                 />
//                 <button
//                   onClick={clearImage}
//                   className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition-colors shadow-md"
//                   aria-label="Remove image"
//                 >
//                   <X className="w-5 h-5 text-foreground" />
//                 </button>
//               </div>
//               <p className="text-sm text-muted-foreground text-center">
//                 {capturedImage ? "Photo captured" : uploadedFile?.name}
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               {/* Camera icon illustration */}
//               <div className="flex items-center justify-center">
//                 <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
//                   <Camera className="w-12 h-12 text-primary" />
//                 </div>
//               </div>

//               {/* Scan button */}
//               <Button
//                 variant="scan"
//                 size="xl"
//                 className="w-full"
//                 onClick={() => setIsCameraOpen(true)}
//               >
//                 <Camera className="w-6 h-6" />
//                 Scan Medicine
//               </Button>

//               {/* Divider */}
//               <div className="flex items-center gap-4">
//                 <div className="flex-1 h-px bg-border" />
//                 <span className="text-sm text-muted-foreground">or</span>
//                 <div className="flex-1 h-px bg-border" />
//               </div>

//               {/* Upload button */}
//               <Button
//                 variant="outline"
//                 size="lg"
//                 className="w-full"
//                 onClick={() => fileInputRef.current?.click()}
//               >
//                 <Upload className="w-5 h-5" />
//                 Upload image instead
//               </Button>

//               <input
//                 ref={fileInputRef}
//                 type="file"
//                 accept="image/*"
//                 onChange={handleFileUpload}
//                 className="hidden"
//               />
{/* 
              <p className="text-sm text-muted-foreground text-center">
                Camera access may be required for scanning
              </p>
            </div>
          )}
        </div>

        {/* Right Side - User Context Form */}
//         <div className="card-elevated p-6 md:p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="font-display text-title text-foreground">Your Details</h2>
//             <p className="text-muted-foreground mt-1">Help us give you accurate results</p>
//           </div>

//           {/* Age Input */}
//           <div className="space-y-3">
//             <Label htmlFor="age" className="text-base font-medium">
//               Your Age
//             </Label>
//             <Input
//               id="age"
//               type="number"
//               placeholder="Enter your age"
//               value={age}
//               onChange={(e) => setAge(e.target.value)}
//               className="h-14 text-lg rounded-xl"
//               min={0}
//               max={120}
//             />
//           </div>

//           {/* Conditions Multi-select */}
//           <div className="space-y-3">
//             <Label className="text-base font-medium">
//               Existing Health Conditions
//             </Label>
//             <div className="flex flex-wrap gap-2">
//               {commonConditions.map((condition) => (
//                 <button
//                   key={condition}
//                   type="button"
//                   onClick={() => toggleCondition(condition)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     selectedConditions.includes(condition)
//                       ? "bg-primary text-primary-foreground"
//                       : "bg-secondary text-secondary-foreground hover:bg-accent"
//                   }`}
//                 >
//                   {condition}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Medicines Taken Today */}
//           <div className="space-y-3">
//             <Label htmlFor="medicines" className="text-base font-medium">
//               Medicines Taken Today
//             </Label>
//             <div className="flex gap-2">
//               <Input
//                 id="medicines"
//                 type="text"
//                 placeholder="Type and press Enter"
//                 value={medicineInput}
//                 onChange={(e) => setMedicineInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="h-12 text-base rounded-xl flex-1"
//               />
//               <Button
//                 type="button"
//                 variant="secondary"
//                 size="default"
//                 onClick={addMedicine}
//               >
//                 Add
//               </Button>
//             </div>
//             {medicines.length > 0 && (
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {medicines.map((medicine) => (
//                   <span
//                     key={medicine}
//                     className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium"
//                   >
//                     {medicine}
//                     <button
//                       type="button"
//                       onClick={() => removeMedicine(medicine)}
//                       className="hover:text-danger transition-colors"
//                       aria-label={`Remove ${medicine}`}
//                     >
//                       <X className="w-4 h-4" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Food Status */}
//           <div className="space-y-3">
//             <Label className="text-base font-medium">Food Status</Label>
//             <RadioGroup
//               value={foodStatus}
//               onValueChange={(value) => setFoodStatus(value as "empty" | "after")}
//               className="flex gap-4"
//             >
//               <label
//                 className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
//                   foodStatus === "empty"
//                     ? "border-primary bg-primary/5"
//                     : "border-border hover:border-primary/30"
//                 }`}
//               >
//                 <RadioGroupItem value="empty" id="empty" />
//                 <span className="text-base font-medium">Empty Stomach</span>
//               </label>
//               <label
//                 className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
//                   foodStatus === "after"
//                     ? "border-primary bg-primary/5"
//                     : "border-border hover:border-primary/30"
//                 }`}
//               >
//                 <RadioGroupItem value="after" id="after" />
//                 <span className="text-base font-medium">After Food</span>
//               </label>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>

//       {/* Submit Button - Full Width Below Both Cards */}
//       <div className="max-w-5xl mx-auto mt-8">
//         <Button
//           variant="default"
//           size="xl"
//           className="w-full"
//           onClick={handleSubmit}
//           disabled={!hasImage || isSubmitting}
//         >
//           {isSubmitting ? (
//             <>
//               <Loader2 className="w-6 h-6 animate-spin" />
//               Checking Safety...
//             </>
//           ) : (
//             "Check Safety"
//           )}
//         </Button>
//         {!hasImage && (
//           <p className="text-sm text-muted-foreground text-center mt-3">
//             Please scan or upload a medicine image to continue
//           </p>
//         )}
//       </div>

//       {/* Camera Dialog */}
//       <CameraCapture
//         isOpen={isCameraOpen}
//         onClose={() => setIsCameraOpen(false)}
//         onCapture={handleCameraCapture}
//       />
//     </>
//   );
// };

// export default MedicineScanForm; */}




// import { useState, useRef } from "react";
// import { Camera, Upload, X, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import CameraCapture from "./CameraCapture";
// import { useMedicine } from "@/context/MedicineContext";
// import { api } from "@/lib/api";

// // ✅ Define FormData type for Dashboard
// export interface FormData {
//   age: number;
//   conditions: string[];
//   medicines: string[];
//   foodStatus: "empty" | "after";
//   capturedImage?: string | null;
//   uploadedFile?: File | null;
// }

// interface MedicineScanFormProps {
//   isSubmitting: boolean;
//   onSubmit: (data: FormData) => void; // ✅ Add onSubmit prop
// }

// const commonConditions = [
//   "Diabetes",
//   "High Blood Pressure",
//   "Heart Disease",
//   "Kidney Issues",
//   "Liver Problems",
//   "Pregnancy",
//   "Vitamin Deficiency",
//   "Fever",
//   "Allergies",
// ];

// const MedicineScanForm = ({ isSubmitting, onSubmit }: MedicineScanFormProps) => {
//   const { ocrResult, setOcrResult, processedResult, setProcessedResult, userContext, setUserContext } =
//     useMedicine();

//   // Image state
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [loadingOCR, setLoadingOCR] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Medicines input
//   const [medicineInput, setMedicineInput] = useState("");
//   const [medicines, setMedicines] = useState<string[]>(userContext?.conditions || []);

//   const handleCameraCapture = (imageData: string) => {
//     setCapturedImage(imageData);
//     setUploadedFile(null);
//     setPreviewUrl(imageData);
//     sendToOCR(imageData);
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setUploadedFile(file);
//     setCapturedImage(null);
//     const url = URL.createObjectURL(file);
//     setPreviewUrl(url);
//     sendToOCR(file);
//   };

//   const clearImage = () => {
//     setCapturedImage(null);
//     setUploadedFile(null);
//     if (previewUrl && !capturedImage) URL.revokeObjectURL(previewUrl);
//     setPreviewUrl(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//     setOcrResult(null);
//   };

//   const sendToOCR = async (image: string | File) => {
//     setLoadingOCR(true);
//     try {
//       const formData = new FormData();
//       if (typeof image === "string") {
//         const res = await fetch(image);
//         const blob = await res.blob();
//         formData.append("file", new File([blob], "capture.png", { type: blob.type }));
//       } else {
//         formData.append("file", image);
//       }

//       const { data } = await api.post("/ocr/ocrTextExtraction", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setOcrResult(data.data);
//     } catch (err) {
//       console.error("OCR Error:", err);
//     } finally {
//       setLoadingOCR(false);
//     }
//   };

//   const toggleCondition = (condition: string) => {
//     const newConditions = userContext.conditions.includes(condition)
//       ? userContext.conditions.filter((c) => c !== condition)
//       : [...userContext.conditions, condition];
//     setUserContext({ ...userContext, conditions: newConditions });
//   };

//   const addMedicine = () => {
//     if (medicineInput.trim() && !medicines.includes(medicineInput.trim())) {
//       const updatedMeds = [...medicines, medicineInput.trim()];
//       setMedicines(updatedMeds);
//       setMedicineInput("");
//       setUserContext({ ...userContext, time: "morning" }); // optional default
//     }
//   };

//   const removeMedicine = (medicine: string) => {
//     const updatedMeds = medicines.filter((m) => m !== medicine);
//     setMedicines(updatedMeds);
//   };

//   const handleKeyDown = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter") {
//       e.preventDefault();
//       addMedicine();
//     }
//   };

//   // ✅ New: handle submit that calls parent onSubmit
//   const handleSubmitClick = () => {
//     const data: FormData = {
//       age: userContext.age,
//       conditions: userContext.conditions,
//       medicines,
//       foodStatus: userContext.foodState,
//       capturedImage,
//       uploadedFile,
//     };

//     onSubmit(data); // send data to Dashboard
//   };

//   const hasImage = capturedImage || uploadedFile;

//   return (
//     <>
//       <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
//         {/* Left Side - Scan/Upload */}
//         <div className="card-elevated p-6 md:p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="font-display text-title text-foreground">Scan Medicine</h2>
//             <p className="text-muted-foreground mt-1">Take a photo or upload an image</p>
//           </div>

//           {previewUrl ? (
//             <div className="space-y-4">
//               <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20">
//                 <img src={previewUrl} alt="Medicine preview" className="w-full h-full object-cover" />
//                 <button
//                   onClick={clearImage}
//                   className="absolute top-3 right-3 p-2 rounded-full bg-background/80 hover:bg-background transition-colors shadow-md"
//                   aria-label="Remove image"
//                 >
//                   <X className="w-5 h-5 text-foreground" />
//                 </button>
//               </div>
//               <p className="text-sm text-muted-foreground text-center">
//                 {capturedImage ? "Photo captured" : uploadedFile?.name}
//               </p>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <div className="flex items-center justify-center">
//                 <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
//                   <Camera className="w-12 h-12 text-primary" />
//                 </div>
//               </div>
//               <Button variant="scan" size="xl" className="w-full" onClick={() => setIsCameraOpen(true)}>
//                 <Camera className="w-6 h-6" />
//                 Scan Medicine
//               </Button>
//               <div className="flex items-center gap-4">
//                 <div className="flex-1 h-px bg-border" />
//                 <span className="text-sm text-muted-foreground">or</span>
//                 <div className="flex-1 h-px bg-border" />
//               </div>
//               <Button variant="outline" size="lg" className="w-full" onClick={() => fileInputRef.current?.click()}>
//                 <Upload className="w-5 h-5" />
//                 Upload image instead
//               </Button>
//               <input ref={fileInputRef} type="file" accept="image/*" onChange={handleFileUpload} className="hidden" />
//               <p className="text-sm text-muted-foreground text-center">Camera access may be required for scanning</p>
//             </div>
//           )}
//         </div>

//         {/* Right Side - User Form */}
//         <div className="card-elevated p-6 md:p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="font-display text-title text-foreground">Your Details</h2>
//             <p className="text-muted-foreground mt-1">Help us give you accurate results</p>
//           </div>

//           {/* Age */}
//           <div className="space-y-3">
//             <Label htmlFor="age" className="text-base font-medium">Your Age</Label>
//             <Input
//               id="age"
//               type="number"
//               placeholder="Enter your age"
//               value={userContext.age || ""}
//               onChange={(e) => setUserContext({ ...userContext, age: Number(e.target.value) })}
//               className="h-14 text-lg rounded-xl"
//               min={0}
//               max={120}
//             />
//           </div>

//           {/* Conditions */}
//           <div className="space-y-3">
//             <Label className="text-base font-medium">Existing Health Conditions</Label>
//             <div className="flex flex-wrap gap-2">
//               {commonConditions.map((condition) => (
//                 <button
//                   key={condition}
//                   type="button"
//                   onClick={() => toggleCondition(condition)}
//                   className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
//                     userContext.conditions.includes(condition)
//                       ? "bg-primary text-primary-foreground"
//                       : "bg-secondary text-secondary-foreground hover:bg-accent"
//                   }`}
//                 >
//                   {condition}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Medicines */}
//           <div className="space-y-3">
//             <Label htmlFor="medicines" className="text-base font-medium">Medicines Taken Today</Label>
//             <div className="flex gap-2">
//               <Input
//                 id="medicines"
//                 type="text"
//                 placeholder="Type and press Enter"
//                 value={medicineInput}
//                 onChange={(e) => setMedicineInput(e.target.value)}
//                 onKeyDown={handleKeyDown}
//                 className="h-12 text-base rounded-xl flex-1"
//               />
//               <Button type="button" variant="secondary" size="default" onClick={addMedicine}>Add</Button>
//             </div>
//             {medicines.length > 0 && (
//               <div className="flex flex-wrap gap-2 mt-3">
//                 {medicines.map((medicine) => (
//                   <span key={medicine} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-accent-foreground text-sm font-medium">
//                     {medicine}
//                     <button type="button" onClick={() => removeMedicine(medicine)} className="hover:text-danger transition-colors" aria-label={`Remove ${medicine}`}>
//                       <X className="w-4 h-4" />
//                     </button>
//                   </span>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Food Status */}
//           <div className="space-y-3">
//             <Label className="text-base font-medium">Food Status</Label>
//             <RadioGroup
//               value={userContext.foodState}
//               onValueChange={(value) => setUserContext({ ...userContext, foodState: value as "empty" | "after" })}
//               className="flex gap-4"
//             >
//               <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
//                 userContext.foodState === "empty" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
//               }`}>
//                 <RadioGroupItem value="empty" id="empty" />
//                 <span className="text-base font-medium">Empty Stomach</span>
//               </label>
//               <label className={`flex-1 flex items-center justify-center gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200 ${
//                 userContext.foodState === "after" ? "border-primary bg-primary/5" : "border-border hover:border-primary/30"
//               }`}>
//                 <RadioGroupItem value="after" id="after" />
//                 <span className="text-base font-medium">After Food</span>
//               </label>
//             </RadioGroup>
//           </div>
//         </div>
//       </div>

//       {/* Submit */}
//       <div className="max-w-5xl mx-auto mt-8">
//         <Button
//           variant="default"
//           size="xl"
//           className="w-full"
//           onClick={handleSubmitClick} // ✅ call onSubmit
//           disabled={!hasImage || isSubmitting || loadingOCR}
//         >
//           {loadingOCR ? (
//             <><Loader2 className="w-6 h-6 animate-spin" /> Extracting Text...</>
//           ) : isSubmitting ? (
//             <><Loader2 className="w-6 h-6 animate-spin" /> Checking Safety...</>
//           ) : (
//             "Check Safety"
//           )}
//         </Button>
//         {!hasImage && <p className="text-sm text-muted-foreground text-center mt-3">Please scan or upload a medicine image to continue</p>}
//       </div>

//       <CameraCapture
//         isOpen={isCameraOpen}
//         onClose={() => setIsCameraOpen(false)}
//         onCapture={handleCameraCapture}
//       />
//     </>
//   );
// };

// export default MedicineScanForm;



// import { useState, useRef } from "react";
// import { Camera, Upload, X, Loader2 } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
// import CameraCapture from "./CameraCapture";
// import { useMedicine } from "@/context/MedicineContext";
// import { api } from "@/lib/api";

// interface MedicineScanFormProps {
//   isSubmitting: boolean;
//   onSubmit: () => void;
// }

// const commonConditions = [
//   "Diabetes",
//   "High Blood Pressure",
//   "Heart Disease",
//   "Kidney Issues",
//   "Liver Problems",
//   "Pregnancy",
//   "Vitamin Deficiency",
//   "Fever",
//   "Allergies",
// ];

// const MedicineScanForm = ({ isSubmitting, onSubmit }: MedicineScanFormProps) => {
//   const { setOcrResult, userContext, setUserContext } = useMedicine();

//   // Image state
//   const [capturedImage, setCapturedImage] = useState<string | null>(null);
//   const [uploadedFile, setUploadedFile] = useState<File | null>(null);
//   const [previewUrl, setPreviewUrl] = useState<string | null>(null);
//   const [isCameraOpen, setIsCameraOpen] = useState(false);
//   const [loadingOCR, setLoadingOCR] = useState(false);
//   const fileInputRef = useRef<HTMLInputElement>(null);

//   // Manual medicines input (optional UX)
//   const [medicineInput, setMedicineInput] = useState("");
//   const [medicines, setMedicines] = useState<string[]>([]);

//   const handleCameraCapture = (imageData: string) => {
//     setCapturedImage(imageData);
//     setUploadedFile(null);
//     setPreviewUrl(imageData);
//     sendToOCR(imageData);
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (!file) return;
//     setUploadedFile(file);
//     setCapturedImage(null);
//     const url = URL.createObjectURL(file);
//     setPreviewUrl(url);
//     sendToOCR(file);
//   };

//   const clearImage = () => {
//     setCapturedImage(null);
//     setUploadedFile(null);
//     if (previewUrl) URL.revokeObjectURL(previewUrl);
//     setPreviewUrl(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//     setOcrResult(null);
//   };

//   const sendToOCR = async (image: string | File) => {
//     setLoadingOCR(true);
//     try {
//       const formData = new FormData();

//       if (typeof image === "string") {
//         const res = await fetch(image);
//         const blob = await res.blob();
//         formData.append("file", new File([blob], "capture.png", { type: blob.type }));
//       } else {
//         formData.append("file", image);
//       }

//       const { data } = await api.post("/ocr/ocrTextExtraction", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       setOcrResult(data.data);
//     } catch (err) {
//       console.error("OCR Error:", err);
//     } finally {
//       setLoadingOCR(false);
//     }
//   };

//   const toggleCondition = (condition: string) => {
//     const updated = userContext.conditions.includes(condition)
//       ? userContext.conditions.filter((c) => c !== condition)
//       : [...userContext.conditions, condition];

//     setUserContext({ ...userContext, conditions: updated });
//   };

//   const addMedicine = () => {
//     if (!medicineInput.trim() || medicines.includes(medicineInput.trim())) return;
//     setMedicines([...medicines, medicineInput.trim()]);
//     setMedicineInput("");
//   };

//   const removeMedicine = (medicine: string) => {
//     setMedicines(medicines.filter((m) => m !== medicine));
//   };

//   const hasImage = capturedImage || uploadedFile;

//   return (
//     <>
//       <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
//         {/* Left */}
//         <div className="card-elevated p-6 md:p-8 space-y-6">
//           <div className="text-center">
//             <h2 className="font-display text-title">Scan Medicine</h2>
//             <p className="text-muted-foreground mt-1">Take a photo or upload an image</p>
//           </div>

//           {previewUrl ? (
//             <div className="space-y-4">
//               <div className="relative aspect-[4/3] rounded-xl overflow-hidden border">
//                 <img src={previewUrl} className="w-full h-full object-cover" />
//                 <button onClick={clearImage} className="absolute top-3 right-3">
//                   <X />
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <>
//               <Button onClick={() => setIsCameraOpen(true)} className="w-full">
//                 <Camera /> Scan
//               </Button>
//               <Button onClick={() => fileInputRef.current?.click()} variant="outline">
//                 <Upload /> Upload
//               </Button>
//               <input ref={fileInputRef} type="file" hidden onChange={handleFileUpload} />
//             </>
//           )}
//         </div>

//         {/* Right */}
//         <div className="card-elevated p-6 md:p-8 space-y-6">
//           <Label>Your Age</Label>
//           <Input
//             type="number"
//             value={userContext.age || ""}
//             onChange={(e) =>
//               setUserContext({ ...userContext, age: Number(e.target.value) })
//             }
//           />

//           <Label>Conditions</Label>
//           <div className="flex flex-wrap gap-2">
//             {commonConditions.map((c) => (
//               <button
//                 key={c}
//                 onClick={() => toggleCondition(c)}
//                 className={userContext.conditions.includes(c) ? "bg-primary text-white" : ""}
//               >
//                 {c}
//               </button>
//             ))}
//           </div>

//           <Label>Food Status</Label>
//           <RadioGroup
//             value={userContext.foodState}
//             onValueChange={(v) =>
//               setUserContext({ ...userContext, foodState: v as "empty" | "after" | "any" })
//             }
//           >
//             <RadioGroupItem value="empty" /> Empty
//             <RadioGroupItem value="after" /> After
//             <RadioGroupItem value="any" /> Any
//           </RadioGroup>
//         </div>
//       </div>

//       <Button
//         onClick={onSubmit}
//         disabled={!hasImage || isSubmitting || loadingOCR}
//         className="w-full mt-8"
//       >
//         {loadingOCR ? "Extracting…" : isSubmitting ? "Checking…" : "Check Safety"}
//       </Button>

//       <CameraCapture
//         isOpen={isCameraOpen}
//         onClose={() => setIsCameraOpen(false)}
//         onCapture={handleCameraCapture}
//       />
//     </>
//   );
// };

// export default MedicineScanForm;

import { useState, useRef } from "react";
import { Camera, Upload, X, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CameraCapture from "./CameraCapture";
import { useMedicine } from "@/context/MedicineContext";
import { api } from "@/lib/api";

interface MedicineScanFormProps {
  isSubmitting: boolean;
  onSubmit: () => void;
}

const commonConditions = [
  "Diabetes",
  "High Blood Pressure",
  "Heart Disease",
  "Kidney Issues",
  "Liver Problems",
  "Pregnancy",
  "Vitamin Deficiency",
  "Fever",
  "Allergies",
];

const MedicineScanForm = ({ isSubmitting, onSubmit }: MedicineScanFormProps) => {
  const { setOcrResult, userContext, setUserContext } = useMedicine();

  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCameraOpen, setIsCameraOpen] = useState(false);
  const [loadingOCR, setLoadingOCR] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [medicineInput, setMedicineInput] = useState("");
  const [medicines, setMedicines] = useState<string[]>([]);

  const handleCameraCapture = (imageData: string) => {
    setCapturedImage(imageData);
    setUploadedFile(null);
    setPreviewUrl(imageData);
    sendToOCR(imageData);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploadedFile(file);
    setCapturedImage(null);
    const url = URL.createObjectURL(file);
    setPreviewUrl(url);
    sendToOCR(file);
  };

  const clearImage = () => {
    setCapturedImage(null);
    setUploadedFile(null);
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    setPreviewUrl(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
    setOcrResult(null);
  };

  const sendToOCR = async (image: string | File) => {
    setLoadingOCR(true);
    try {
      const formData = new FormData();

      if (typeof image === "string") {
        const res = await fetch(image);
        const blob = await res.blob();
        formData.append("image", new File([blob], "capture.png", { type: blob.type }));
      } else {
        formData.append("image", image);
      }

      const { data } = await api.post("/ocr/ocrTextExtraction", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setOcrResult(data.data);
    } catch (err) {
      console.error("OCR Error:", err);
    } finally {
      setLoadingOCR(false);
    }
  };

  const toggleCondition = (condition: string) => {
    const updated = userContext.conditions.includes(condition)
      ? userContext.conditions.filter((c) => c !== condition)
      : [...userContext.conditions, condition];

    setUserContext({ ...userContext, conditions: updated });
  };

  const addMedicine = () => {
    if (!medicineInput.trim() || medicines.includes(medicineInput.trim())) return;
    setMedicines([...medicines, medicineInput.trim()]);
    setMedicineInput("");
  };

  const hasImage = capturedImage || uploadedFile;

  return (
    <>
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto animate-fade-in">
        {/* LEFT – SCAN */}
        <div className="card-elevated p-6 md:p-8 space-y-6 rounded-2xl shadow-lg bg-background">
          <div className="text-center">
            <h2 className="font-display text-title">Scan Medicine</h2>
            <p className="text-muted-foreground mt-1">
              Take a photo or upload an image
            </p>
          </div>

          {previewUrl ? (
            <div className="space-y-4">
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden border-2 border-primary/20 shadow-sm">
                <img src={previewUrl} className="w-full h-full object-cover" />
                <button
                  onClick={clearImage}
                  className="absolute top-3 right-3 p-2 rounded-full bg-background/80 shadow-md hover:bg-background"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <Button
                onClick={() => setIsCameraOpen(true)}
                className="w-full h-14 text-lg rounded-xl gap-2 shadow-md"
              >
                <Camera className="w-5 h-5" /> Scan Medicine
              </Button>

              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-border" />
                <span className="text-sm text-muted-foreground">or</span>
                <div className="flex-1 h-px bg-border" />
              </div>

              <Button
                onClick={() => fileInputRef.current?.click()}
                variant="outline"
                className="w-full h-12 rounded-xl gap-2"
              >
                <Upload className="w-4 h-4" /> Upload image
              </Button>

              <input ref={fileInputRef} type="file" hidden onChange={handleFileUpload} />
            </div>
          )}
        </div>

        {/* RIGHT – DETAILS */}
        <div className="card-elevated p-6 md:p-8 space-y-6 rounded-2xl shadow-lg bg-background">
          <div className="text-center">
            <h2 className="font-display text-title">Your Details</h2>
            <p className="text-muted-foreground mt-1">
              Help us give you accurate results
            </p>
          </div>

          <div className="space-y-3">
            <Label>Your Age</Label>
            <Input
              type="number"
              value={userContext.age || ""}
              onChange={(e) =>
                setUserContext({ ...userContext, age: Number(e.target.value) })
              }
              className="h-12 rounded-xl"
            />
          </div>

          <div className="space-y-3">
            <Label>Existing Health Conditions</Label>
            <div className="flex flex-wrap gap-2">
              {commonConditions.map((c) => (
                <button
                  key={c}
                  onClick={() => toggleCondition(c)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                    userContext.conditions.includes(c)
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary text-secondary-foreground hover:bg-accent"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Label>Food Status</Label>
            <RadioGroup
              value={userContext.foodState}
              onValueChange={(v) =>
                setUserContext({ ...userContext, foodState: v as "empty" | "after" | "any" })
              }
              className="flex gap-4"
            >
              {["empty", "after", "any"].map((v) => (
                <label
                  key={v}
                  className={`flex-1 flex items-center justify-center gap-2 p-4 rounded-xl border-2 cursor-pointer transition ${
                    userContext.foodState === v
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/30"
                  }`}
                >
                  <RadioGroupItem value={v} />
                  {v === "empty" ? "Empty Stomach" : v === "after" ? "After Food" : "Any"}
                </label>
              ))}
            </RadioGroup>
          </div>
        </div>
      </div>

      <Button
        onClick={onSubmit}
        disabled={!hasImage || isSubmitting || loadingOCR}
        className="w-full h-14 text-lg rounded-xl shadow-lg mt-8"
      >
        {loadingOCR ? "Extracting…" : isSubmitting ? "Checking…" : "Check Safety"}
      </Button>

      <CameraCapture
        isOpen={isCameraOpen}
        onClose={() => setIsCameraOpen(false)}
        onCapture={handleCameraCapture}
      />
    </>
  );
};

export default MedicineScanForm;
