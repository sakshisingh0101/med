// Placeholder API service for MedGuard backend integration
// TODO: Replace with actual API endpoint when backend is ready

export interface MedicineSafetyRequest {
  imageData: string | null; // Base64 encoded image or null
  imageFile: File | null;
  userContext: {
    age: string;
    conditions: string[];
    medicines: string[];
    foodStatus: "empty" | "after";
  };
}

export interface MedicineSafetyResponse {
  safetyLevel: "safe" | "caution" | "danger";
  medicineName: string;
  reasons: string[];
  explanation: string;
}

// Placeholder function - replace with actual API call
export const checkMedicineSafety = async (
  request: MedicineSafetyRequest
): Promise<MedicineSafetyResponse> => {
  // TODO: Replace this with actual fetch call to backend API
  // Example:
  // const response = await fetch('YOUR_API_ENDPOINT/check-safety', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(request),
  // });
  // return response.json();

  console.log("API Request (placeholder):", request);

  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Return mock response for now
  const mockResponses: MedicineSafetyResponse[] = [
    {
      safetyLevel: "safe",
      medicineName: "Paracetamol 500mg",
      reasons: [
        "No known interactions with your current medications",
        "Suitable for your age group",
        "Safe to take after food as selected",
      ],
      explanation:
        "Based on the information you provided, this medicine appears safe for you to take. However, always follow the dosage instructions on the packaging and stop immediately if you notice any unusual symptoms.",
    },
    {
      safetyLevel: "caution",
      medicineName: "Ibuprofen 400mg",
      reasons: [
        "May cause drowsiness — avoid driving",
        "Take with plenty of water",
        "Possible mild interaction with blood pressure medication",
      ],
      explanation:
        "You can take this medicine, but please be careful. Monitor how you feel over the next few hours. If you experience dizziness, nausea, or any discomfort, stop taking it and consult your doctor.",
    },
    {
      safetyLevel: "danger",
      medicineName: "Aspirin 325mg",
      reasons: [
        "Known interaction with Metformin (Diabetes medication)",
        "Not recommended for kidney conditions",
        "Should not be taken on empty stomach",
      ],
      explanation:
        "We strongly advise against taking this medicine based on your health profile. The combination with your current medications could be harmful. Please consult your doctor before proceeding.",
    },
  ];

  // Return random mock response
  return mockResponses[Math.floor(Math.random() * mockResponses.length)];
};
