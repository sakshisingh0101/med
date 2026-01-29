md
🩺 MedGuard Frontend

User Interface for Medicine Safety & Actionable Guidance

📌 Overview

The MedGuard Frontend provides an intuitive and guided user experience for uploading prescriptions, entering health context, and viewing personalized medicine safety reports.

It consumes the MedGuard backend APIs and dynamically renders results based on backend-driven logic.

👤 User Flow (End-to-End)
Landing Page
   ↓
Login / Signup
   ↓
Dashboard
   ↓
Upload Prescription / Medicine Image
   ↓
OCR Triggered Automatically
   ↓
Enter User Health Context
   ↓
Check Medicine Safety
   ↓
Result Page (Actionable Plan)

🔐 Authentication Flow

Landing page contains Login / Signup

AuthContext manages authentication state

Protected routes restrict access to dashboard & results

Logout clears session and redirects to landing page

📷 Image Upload & OCR Trigger

User uploads medicine or prescription image

OCR API is triggered immediately

OCR response is stored in MedicineContext

User proceeds only after OCR success

🧠 State Management
Contexts Used
AuthContext

Login / Logout state

User session management

MedicineContext

OCR result

User health context

Final processed medicine safety response

📄 Pages Overview
Landing Page

Product introduction

CTA for login/signup

Dashboard

Image upload

User context input (age, conditions, food state, time)

“Check Safety” action

Result Page

Overall confidence indicator

Multiple medicine cards

Risk levels, schedules, warnings

English & Hindi instructions

🧾 Result Card Features

Each medicine card displays:

Medicine name & dosage

Risk level (visual indicator)

Purpose of medicine

Step-by-step intake schedule

Warnings & alerts

Prescription availability notice

All UI elements are backend-driven, ensuring consistency with rules.

⚠️ Error Handling

Graceful handling of empty or missing results

Safe rendering using optional chaining

User-friendly fallback messages

🛠️ Environment Setup

Create a .env file:

VITE_API_BASE_URL=<backend_base_url>


Run locally:

npm install
npm run dev

🚧 Known Limitations

Reminder notifications not implemented

OCR confidence may affect final accuracy

No offline support

🚀 Future Enhancements

Medicine reminders

Language toggle

Scan history

Caregiver access

UI accessibility improvements

🧾 Frontend Summary (One Line)

The MedGuard frontend guides users from prescription upload to actionable medicine safety reports through a clean, backend-driven UI.

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
