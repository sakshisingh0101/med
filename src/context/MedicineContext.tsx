// import { createContext, useContext, useState } from "react";

// export interface Medicine {
//   name: string;
//   dosage: string;
//   frequency: string;
//   durationDays: string;
// }

// export interface UserContextData {
//   age: number;
//   conditions: string[];
//   foodState: "empty" | "after";
//   time: string;
// }

// export interface OCRResult {
//   type: "PRESCRIPTION" | "MEDICINE" | "UNKNOWN";
//   medicines: Medicine[];
//   confidence: "low" | "medium" | "high";
// }

// export interface ProcessedResult {
//   type: "medicine_to_actionable_plan";
//   confidence: "low" | "medium" | "high";
//   medicines: Array<{
//     name: string;
//     dosage: string;
//     schedule: Array<{
//       time: string;
//       relation: string;
//       message_en: string;
//       message_hi: string;
//     }>;
//     purpose: string;
//     riskLevel: string;
//     warnings: Array<{ level: string; message_en: string; message_hi: string }>;
//   }>;
// }

// interface MedicineContextType {
//   ocrResult: string | null;
//   setOcrResult: React.Dispatch<React.SetStateAction<string | null>>;
//   processedResult: any;
//   setProcessedResult: React.Dispatch<React.SetStateAction<any>>;
//   userContext: {
//     age: number;
//     conditions: string[];
//     foodState: "empty" | "after";
//     time?: string;
//   };
//   setUserContext: React.Dispatch<React.SetStateAction<any>>;
// }

// const MedicineContext = createContext<MedicineContextType | null>(null);

// export const MedicineProvider = ({ children }: { children: React.ReactNode }) => {
//   const [ocrResult, setOcrResult] = useState<OCRResult | null>(null);
//   const [processedResult, setProcessedResult] = useState<ProcessedResult | null>(null);
//   const [userContext, setUserContext] = useState<UserContextData>({
//     age: 0,
//     conditions: [],
//     foodState: "empty",
//     time: "morning",
//   });

//   return (
//     <MedicineContext.Provider
//       value={{ ocrResult, setOcrResult, processedResult, setProcessedResult, userContext, setUserContext }}
//     >
//       {children}
//     </MedicineContext.Provider>
//   );
// };

// export const useMedicine = () => {
//   const ctx = useContext(MedicineContext);
//   if (!ctx) throw new Error("useMedicine must be used within MedicineProvider");
//   return ctx;
// };



// import { createContext, useContext, useState } from "react";

// /* ---------- OCR ---------- */
// export interface Medicine {
//   name: string;
//   dosage: string;
//   frequency: string;
//   durationDays: string;
// }

// export interface OCRResult {
//   type: "PRESCRIPTION" | "MEDICINE" | "UNKNOWN";
//   medicines: Medicine[];
//   confidence: "low" | "medium" | "high";
// }

// /* ---------- USER ---------- */
// export interface UserContextData {
//   age: number;
//   conditions: string[];
//   foodState: "empty" | "after" | "any";
//   time: string;
// }

// /* ---------- PROCESSED ---------- */
// export interface ProcessedResult {
//   type: "medicine_to_actionable_plan";
//   confidence: "low" | "medium" | "high";
//   medicines: {
//     name: string;
//     dosage: string;
//     schedule: {
//       time: string;
//       relation: string;
//       message_en: string;
//       message_hi: string;
//     }[];
//     purpose: string;
//     riskLevel: string;
//     warnings: {
//       level: string;
//       message_en: string;
//       message_hi: string;
//     }[];
//   }[];
// }

// /* ---------- CONTEXT ---------- */
// interface MedicineContextType {
//   ocrResult: OCRResult | null;
//   setOcrResult: React.Dispatch<React.SetStateAction<OCRResult | null>>;

//   processedResult: ProcessedResult | null;
//   setProcessedResult: React.Dispatch<React.SetStateAction<ProcessedResult | null>>;

//   userContext: UserContextData;
//   setUserContext: React.Dispatch<React.SetStateAction<UserContextData>>;
// }

// const MedicineContext = createContext<MedicineContextType | null>(null);

// export const MedicineProvider = ({ children }: { children: React.ReactNode }) => {
//   const [ocrResult, setOcrResult] = useState<OCRResult | null>(null);
//   const [processedResult, setProcessedResult] = useState<ProcessedResult | null>(null);
//   const [userContext, setUserContext] = useState<UserContextData>({
//     age: 0,
//     conditions: [],
//     foodState: "any",
//     time: "morning",
//   });

//   return (
//     <MedicineContext.Provider
//       value={{
//         ocrResult,
//         setOcrResult,
//         processedResult,
//         setProcessedResult,
//         userContext,
//         setUserContext,
//       }}
//     >
//       {children}
//     </MedicineContext.Provider>
//   );
// };

// export const useMedicine = () => {
//   const ctx = useContext(MedicineContext);
//   if (!ctx) throw new Error("useMedicine must be used within MedicineProvider");
//   return ctx;
// };



// import { createContext, useContext, useState } from "react";

// /* ---------- OCR ---------- */
// export interface Medicine {
//   name: string;
//   dosage: string;
//   frequency: string;
//   durationDays: string;
// }

// export interface OCRResult {
//   type: "PRESCRIPTION" | "MEDICINE" | "UNKNOWN";
//   medicines: Medicine[];
//   confidence: "low" | "medium" | "high";
// }

// /* ---------- USER ---------- */
// export interface UserContextData {
//   age: number;
//   conditions: string[];
//   foodState: "empty" | "after" | "any";
//   time: string;
// }

// /* ---------- PROCESSED ---------- */
// export interface ProcessedResult {
//   type: "medicine_to_actionable_plan" | "prescription_to_actionable_plan";
//   confidence: "low" | "medium" | "high";
//   medicines: {
//     name: string;
//     dosage: string;
//     schedule: {
//       time: string;
//       relation: string;
//       message_en: string;
//       message_hi: string;
//     }[];
//     purpose: string;
//     riskLevel: string;
//     warnings: {
//       level: string;
//       message_en: string;
//       message_hi: string;
//     }[];
//   }[];
// }

// /* ---------- CONTEXT ---------- */
// interface MedicineContextType {
//   ocrResult: OCRResult | null;
//   setOcrResult: React.Dispatch<React.SetStateAction<OCRResult | null>>;

//   processedResult: ProcessedResult | null;
//   setProcessedResult: React.Dispatch<React.SetStateAction<ProcessedResult | null>>;

//   userContext: UserContextData;
//   setUserContext: React.Dispatch<React.SetStateAction<UserContextData>>;
// }

// const MedicineContext = createContext<MedicineContextType | null>(null);

// export const MedicineProvider = ({ children }: { children: React.ReactNode }) => {
//   const [ocrResult, setOcrResult] = useState<OCRResult | null>(null);
//   const [processedResult, setProcessedResult] = useState<ProcessedResult | null>(null);
//   const [userContext, setUserContext] = useState<UserContextData>({
//     age: 0,
//     conditions: [],
//     foodState: "any",
//     time: "morning",
//   });

//   return (
//     <MedicineContext.Provider
//       value={{
//         ocrResult,
//         setOcrResult,
//         processedResult,
//         setProcessedResult,
//         userContext,
//         setUserContext,
//       }}
//     >
//       {children}
//     </MedicineContext.Provider>
//   );
// };

// export const useMedicine = () => {
//   const ctx = useContext(MedicineContext);
//   if (!ctx) throw new Error("useMedicine must be used within MedicineProvider");
//   return ctx;
// };




import { createContext, useContext, useState } from "react";

/* ---------- OCR (DO NOT TOUCH) ---------- */
export interface Medicine {
  name: string;
  dosage: string;
  frequency: string;
  durationDays: string;
}

export interface OCRResult {
  type: "PRESCRIPTION" | "MEDICINE" | "UNKNOWN";
  medicines: Medicine[];
  confidence: "low" | "medium" | "high";
}

/* ---------- USER ---------- */
export interface UserContextData {
  age: number;
  conditions: string[];
  foodState: "empty" | "after" | "any";
  time: string;
}

/* ---------- PROCESSED (UPDATED) ---------- */
export interface ProcessedResult {
  type: "medicine_to_actionable_plan" | "prescription_to_actionable_plan";
  confidence: "low" | "medium" | "high";
  medicines: {
    name: string;
    dosage: string;
    schedule: {
      time: string;
      relation: string;
      message_en: string;
      message_hi: string;
    }[];
    purpose: string[];              // 🔥 array
    riskLevel: "low" | "medium" | "high";
    confidence: "low" | "medium" | "high";
    ruleMatched: boolean;
    fallbackReason: string | null;
    warnings: {
      level: string;
      message_en: string;
      message_hi: string;
    }[];
    hasActivePrescription: boolean;
    isPrescriptionFlow: boolean;
  }[];
}

/* ---------- CONTEXT ---------- */
interface MedicineContextType {
  ocrResult: OCRResult | null;
  setOcrResult: React.Dispatch<React.SetStateAction<OCRResult | null>>;

  processedResult: ProcessedResult | null;
  setProcessedResult: React.Dispatch<React.SetStateAction<ProcessedResult | null>>;

  userContext: UserContextData;
  setUserContext: React.Dispatch<React.SetStateAction<UserContextData>>;
}

const MedicineContext = createContext<MedicineContextType | null>(null);

export const MedicineProvider = ({ children }: { children: React.ReactNode }) => {
  const [ocrResult, setOcrResult] = useState<OCRResult | null>(null);
  const [processedResult, setProcessedResult] = useState<ProcessedResult | null>(null);
  const [userContext, setUserContext] = useState<UserContextData>({
    age: 0,
    conditions: [],
    foodState: "any",
    time: "morning",
  });

  return (
    <MedicineContext.Provider
      value={{
        ocrResult,
        setOcrResult,
        processedResult,
        setProcessedResult,
        userContext,
        setUserContext,
      }}
    >
      {children}
    </MedicineContext.Provider>
  );
};

export const useMedicine = () => {
  const ctx = useContext(MedicineContext);
  if (!ctx) throw new Error("useMedicine must be used within MedicineProvider");
  return ctx;
};
